import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { PlayersModule } from './players/players.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as mongoose from "mongoose"
@Module({
  // db url을 env 에 따로 둬서 노출이 안되게 서렁
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),PlayersModule,
     UsersModule,
     AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE==='dev' ? true: false;
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
      mongoose.set('debug',true)
      // 찍힐 떄 마다 db log를 찍어줌
  }
}
