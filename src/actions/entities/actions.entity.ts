import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { GetCurrentWeatherResponseType } from 'src/weather/response-types/get-current-weather.type';

export type ActionsDocument = Actions & Document;

@Schema()
export class Actions {
  @ApiProperty({
    description: 'Id document',
    example: '64b09a777b28ccc8ed66c42d',
  })
  _id: string;

  @ApiProperty({
    description: 'id action',
    example: '1',
  })
  @Prop({ required: true })
  action_id: number;

  @ApiProperty({
    description: 'time created',
    example: '309090209409',
  })
  @Prop({ required: true })
  action_time: string;

  @ApiProperty({
    description: 'response',
    example: GetCurrentWeatherResponseType,
  })
  @Prop({ required: true })
  res_data: GetCurrentWeatherResponseType;
}

export const ActionsSchema = SchemaFactory.createForClass(Actions);
