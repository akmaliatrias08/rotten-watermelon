import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class RegisterDTO {
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