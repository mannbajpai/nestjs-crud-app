import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Ronaldo' })
  @IsNotEmpty()
  @Length(2, 30)
  name: string;

  @ApiProperty({ example: 'ronaldo@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password' })
  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}

export class UpdateUserDto extends CreateUserDto {}
