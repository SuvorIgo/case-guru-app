import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCurrentWeatherDto {
  @ApiProperty({
    description: 'Токен доступа',
    nullable: false,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InRlc3QxMSEiLCJsb2dpbiI6InRlc3QxNiIsImZpbyI6IlRlc3QgVGVzdG92IFRlc3RvdmljaCIsImlhdCI6MTY5OTE4MzY0NSwiZXhwIjoxNzAwMDgzNjQ1fQ.lvOkWESE8kVCQXvZEpE7WAaduzKHj9RQmtkINR_odo4',
  })
  @IsNotEmpty()
  @IsString()
  apiToken: string;

  @ApiProperty({
    description:
      'Наименование населенного пункта, к которому нужна информация о погоде',
    nullable: false,
    example: 'Старый Оскол',
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: 'Код языка ответа',
    nullable: false,
    example: 'en',
    default: 'ru',
    required: false,
  })
  @IsString()
  language?: string = 'ru';
}
