import { IsNotEmpty, IsString } from 'class-validator';

export class AuthorizationUserDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
