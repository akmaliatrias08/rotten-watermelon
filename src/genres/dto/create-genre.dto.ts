import { IsNotEmpty } from 'class-validator';

export class CreateGenreDTO {
  @IsNotEmpty()
  genre: string; 
}