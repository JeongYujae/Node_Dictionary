import * as express from "express";
import { Player, Type} from "./app.model";

const app: express.Express = express()

//모든 과정을 거치기 전 미들웨어
app.use((req,res,next) => {
  console.log(req.rawHeaders[1])
  next()
})


app.get('/',(req:express.Request, res:express.Response) => {
  res.send({Player})
})

app.get('/player/jeong', (req,res) => {
  res.send({jeong:Player[0]})
})

app.get('/player/kim', (req,res) => {
  res.send({kim:Player[1]})
})


app.use((req,res,next) => {
  res.send({error:'없는 주소입니다'})
  next()
})

app.listen(8000, () => {
  console.log('Server on!')
})

