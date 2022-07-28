import { Player, Type} from "./players";
import {Router} from 'express'
// DB로 부터 정보 조회하기


//router에 다 등록을 해준다
// front에서 req이 오면 각각의 라우터를 다 거치는 게 아니라, middleware 와 같은 급으로 이 router를 거치게 하고,
// 밑에 딸려 있는 router들을 거치게 하는 작업
const router= Router()

router.get('/players',(req,res)=> {
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
});


// DB로 부터 특정 정보 조회하기

router.get('/players/:id',(req,res)=> {
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
});

// 새로운 player 추가하기(Create)

router.post('/players', (req,res)=> {
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
})

// PUT 전체 데이터 업데이트

router.put('/players/:id', (req, res)=>{
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
})

// PATCH 일부 데이터 수정 업데이트

router.patch('/players/:id', (req, res)=>{
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
})



// Delete 삭제

router.delete('/players/:id', (req, res)=>{
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
})

export default router;


