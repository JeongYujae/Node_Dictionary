import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Put, UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { SuccessInterceptor } from 'src/success.interceptor';
import { PlayerRequestDto } from './dto/players.request.dto';
import { PlayersService } from './players.service';

@Controller('players')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class PlayersController {
    constructor(private readonly playerService: PlayersService) {}

    @Post()
    // dto를 적용시키는 방법
    async signUp(@Body() body:PlayerRequestDto) {
        return await this.playerService.signUp(body)
    }
}
