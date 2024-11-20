import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
import { ResponseUtil } from 'src/utils/response.util';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService, 
        private jwtService: JwtService
    ){}

    async validateUser(email: string, password: string): Promise<any> {
        try {
            const user = await this.usersService.getByEmail(email);
            if (user && await bcrypt.compare(password, user.password)) {
                const { password, ...result } = user;
                return result;
            }

            throw new Error("incorrect password");
        } catch (e) {
            if(e.message === "incorrect password"){
                throw new BadRequestException(ResponseUtil.error(e.message, e.message, HttpStatus.BAD_REQUEST))
            }

            throw e
        }
    }

    async login(loginDTO: LoginDTO){
        try {
            const {email, password} = loginDTO
            const user = await this.validateUser(email, password)
            const payload = { email: user.email, sub: user.id, role: user.role };
            const token = this.jwtService.sign(payload)

            return ResponseUtil.success({access_token: token})
        } catch (e) {
            throw e
        }
    }

    async register(registerDTO: RegisterDTO){
        try {
            const user = await this.usersService.create(registerDTO)
            return user
        } catch (e) {
            throw e
        }
    }
}
