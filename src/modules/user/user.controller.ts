import { ConflictException, Controller, HttpException, HttpStatus } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { MESSAGE_PATTERN } from 'src/constants/index.constant';
import { ICreateUser, ILoginUser } from 'src/types/user.types';
import { UserService } from './user.service';
import { compareHash, hash, successResponse } from 'src/helpers/index.helper';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @MessagePattern({ cmd: MESSAGE_PATTERN.REGISTER_USER })
    async registerUser(body: ICreateUser) {

        const isEmail = await this.userService.fetchUserByField({ email: body.email });
        if (isEmail) {
            throw new RpcException("Email already exist");
        }
        const newUser = {
            ...body,
            username: body.email.split("@")[0],
            password: await hash(body.password)
        }
        const user = await this.userService.createUser(newUser);
        delete user.password;
        return successResponse({ user }, "Successfully registered");
    }

    @MessagePattern({ cmd: MESSAGE_PATTERN.LOGIN_USER })
    async loginUser(body: ILoginUser) {
        let user = await this.userService.fetchUserByField({ email: body.email });
        if (!user) {
            throw new RpcException("Invalid login detail");
        }
        console.log(user)
        const isAuthUser = compareHash(body.password , user.password );
        if(!isAuthUser){
            throw new RpcException("Invalid login detail");
        }
        delete user.password;
        return successResponse({ user }, "Successfully logged in");
    }
}
