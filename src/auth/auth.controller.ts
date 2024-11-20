import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { JwtAuthGuard } from './jwt/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() loginDTO: LoginDTO){
        return this.authService.login(loginDTO)
    }

    @Post('register')
    register(@Body() registerDTO: RegisterDTO){
        return this.authService.register(registerDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Get('authorize-token')
    authorize(@Request() req){
        return req.user
    }
}