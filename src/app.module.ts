import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule], // 이 안에 movies의 controller, provider 가 있다. movies 말고 다른 모듈도 생기면 이 안에!
  controllers: [AppController], // nest g co, app (그리고 app.controller.ts를 src로 옮긴다. 루트 컨트롤러지.)
  providers: [],
})
export class AppModule {}
