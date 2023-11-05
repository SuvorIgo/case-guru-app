import { PartialType } from '@nestjs/swagger';
import { RegistrationResponseType } from './registration.type';

export class AuthorizationResponseType extends PartialType(
  RegistrationResponseType,
) {}
