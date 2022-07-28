import * as express from "express";

// app 서버
const app: express.Express = express()

const port:number = 8000;

// 요청(경로, (요청,응답))
app.get('/', (req:express.Request, res: express.Response) => {

    // BE -> FE 로 보내는 응답 (JSON 객체를 FRONT로 여기서 보내고)
  res.send({name: '정', age:22})
})

app.post('/', (req:express.Request,res:express.Response) => {
    res.send({'포스트로 보낸 객체':2022})
})

//프론트에서 get으로 요청 보내면 백에서 데이터 꺼내고 send 로 보내주면, front에서 받아서 가공

// listen은 서버를 열기
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})