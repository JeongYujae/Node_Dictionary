import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
    controllers: [PlayersController],
    providers: [PlayersService],
    exports: [PlayersService],
    // export를 해야 외부에서 사용이 가능함
})
export class PlayersModule {}
