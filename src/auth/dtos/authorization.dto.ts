import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthorizationUserDto {
  @ApiProperty({
    description: 'Логин пользователя',
    nullable: false,
    example: 'testTest',
  })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    nullable: false,
    example: 'test11!',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
