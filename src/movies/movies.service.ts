import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies; // 실제로는 db query가 올 것이다.
  }

  getOne(id: string): Movie {
    // return this.movies.find((m: Movie) => m.id === parseInt(id));
    return this.movies.find((m: Movie) => m.id === +id);
  }

  deleteOne(id: string): boolean {
    this.movies.filter((m: Movie) => m.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
