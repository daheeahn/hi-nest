import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies; // 실제로는 db query가 올 것이다.
  }

  getOne(id: number): Movie {
    // return this.movies.find((m: Movie) => m.id === parseInt(id));
    const movie = this.movies.find((m: Movie) => m.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} is not found.`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id); // 먼저 있는 id인지를 봐야하므로. 여기서 에러나면 다음으로 가지 않는다.
    this.movies = this.movies.filter((m: Movie) => m.id !== id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
