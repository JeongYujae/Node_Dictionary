import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PlayerRequestDto } from "./dto/players.request.dto";
import { Player } from "./players.schema";


// db에 접근하기 전에 db를 총괄하는 컨트롤 타워다

@Injectable()
export class PlayersRepository{
    constructor(@InjectModel(Player.name) private readonly playerModel:Model<Player>) {}

    async existsByEmail(email:string): Promise<boolean> {
        try {
            const result= await this.playerModel.exists({email});
            if (result) 
                return true

            else 
                return false
        } catch (error) {
            throw new HttpException('db error',404);
        }
    
    }


    async create(player:PlayerRequestDto):Promise<Player> {
        return await this.playerModel.create(player)
    }
}