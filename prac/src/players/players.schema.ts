import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose'

const options: SchemaOptions = {
    timestamps: true,
}


@Schema(options)
export class Player extends Document {
  @Prop({required:true, unique: true,})
  @IsEmail()
  @IsNotEmpty()
  email: string;

//  여기 필요한 스키마 설계햅보자

  @Prop({required: true,})
  age: number;

  @Prop({required:true,})
  position: string;

  @Prop()
  imgUrl:string
}


export const PlayerSchema= SchemaFactory.createForClass(Player);

