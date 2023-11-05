import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/user.repository';
import { RegistrationUserDto } from 'src/auth/dtos/registration.dto';
import { Users } from './entities/users.entity';
import { AuthorizationUserDto } from 'src/auth/dtos/authorization.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(payload: RegistrationUserDto): Promise<Users> {
    return await this.usersRepository.createUser(payload);
  }

  async getUserByLogin(payload: AuthorizationUserDto): Promise<Users> {
    return await this.usersRepository.getUserByLogin(payload);
  }

  async checkApiToken(apiToken: string): Promise<boolean> {
    return await this.usersRepository.checkApiToken(apiToken);
  }
}
