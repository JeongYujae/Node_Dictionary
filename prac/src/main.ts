import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 필터를 전역적으로 등록하는 방법
  app.useGlobalFilters(new HttpExceptionFilter());
  const PORT= process.env.PORT;
  await app.listen(8000);
}
bootstrap();
