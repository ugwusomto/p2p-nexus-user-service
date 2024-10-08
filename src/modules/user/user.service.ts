import { Inject, Injectable } from '@nestjs/common';
import { INJECTION_TOKENS } from 'src/constants/index.constant';
import User from 'src/entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@Inject(INJECTION_TOKENS.USER_REPOSITORY) private readonly userRepository: Repository<User>) { }

    async createUser(user:Partial<User>): Promise<User> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    async fetchUserByField(fields: FindOptionsWhere<User>): Promise<User | null> {
        const result = await this.userRepository.findOne({ where: { ...fields } });
        return result
    }
}
