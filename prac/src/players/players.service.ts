import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayerRequestDto } from './dto/players.request.dto';
import { Player } from './players.schema';
import * as bcrypt from 'bcrypt'
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {
    constructor(private readonly playerRepository:PlayersRepository){}
    // body 타입은 dto
    async signUp(body:PlayerRequestDto) {
        const {email, name, password,age,position} = body;
        const isPlayerExist= await this.playerRepository.existsByEmail(email);

        if (isPlayerExist) {
            throw new UnauthorizedException('Player already exists')
        }

        const hashedPassword= await bcrypt.hash(password,10)

        const player= await this.playerRepository.create({
            email,
            name,
            age,
            position,
            password: hashedPassword,
        });

        return player.readOnlyData
    }


}
