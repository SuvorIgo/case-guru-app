import { Injectable } from '@nestjs/common';
import { Actions, ActionsDocument } from './entities/actions.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetCurrentWeatherResponseType } from 'src/weather/response-types/get-current-weather.type';

@Injectable()
export class ActionsService {
  constructor(
    @InjectModel(Actions.name)
    private readonly model: Model<ActionsDocument>,
  ) {}

  async pushDatabase(payload: GetCurrentWeatherResponseType) {
    const resultData = {
      action_time: Date.now(),
      res_data: payload,
    };

    await this.model.create(resultData);
  }
}
