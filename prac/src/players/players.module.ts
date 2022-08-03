import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { PlayersController } from './players.controller';
import { PlayersRepository} from './players.repository';
import { Player, PlayerSchema } from './players.schema';
import { PlayersService } from './players.service';

@Module({
    // 해당 스키마를 등록하여 쓸 수 있게 해줌
    imports: [MongooseModule.forFeature([{name:Player.name, schema:PlayerSchema}]), forwardRef(()=>AuthModule)],
    controllers: [PlayersController],
    providers: [PlayersService, PlayersRepository],
    exports: [PlayersService, PlayersRepository],
    // export를 해야 외부에서 사용이 가능함
})
export class PlayersModule {}
