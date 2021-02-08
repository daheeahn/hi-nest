import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // dto 이외의 것들은 Validation에 도달하지 못하게 함
      forbidNonWhitelisted: true, // dto 이외의 것들은 오면 안된다고 알려주기까지 함.
      // url로부터 오는 Param은 전부 string인데 원하는 타입으로 바꿔줌.
      //(controller에서 (@Param('id') id: number) 이렇게 있다면 param이 string이어도 id가 number로 원한다고 써놨으니까 자동으로 number로 변환시켜줌)
      transform: true,
    }),
  ); // 유효성 검사
  await app.listen(3000);
}
bootstrap();
