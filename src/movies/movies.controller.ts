import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from 'src/dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {
    // 이제 moviesService 쓸 수 있다.
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') year: string) {
  //   // search가 Get(:id) 보다 밑에 있으면 Get(:id)로 인식한다.
  //   // search가 Get(:id)라고 생각하는거지.
  //   // http://localhost:3000/movies/search?year=2000
  //   return `We are searching for a movie after: ${year}`;
  // }

  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    // id: string은 movieId: string여도 상관없다.
    //
    return this.moviesService.getOne(+id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: number, @Body() updateData) {
    // put은 모든 리소스를 업데이트, patch는 일부 리소스만 업데이트
    // JSON을 리턴할 수 있다. (express.js에서는 설정이 필요했음)
    // return {
    //   updatedMovie: id,
    //   ...updateData,
    // };
    return this.moviesService.update(id, updateData);
  }
}
