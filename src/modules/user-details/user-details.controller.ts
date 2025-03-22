import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { CreateUserDetailsDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { ID } from 'src/common/types';

@Controller('user-details')
export class UserDetailsController {
  constructor(@Inject('IUserDetailService') private readonly userDetailsService: UserDetailsService) {}

  @Post()
  create(@Body() createUserDetailDto: CreateUserDetailsDto) {
    return this.userDetailsService.create(createUserDetailDto);
  }

  @Get()
  findAll() {
    return this.userDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.userDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ID, @Body() updateUserDetailDto: UpdateUserDetailDto) {
    return this.userDetailsService.update(id, updateUserDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.userDetailsService.delete(+id);
  }
}
