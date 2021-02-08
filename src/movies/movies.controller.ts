import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    // id: string은 movieId: string여도 상관없다.
    return `This will return one movie with the id: ${id}`;
  }
  @Post()
  create() {
    return 'This will create a movie';
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie with the id: ${id}`;
  }
  @Patch('/:id')
  patch(@Param('id') id: string) {
    // put은 모든 리소스를 업데이트, patch는 일부 리소스만 업데이트
    return `This will patch a movie with the id: ${id}`;
  }
}
