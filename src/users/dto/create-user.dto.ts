import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsUUID()
    role_id: string; 

    @IsNotEmpty()
    @IsEmail()
    email: string; 

    @IsNotEmpty()
    username: string; 

    @IsNotEmpty()
    password: string; 

    avatar: string;
}