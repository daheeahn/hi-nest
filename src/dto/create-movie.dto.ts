import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true }) // Array니까 각각
  readonly genres: string[];
}
