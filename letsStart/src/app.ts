import * as express from 'express'
import router from './Players/players.route'

const app: express.Express = express()

app.use((req,res,next) => {
  console.log(req.rawHeaders[1])
  console.log('Logging Middleware')
  next()
})

app.use(express.json());

//players.route에서 만든 router 등록해주기
app.use(router)

app.use((req,res,next) => {
    res.send({error:'없는 주소입니다'})
    next()
  })
  
  app.listen(8000, () => {
    console.log('Server on!')
  })