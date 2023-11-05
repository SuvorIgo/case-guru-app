import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { GetCurrentWeatherDto } from './dtos/get-current-weather.dto';
import { AuthGuard } from 'src/auth/guards/authorization.guard';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @UseGuards(AuthGuard)
  @Post('/currentWeather')
  async getCurrentWeather(@Body() payload: GetCurrentWeatherDto): Promise<any> {
    return await this.weatherService.getCurrentWeather(payload);
  }
}
