import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { UsersModule } from 'src/users/users.module';
import { ActionsModule } from 'src/actions/actions.module';

@Module({
  imports: [UsersModule, ActionsModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
