import { Player, Type} from "./players";
import {Router} from 'express'
import { Request, Response } from "express";

// READ ALL DATA
export const readAllPlayer = (req:Request, res:Response) => {
    try{
        const players= Player;
        // throw new Error('db 오류')
        // 상태함수 적용하기 200번대는 성공
        res.status(200).send({
          success: true,
          data:{
            players,
          }
        });
      }
      catch (error) {
        res.status(400).send({
          success: false,
          error: error.message,
        });
    
      }
}

// READ SPECIFIC DATA
export const readSpecPlayer = (req:Request, res:Response) => {
    try{
        const {id}= req.params;
        const player= Player.find((player)=>{
          return player.id === id
        });
        res.status(200).send({
          success: true,
          data:{ 
            player
          }
        });
      }
      catch (error) {
        res.status(400).send({
          success: false,
          error: error.message,
        });
    
      }
}

// CREATE
export const createPlayer = (req:Request, res:Response) => {
    try{
        // 프론트에서 정보가 오니까 req으로 처리(postman에서 정보
        // 온 것 처럼 구현하면 프론트에서 받아온 척)
        const data= req.body;
        Player.push(data);
        res.status(200).send({
          success: true,
          data: {Player},
        })
      }
      catch (error) {
        res.status(400).send({
          success: false,
          error: error.message,
        });
    
      }
}

// PUT (UPDATE ALL DATA)
export const updateAllData= (req:Request, res:Response) => {
    try{
        const {id}= req.params;
        const body= req.body
        let result;
        Player.forEach((player)=>{
          if (player.id === id){
            player= body;
            result= player
          }
        })
        res.status(200).send({
          success: true,
          data: {
            player: result
          }
        })
      }
      catch (error) {
        res.status(400).send({
          success: false,
          error: error.message,
        });
    
      }
}

// PATCH (UPDATE SPECIFIC DATA)
export const updateSpecData= (req:Request, res:Response) => {
    try{
        const {id}= req.params;
        const body= req.body
        let result;
        Player.forEach((player)=>{
          if (player.id === id){
            player= {...player, ...body}
            result= player
          }
        })
        res.status(200).send({
          success: true,
          data: {
            player: result
          }
        })
      }
      catch (error) {
        res.status(400).send({
          success: false,
          error: error.message,
        });
    
      }
}

// DELETE 
export const deleteData= (req:Request, res:Response) => {
    try{
        const {id}= req.params;
        const newPlayer= Player.filter((player)=>{
          return( player.id !== id) 
        })
        res.status(200).send({
          success: true,
          data: {
            player: newPlayer
          }
        })
      }
      catch (error) {
        res.status(400).send({
          success: false,
          error: error.message,
        });
    
      }
}



