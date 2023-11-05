import { Module } from '@nestjs/common';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Actions, ActionsSchema } from './entities/actions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Actions.name,
        schema: ActionsSchema,
      },
    ]),
  ],
  controllers: [ActionsController],
  providers: [ActionsService],
  exports: [ActionsService],
})
export class ActionsModule {}
