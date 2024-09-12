import { IsEmail, IsLowercase, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;


}




export class UserLoginDTO {


    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

}