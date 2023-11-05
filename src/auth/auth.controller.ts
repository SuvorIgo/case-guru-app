import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationUserDto } from './dtos/registration.dto';
import { RegistrationResponseType } from './response-types/registration.type';
import { AuthorizationUserDto } from './dtos/authorization.dto';
import { AuthorizationResponseType } from './response-types/authorization.type';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExceptionType } from 'src/types/exceptions/exception.type';

@ApiTags('Authorization and registration')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Регистрация пользователя' })
  @ApiBody({ type: RegistrationUserDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: RegistrationResponseType,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: ExceptionType,
  })
  @Post('/registration')
  async registration(
    @Body() payload: RegistrationUserDto,
  ): Promise<RegistrationResponseType> {
    return await this.authService.registration(payload);
  }

  @ApiOperation({ summary: 'Авторизация пользователя' })
  @ApiBody({ type: AuthorizationUserDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: AuthorizationResponseType,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: ExceptionType,
  })
  @Post('/authorization')
  async authorization(
    @Body() payload: AuthorizationUserDto,
  ): Promise<AuthorizationResponseType> {
    return await this.authService.authorization(payload);
  }
}
