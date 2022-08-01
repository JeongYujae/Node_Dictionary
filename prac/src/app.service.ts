import { Injectable } from '@nestjs/common';

// 공급자로 취급이 되는 것들을 위한 의존성 장식자 문법
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
