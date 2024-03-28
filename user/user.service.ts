import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { User } from './interface/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private users: User[] = [];

    async allUser(): Promise<User[]>{
        return this.users;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDTO.password, saltOrRounds);
        const user:User = {
            ...createUserDTO,
            password: passwordHashed,
            id: this.users.length + 1
        }

        this.users.push(user);

        return user;
    }
}
