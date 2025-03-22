import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRowDto } from './create-row.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRowDto extends PartialType(CreateRowDto) {
        @ApiProperty()
        @IsString()
        @IsOptional()
        name:string
}
