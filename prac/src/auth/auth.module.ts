import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PlayersModule } from 'src/players/players.module';
import { PlayersRepository } from 'src/players/players.repository';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports:[
  PassportModule.register({ defaultStrategy: 'jwt', session: false}),
    // 여기는 jwt login 을 만들어준다
  JwtModule.register({
    secret:'secret',
    signOptions: {expiresIn: '1y'},
  }),

  forwardRef(()=>PlayersModule),
    // 모듈에서 export 한 것들을 사용 가능
],
  providers: [AuthService, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
