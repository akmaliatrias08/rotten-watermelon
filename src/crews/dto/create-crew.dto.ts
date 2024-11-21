import { IsNotEmpty } from "class-validator";

class CrewPhotos {
    photo: string
}

export class CreateCrewDTO{
    @IsNotEmpty()
    name: string

    birthday: Date

    birthplace: string

    biography: string

    photos: CrewPhotos[]
}