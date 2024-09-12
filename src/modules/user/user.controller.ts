import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MESSAGE_PATTERN } from 'src/constants/index.constant';
import { ICreateUser } from 'src/types/user.types';

@Controller('user')
export class UserController {
    
    @MessagePattern({cmd:MESSAGE_PATTERN.REGISTER_USER})
    async registerUser(body:ICreateUser){
        
        return {message:"successfull" , status:true}
    }
}
