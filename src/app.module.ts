import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/users.entity';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import { ActionsModule } from './actions/actions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [Users],
        synchronize: true,
      }),
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `${process.env.MONGODB_DIALECT}://${process.env.MONGODB_HOST}/${process.env.MONGODB_NAMEDATABASE}`,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    WeatherModule,
    ActionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
