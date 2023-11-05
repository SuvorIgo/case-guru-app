import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class RegistrationUserDto {
  @ApiProperty({
    description: 'Логин пользователя',
    nullable: false,
    example: 'testTest',
  })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({
    description: 'ФИО пользователя',
    nullable: false,
    example: 'Testov Test Testovich',
  })
  @IsNotEmpty()
  @IsString()
  fio: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    nullable: false,
    example: 'test11!',
  })
  @MinLength(6)
  @Matches(/[a-z0-9]+(?=.*[!.,_])/)
  @IsNotEmpty()
  @IsString()
  password: string;
}
