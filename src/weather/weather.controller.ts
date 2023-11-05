import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { GetCurrentWeatherDto } from './dtos/get-current-weather.dto';
import { AuthGuard } from 'src/auth/guards/authorization.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCurrentWeatherResponseType } from './response-types/get-current-weather.type';
import { ExceptionType } from 'src/types/exceptions/exception.type';

@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @ApiOperation({ summary: 'Получение текущей погоды' })
  @ApiBody({ type: GetCurrentWeatherDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: GetCurrentWeatherResponseType,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: ExceptionType,
  })
  @UseGuards(AuthGuard)
  @Post('/currentWeather')
  async getCurrentWeather(@Body() payload: GetCurrentWeatherDto): Promise<any> {
    return await this.weatherService.getCurrentWeather(payload);
  }
}
