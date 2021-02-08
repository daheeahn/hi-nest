import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional() // 업데이트할 때는 없을 수 있으니까.
  @IsString({ each: true }) // Array니까 각각
  readonly genres: string[];
}
