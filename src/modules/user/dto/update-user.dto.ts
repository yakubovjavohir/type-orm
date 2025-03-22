import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
        @ApiProperty()
        @IsString()
        @IsOptional()
        fullName:string
    
        @ApiProperty()
        @IsString()
        @IsOptional()
        @IsEmail()
        email:string
    
        @ApiProperty()
        @IsString()
        @IsOptional()
        @MaxLength(20)
        @MinLength(6)
        password:string
}
