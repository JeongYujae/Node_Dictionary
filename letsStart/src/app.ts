import * as express from 'express'
import router from './Players/players.route'

//싱글톤 패턴(객체는 오직 하나만)

class Server {
    public app: express.Application;
    
    //Express 객체가 기준
    constructor() {
        const app: express.Application= express();
        this.app=app;
    }

    private setRoute() {
        this.app.use(router)
    }
    private setMiddleware () {
        this.app.use((req,res,next) => {
            console.log(req.rawHeaders[1])
            console.log('Logging Middleware')
            next()
          })
          
        this.app.use(express.json());
        
        this.setRoute();

        this.app.use((req,res,next) => {
              res.send({error:'없는 주소입니다'})
              next()
            })

    }

    public listen() {
        this.setMiddleware()
        this.app.listen(8000, () => {
            console.log('Server on!')
            })
    }
}

function init() {
    //고유의 객체를 생성
    const server=new Server()
    server.listen();
}

init();
  
