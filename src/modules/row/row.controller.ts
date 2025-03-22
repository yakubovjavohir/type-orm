import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RowService } from './row.service';
import { CreateRowDto } from './dto/create-row.dto';
import { UpdateRowDto } from './dto/update-row.dto';
import { ID } from 'src/common/types';

@Controller('row')
export class RowController {
  constructor(@Inject('IRowService') private readonly rowService: RowService) {}

  @Post()
  create(@Body() createRowDto: CreateRowDto) {
    return this.rowService.create(createRowDto);
  }

  @Get()
  findAll() {
    return this.rowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.rowService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ID, @Body() updateRowDto: UpdateRowDto) {
    return this.rowService.update(id, updateRowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.rowService.delete(id);
  }
}
