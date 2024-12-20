import { IsEmail, IsNotEmpty, isString, IsString } from "class-validator";

export class Users {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    password: string


    @IsEmail()
    email: string
}