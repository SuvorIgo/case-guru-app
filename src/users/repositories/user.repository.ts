import { Repository, DataSource } from 'typeorm';
import { hashingPassword } from 'src/functions/hashing-and-comparsion-passwords/hashing-password.function';
import { Users } from '../entities/users.entity';
import { Injectable } from '@nestjs/common';
import { RegistrationUserDto } from 'src/auth/dtos/registration.dto';
import { AuthorizationUserDto } from 'src/auth/dtos/authorization.dto';
import { comparePasswords } from 'src/functions/hashing-and-comparsion-passwords/compare-password.function';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersRepository extends Repository<Users> {
  constructor(
    private dataSource: DataSource,
    private jwtService: JwtService,
  ) {
    super(Users, dataSource.createEntityManager());
  }

  public async createUser(payload: RegistrationUserDto): Promise<Users | any> {
    const checkUserLogin = await this.checkLogin(payload);

    if (checkUserLogin)
      return {
        statusCode: 409,
        message: 'Пользователь с таким логином существует',
      };

    const hashPassword = await hashingPassword(payload.password);

    const apiToken = await this.jwtService.signAsync({
      ...payload,
      password: hashPassword,
    });
    console.log(apiToken);

    await this.save({ ...payload, password: hashPassword, apiToken: apiToken });

    return {
      ...payload,
      password: hashPassword,
      apiToken: apiToken,
    };
  }

  public async getUserByLogin(
    payload: AuthorizationUserDto,
  ): Promise<Users | any> {
    const checkUserLogin = await this.checkLogin(payload);

    if (!checkUserLogin)
      return {
        statusCode: 409,
        message: 'Пользователь с таким логином не существует',
      };

    const checkComparePasswords = await this.comparePasswords(payload);

    if (!checkComparePasswords)
      return {
        statusCode: 401,
        message: 'Неправильный пароль',
      };

    return await this.findOne({ where: { login: payload.login } });
  }

  public async checkApiToken(apiToken: string): Promise<boolean> {
    const user = await this.findOne({ where: { apiToken: apiToken } });

    return !user ? false : true;
  }

  private async checkLogin(
    payload: RegistrationUserDto | AuthorizationUserDto,
  ): Promise<boolean> {
    const user = await this.findOne({ where: { login: payload.login } });

    return !user ? false : true;
  }

  private async comparePasswords(
    payload: AuthorizationUserDto,
  ): Promise<boolean> {
    const currentPassword = payload.password;

    const user = await this.findOne({ where: { login: payload.login } });

    return await comparePasswords(currentPassword, user.password);
  }
}
