import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDetailsDto } from './create-user-detail.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDetailDto extends PartialType(CreateUserDetailsDto) {
    @ApiProperty()
        @IsString()
        @IsOptional()
        @MinLength(0)
        @MaxLength(13)
        phone:string
}
