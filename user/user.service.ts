import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserEntity } from './interface/user.interface';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){  }

    

    async allUser(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity>{

        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDTO.password, saltOrRounds);

        return this.userRepository.save({
            ...createUserDTO,
            password: passwordHashed
        })
    }
}

