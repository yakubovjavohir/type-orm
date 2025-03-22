import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ID } from 'src/common/types';
import { UpdateUserDto } from './dto/update-user.dto';
import { PasswordError } from './exception/error';

@Controller('user')
export class UserController {
  constructor(
    @Inject("IUserService")
    private readonly userService: UserService
  ){}

  
  @Post()
  create(@Body(new ValidationPipe()) dto: CreateUserDto) {

    if(dto.password !== dto.comfirmPassword){
      throw new PasswordError()
    }

    const data = this.userService.create(dto)
    return data
  }

  @Get()
  findAll() {
    const data = this.userService.findAll()
    return data
  }
  
  @Get(':id')
  findOne(@Param('id') id:ID){
    return this.userService.findOne(id)
  }
  
  @Patch(':id')
  update(@Param('id') id:ID, @Body() dto:UpdateUserDto){
    return this.userService.update(id, dto)
  }
  @Delete(':id')
  delete(@Param('id') id:ID){
    return this.userService.delete(id)
  }
}
