import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MESSAGE_PATTERN } from 'src/constants/index.constant';

@Controller('user')
export class UserController {
    
    @MessagePattern({cmd:MESSAGE_PATTERN.REGISTER_USER})
    async registerUser(){
        return {message:"successfull" , status:true}
    }
}
