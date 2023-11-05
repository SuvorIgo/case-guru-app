class Location {
  name: string | any;
  region: string | any;
  country: string | any;
  lat: number | any;
  lon: number | any;
  tz_id: string | any;
  localtime_epoch: number | any;
  localtime: string | any;
}

class Current {
  last_updated_epoch: number | any;
  last_updated: string | any;
  temp_c: number | any;
  temp_f: number | any;
  is_day: number | any;
  condition:
    | {
        text: string | any;
        icon: string | any;
        code: number | any;
      }
    | any;
  wind_mph: number | any;
  wind_kph: number | any;
  wind_degree: number | any;
  wind_dir: number | any;
  pressure_mb: number | any;
  pressure_in: number | any;
  precip_mm: number | any;
  precip_in: number | any;
  humidity: number | any;
  cloud: number | any;
  feelslike_c: number | any;
  feelslike_f: number | any;
  vis_km: number | any;
  vis_miles: number | any;
  uv: number | any;
  gust_mph: number | any;
  gust_kph: number | any;
}

export class GetCurrentWeatherResponseType {
  location: Location;
  current: Current;
}
