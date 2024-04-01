import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interface/user.interface';
import { ApiQuery } from '@nestjs/swagger';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(): Promise<UserEntity[]>{
        return await this.userService.allUser();
    }

    @Post()
    @ApiQuery({ name: 'name', type: String, required: true })
    @ApiQuery({ name: 'phone', type: String, required: false })
    @ApiQuery({ name: 'email', type: String, required: true })
    @ApiQuery({ name: 'cpf', type: String, required: true })
    @ApiQuery({ name: 'password', type: String, required: true })
    @ApiQuery({ name: 'type_user', type: Number, required: true })
    async createUser(@Body() createUser: CreateUserDTO): Promise<UserEntity>{
        return this.userService.createUser(createUser);
    }
}