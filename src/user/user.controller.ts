// src/user/user.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateBulkUserDto, CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post('/bulk')
  async createBulkUsers(@Body() createUserDtos: CreateBulkUserDto) {
    return this.userService.createBulkUsers(createUserDtos);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
