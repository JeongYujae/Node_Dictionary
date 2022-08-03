import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 필터를 전역적으로 등록하는 방법
  app.useGlobalFilters(new HttpExceptionFilter());
  // 클래스 벨리데이션 등록하기
  app.useGlobalPipes(new ValidationPipe()) 
  
  // Swagger api 설명 사용
  const config = new DocumentBuilder()
    .setTitle('Player API')
    .setDescription('The players API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT= process.env.PORT;
  await app.listen(8000);
}
bootstrap();
