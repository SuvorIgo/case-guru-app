import { ApiProperty } from '@nestjs/swagger';

class Location {
  @ApiProperty({ type: String, example: 'Старый Оскол' })
  name: string | any;

  @ApiProperty({ type: String, example: 'Belgorod' })
  region: string | any;

  @ApiProperty({ type: String, example: 'Россия' })
  country: string | any;

  @ApiProperty({ type: Number, example: 51.3 })
  lat: number | any;

  @ApiProperty({ type: Number, example: 37.84 })
  lon: number | any;

  @ApiProperty({ type: String, example: 'Europe/Moscow' })
  tz_id: string | any;

  @ApiProperty({ type: Number, example: 1699193414 })
  localtime_epoch: number | any;

  @ApiProperty({ type: String, example: '2023-11-05 17:10' })
  localtime: string | any;
}

class CurrentCondition {
  @ApiProperty({ type: String, example: 'Patchy light rain' })
  text: string | any;

  @ApiProperty({
    type: String,
    example: '//cdn.weatherapi.com/weather/64x64/night/293.png',
  })
  icon: string | any;

  @ApiProperty({ type: Number, example: 1180 })
  code: number | any;
}

class Current {
  @ApiProperty({ type: Number, example: 1699192800 })
  last_updated_epoch: number | any;

  @ApiProperty({ type: String, example: '2023-11-05 17:00' })
  last_updated: string | any;

  @ApiProperty({ type: Number, example: 12.3 })
  temp_c: number | any;

  @ApiProperty({ type: Number, example: 54.2 })
  temp_f: number | any;

  @ApiProperty({ type: Number, example: 0 })
  is_day: number | any;

  @ApiProperty({ type: CurrentCondition })
  condition: CurrentCondition | any;

  @ApiProperty({ type: Number, example: 15 })
  wind_mph: number | any;

  @ApiProperty({ type: Number, example: 24.1 })
  wind_kph: number | any;

  @ApiProperty({ type: Number, example: 149 })
  wind_degree: number | any;

  @ApiProperty({ type: String, example: 'SSE' })
  wind_dir: string | any;

  @ApiProperty({ type: Number, example: 1003 })
  pressure_mb: number | any;

  @ApiProperty({ type: Number, example: 29.63 })
  pressure_in: number | any;

  @ApiProperty({ type: Number, example: 1.16 })
  precip_mm: number | any;

  @ApiProperty({ type: Number, example: 1.16 })
  precip_in: number | any;

  @ApiProperty({ type: Number, example: 0.05 })
  humidity: number | any;

  @ApiProperty({ type: Number, example: 83 })
  cloud: number | any;

  @ApiProperty({ type: Number, example: 70 })
  feelslike_c: number | any;

  @ApiProperty({ type: Number, example: 10 })
  feelslike_f: number | any;

  @ApiProperty({ type: Number, example: 50 })
  vis_km: number | any;

  @ApiProperty({ type: Number, example: 9 })
  vis_miles: number | any;

  @ApiProperty({ type: Number, example: 5 })
  uv: number | any;

  @ApiProperty({ type: Number, example: 1 })
  gust_mph: number | any;

  @ApiProperty({ type: Number, example: 22.7 })
  gust_kph: number | any;
}

export class GetCurrentWeatherResponseType {
  @ApiProperty({
    type: Location,
  })
  location: Location;

  @ApiProperty({
    type: Current,
  })
  current: Current;
}
