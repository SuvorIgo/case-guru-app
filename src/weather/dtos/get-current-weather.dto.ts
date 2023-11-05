import { IsNotEmpty, IsString } from 'class-validator';

export class GetCurrentWeatherDto {
  @IsNotEmpty()
  @IsString()
  apiToken: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsString()
  language?: string = 'ru';
}
