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
  name: string;

  @Prop({required: true,})
  age: number;

  @Prop({required:true,})
  position: string;

  @Prop({required:true,})
  password: string;

  @Prop()
  imgUrl:string

  readonly readOnlyData: {id:string, email:string, name:string}
}


export const PlayerSchema= SchemaFactory.createForClass(Player);

// virtual 을 활용해서 client에게 보여줄 때, 원하는 정보를 필터링해서 노출시킬 수 있음


PlayerSchema.virtual('readOnlyData').get(function (this:Player) {
  return {
    id:this.id,
    email:this.email,
    name:this.name,
  }
});