import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isInt, IsInt, IsNotEmpty, isNumber, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullName:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(6)
    password:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(6)
    comfirmPassword:string

    @ApiProperty()
    @IsInt()
    @IsOptional()
    userDetailsId?: number;
}
