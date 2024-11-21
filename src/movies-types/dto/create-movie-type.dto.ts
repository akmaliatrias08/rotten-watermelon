import { IsNotEmpty } from 'class-validator';

export class CreateMovieTypeDTO {
  @IsNotEmpty()
  type: string; 
}