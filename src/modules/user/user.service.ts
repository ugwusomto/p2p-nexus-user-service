import { Inject, Injectable } from '@nestjs/common';
import { INJECTION_TOKENS } from 'src/constants/index.constant';
import User from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@Inject(INJECTION_TOKENS.USER_REPOSITORY) private readonly userRepository: Repository<User>) { }

    async createUser(user:Partial<User>): Promise<User> {
        return this.userRepository.create(user);
    }
}
