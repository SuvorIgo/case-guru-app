import { Injectable } from '@nestjs/common';
import { GetCurrentWeatherDto } from './dtos/get-current-weather.dto';
import { UsersService } from 'src/users/users.service';
import axios, { AxiosResponse } from 'axios';
import { GetCurrentWeatherResponseType } from './response-types/get-current-weather.type';
import { ExceptionType } from 'src/types/exceptions/exception.type';

@Injectable()
export class WeatherService {
  constructor(private readonly usersService: UsersService) {}

  async getCurrentWeather(
    payload: GetCurrentWeatherDto,
  ): Promise<GetCurrentWeatherResponseType | ExceptionType> {
    try {
      const apiTokenAccessApiWeather = 'bd53eff0ae7849c89e2115640230511';

      let url = 'https://api.weatherapi.com/v1/current.json';

      url += `?q=${payload.city}&lang=${payload.language}&key=${apiTokenAccessApiWeather}`;

      const resWeather: AxiosResponse = await axios.get(url);

      return resWeather.data;
    } catch (error) {
      console.log(error.statusCode);
    }
  }
}
