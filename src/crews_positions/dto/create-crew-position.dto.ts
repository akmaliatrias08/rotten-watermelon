import { IsNotEmpty } from 'class-validator';

export class CreateCrewPositionDTO {
  @IsNotEmpty()
  position: string; 
}