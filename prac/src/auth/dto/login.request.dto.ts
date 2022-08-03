import { PickType } from "@nestjs/swagger";
import { Player } from "src/players/players.schema";



export class LoginRequestDto extends PickType(Player, [
    'email',
    'password'
] as const) {}