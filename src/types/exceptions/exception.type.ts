import { ApiProperty } from '@nestjs/swagger';

export class ExceptionType {
  @ApiProperty({
    description: 'Код ответа от сервера',
    nullable: false,
    example: '404',
  })
  statusCode: number;

  @ApiProperty({
    description: 'Сообщение ответа от сервера',
    nullable: false,
    example: 'Not Found',
  })
  message: string;
}
