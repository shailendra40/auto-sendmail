// src/user/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty decorator

export class CreateUserDto {
  @ApiProperty({ example: 'Shailendra', description: 'The name of the user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'ysly305@gmail.com' })
  @IsEmail() // Validate each email separately
  @IsNotEmpty() // Ensure each email is not empty
  email: string;
}

export class CreateBulkUserDto {
  @ApiProperty({
    title: 'users',
    example: [
      {
        name: 'Shailendra',
        email: 'ysly305@gmail.com',
      },
      {
        name: 'Shailendra Ydv',
        email: 'yshailendra216@gmail.com',
      },
      {
        name: 'Prakash Kr.',
        email: 'pydv1415@gmail.com',
      },
      {
        name: 'Nirdesh Pokhrel ',
        email: 'nirdeshpokhrel29@gmail.com',
      },
    ],
    type: [CreateUserDto],
  })
  users: CreateUserDto[];
}
