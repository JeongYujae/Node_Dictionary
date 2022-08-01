import { Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Put, UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { SuccessInterceptor } from 'src/success.interceptor';
import { PlayersService } from './players.service';

@Controller('players')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class PlayersController {
    constructor(private readonly playerService: PlayersService) {}

    @Get()
    // 필터를 활용할 때, class에 달아도 됨
    getAllPlayer() {
        console.log('controller 인식됨')
        return 'All players';
    }

    @Get(':id')
    // param으로 id를 받고 형번환까지 해줄 수 있다(pipe) -> 유효성 검사까지 가능
    getOnePlayer(@Param('id', ParseIntPipe) param) {
        console.log(param)
        return 'A player';
    }
    @Post()
    createPlayer() {
        return 'Create Player';
    }

    @Put(':id')
    updatePlayer () {
        return 'update Player';
    }
    @Patch(':id')
    updateSpecPlayer () {
        return 'patch player';
    }
    @Delete(':id')
    deleteCat () {
        return 'delete Player';
    }

}
