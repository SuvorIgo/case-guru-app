import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationUserDto } from './dtos/registration.dto';
import { RegistrationResponseType } from './response-types/registration.type';
import { AuthorizationUserDto } from './dtos/authorization.dto';
import { AuthorizationResponseType } from './response-types/authorization.type';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  async registration(
    @Body() payload: RegistrationUserDto,
  ): Promise<RegistrationResponseType> {
    return await this.authService.registration(payload);
  }

  @Post('/authorization')
  async authorization(
    @Body() payload: AuthorizationUserDto,
  ): Promise<AuthorizationResponseType> {
    return await this.authService.authorization(payload);
  }
}
