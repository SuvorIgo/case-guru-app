import { ApiProperty } from '@nestjs/swagger';

export class RegistrationResponseType {
  @ApiProperty({
    description: 'ФИО пользователя',
    nullable: false,
    example: 'Testov Test Testovich',
  })
  fio: string;

  @ApiProperty({
    description: 'Токен доступа',
    nullable: false,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InRlc3QxMSEiLCJsb2dpbiI6InRlc3QxNiIsImZpbyI6IlRlc3QgVGVzdG92IFRlc3RvdmljaCIsImlhdCI6MTY5OTE4MzY0NSwiZXhwIjoxNzAwMDgzNjQ1fQ.lvOkWESE8kVCQXvZEpE7WAaduzKHj9RQmtkINR_odo4',
  })
  apiToken: string;
}
