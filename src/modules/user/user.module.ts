import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/databases/database.module';
import UserProvider from './user.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [UserController],
  providers: [UserService,...UserProvider]
})
export class UserModule {}
