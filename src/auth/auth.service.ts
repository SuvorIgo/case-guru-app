import { Injectable } from '@nestjs/common';
import { RegistrationUserDto } from './dtos/registration.dto';
import { AuthorizationUserDto } from './dtos/authorization.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registration(payload: RegistrationUserDto) {
    const userData = await this.usersService.create(payload);

    console.log(userData);

    return {
      fio: userData.fio,
      apiToken: userData.apiToken,
    };
  }
  async authorization(payload: AuthorizationUserDto) {
    const userData = await this.usersService.getUserByLogin(payload);

    console.log(userData);

    return {
      fio: userData.fio,
      apiToken: userData.apiToken,
    };
  }
}
