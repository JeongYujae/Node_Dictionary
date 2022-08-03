import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Put, UseFilters, UseInterceptors } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { SuccessInterceptor } from 'src/success.interceptor';
import { PlayerRequestDto } from './dto/players.request.dto';
import { PlayersService } from './players.service';

@Controller('players')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class PlayersController {
    constructor(private readonly playerService: PlayersService,
                private readonly authService: AuthService
        ) {}

    @Post()
    // dto를 적용시키는 방법
    async signUp(@Body() body:PlayerRequestDto) {
        return await this.playerService.signUp(body)
    }

    @Post('Login')
    logIn(@Body() data:LoginRequestDto) {
        return this.authService.jwtLogin(data);
    }
}
