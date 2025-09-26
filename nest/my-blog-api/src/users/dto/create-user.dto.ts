import { IsEmail, IsNotEmpty, IsObject, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateProfileDto } from "./create-profile.dto";
import { Type } from "class-transformer";

export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @ValidateNested()
    @Type(() => CreateProfileDto)
    @IsNotEmpty()
    profile: CreateProfileDto;
}
