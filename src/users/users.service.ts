import { BadRequestException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { checkUserUnique, createUser, deleteuserById, findAllUser, findUserByEmail, findUserById } from './queries/__generated__/users.queries';
import { ResponseUtil } from 'src/utils/response.util';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { RolesService } from 'src/roles/roles.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @Inject('PG_CLIENT') private readonly dbClient: any, 
        private rolesService: RolesService
    ){}

    async getAll(){
        try {
            const roles = await findAllUser.run(undefined, this.dbClient)
            return ResponseUtil.success(roles)
        } catch (e) {
            throw e
        }
    }

    async getById(id: string){
        try {
            const role = await findUserById.run({id: id}, this.dbClient)
            
            if (role.length == 0) {
                throw new Error("error record not found");
            }

            return ResponseUtil.success(role[0])
        } catch (e) {
            if(e.message === "error record not found"){
                throw new NotFoundException(ResponseUtil.error("record not found", `record with id = ${id} in table mst_users not found`, HttpStatus.NOT_FOUND))  
            }

            throw e
        }
    }

    async getByEmail(email: string){
        try {
            const user = await findUserByEmail.run({email}, this.dbClient)

            if (user.length == 0) {
                throw new Error("error record not found");
            }

            return user[0]
        } catch (e) {
            if(e.message === "error record not found"){
                throw new NotFoundException(ResponseUtil.error("record not found", `record with email = ${email} in table mst_users not found`, HttpStatus.NOT_FOUND))  
            }

            throw e
        }
    }

    async validateUniqueUser(email: string, username: string){
        try {
            const lowerCaseEmail = email.toLowerCase()
            const lowerCaseUsername = username.toLowerCase()

            const existUser = await checkUserUnique.run({email: lowerCaseEmail, username: lowerCaseUsername}, this.dbClient)

            if(existUser.length > 0){
                if(existUser[0].username === lowerCaseUsername){
                    throw new Error("username already exist")
                }

                if(existUser[0].email === lowerCaseEmail){
                    throw new Error("email already exist")
                }
            }
        } catch (e) {
            if(e.message === "username already exist" || e.message === "email already exist"){
                throw new BadRequestException(ResponseUtil.error(e.message, e.message, HttpStatus.BAD_REQUEST))
            }

            throw e
        }
    }

    async create(createUserDTO: CreateUserDTO){
        try {
            //validate the role_id
            await this.rolesService.getById(createUserDTO.role_id)

            //validate the email & username is not duplicate
            await this.validateUniqueUser(createUserDTO.email, createUserDTO.username)

            //generate the salt
            const salt = await bcrypt.genSalt(10)

            //hash the password 
            const hash = await bcrypt.hash(createUserDTO.password, salt);

            const { password, ...newCreateUserDTO } = createUserDTO;
            const user = await createUser.run( { ...newCreateUserDTO, salt: salt, password: hash}, this.dbClient)

            return ResponseUtil.success(user[0], HttpStatus.CREATED)
        } catch (e) {
            throw e
        }
    }

    async deleteById(id: string){
        try {
            await this.getById(id)
            const deleteResult = await deleteuserById.run({id}, this.dbClient)

            return ResponseUtil.success(deleteResult[0])
        } catch (e) {
            throw e
        }
    }
}