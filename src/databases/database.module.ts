import { Module } from '@nestjs/common';
import DataBaseProviders from "./database.providers"
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[],
    providers:[...DataBaseProviders],
    exports:[...DataBaseProviders]
})
export class DatabaseModule {}
