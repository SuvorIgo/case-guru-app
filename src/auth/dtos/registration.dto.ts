import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class RegistrationUserDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  fio: string;

  @MinLength(6)
  @Matches(/[a-z0-9]+(?=.*[!.,_])/)
  @IsNotEmpty()
  @IsString()
  password: string;
}
