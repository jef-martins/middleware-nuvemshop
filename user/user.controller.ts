import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interface/user.interface';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(): Promise<User[]>{
        return await this.userService.allUser();
    }

    @Post()
    async createUser(@Body() createUser: CreateUserDTO){
        return this.userService.createUser(createUser);
    }
}
