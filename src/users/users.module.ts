import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UsersRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
