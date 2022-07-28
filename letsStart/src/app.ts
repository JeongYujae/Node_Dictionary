import * as express from "express";
import { List, Type} from "./app.model";

// app 서버
const app: express.Express = express()

// 미들웨어 사용법(이 요소를 거치고 next를 통해 밑의 app 들 탐색)
app.use((req,res,next) => {
  console.log(req.rawHeaders[1])
  next()
})


app.get('/',(req:express.Request, res:express.Response) => {
  res.send({List})
})

app.get('/List/blue', (req,res) => {
  res.send({blue: List[0]})
})

app.get('/List/som', (req,res) => {
  res.send({som: List[1]})
})


app.use((req,res,next) => {
  res.send({error:'없는 주소입니다'})
  next()
})

app.listen(8000, () => {
  console.log('Server on!')
})

