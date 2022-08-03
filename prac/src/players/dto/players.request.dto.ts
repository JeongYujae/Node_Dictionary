import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PlayerRequestDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    position:string

    @IsNumber()
    @IsNotEmpty()
    age:number

}