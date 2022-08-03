import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PlayersRepository } from 'src/players/players.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly playersRepository: PlayersRepository, private jwtService: JwtService) {}

    async jwtLogin(data:LoginRequestDto) {
        const {email, password} = data;


        // 해당하는 이메일이 있는지 찾기

        const player= await this.playersRepository.findPlayerByEmail(email);

        if (!player) {
            throw new UnauthorizedException('Please check your email and passord')
        }

        // password 판단

        const isPasswordValidated: boolean = await bcrypt.compare(
            password,
            player.password
        );

        if (!isPasswordValidated) {
            throw new UnauthorizedException('Please check your email and passord')
        }

        // 프론트로 jwt 반환

        const payload= {email:email, sub:player.id}

        return {
            token: this.jwtService.sign(payload)
        }

        

    }

}
