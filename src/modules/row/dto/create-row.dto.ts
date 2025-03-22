import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateRowDto {
        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        name:string

        @ApiProperty()
        @IsInt()
        @IsNotEmpty()
        categoryId:string
}
