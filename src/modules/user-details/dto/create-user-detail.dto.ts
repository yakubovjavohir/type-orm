import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDetailsDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(0)
    @MaxLength(13)
    phone:string
}
