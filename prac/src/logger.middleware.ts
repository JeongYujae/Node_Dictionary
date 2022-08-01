import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // 로그를 찍어주는 logger(nest js 에서 제공하는)
  private logger= new Logger('HTTP')

  use(req: Request, res: Response, next:NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode}`
        )
    })
    next();
  }
}
