import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Passport } from "passport";
import { UsersService } from "src/users/users.service";
import { jwtConstants } from "../constants";
import { ResponseUtil } from "src/utils/response.util";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private usersService: UsersService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret, 
        })
    }

    async validate(payload: {sub: string}){
        try {
            //data id payload exist tidak di data user
            const userOne = this.usersService.getById(payload.sub)

            if(!userOne){
                throw new BadRequestException(ResponseUtil.error('unauthorize', "token is invalid", HttpStatus.UNAUTHORIZED))
            }

            return userOne
        } catch (e) {
            throw e
        }
    }
}