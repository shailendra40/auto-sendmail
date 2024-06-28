// src/user/user.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateBulkUserDto, CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createBulkUsers(createUserDtos: CreateBulkUserDto) {
    const createdUsers = await this.prisma.user.createMany({
      data: createUserDtos.users,
      skipDuplicates: true,
    });

    const users = await this.prisma.user.findMany({
      where: {
        email: {
          in: createUserDtos.users.map((user) => user.email),
        },
      },
    });
    return users;
  }
  async createUser(data: CreateUserDto) {
    const { name, email } = data;
    console.log('Email:', email);

    const userExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new ConflictException('User with this email already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return user;
  }

  // async getAllUsers() {
  //   return this.prisma.user.findMany();
  // }
  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
