// user.dto.ts
import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter your first name' })
  @IsString()
  firstName?: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter your last name' })
  @IsString()
  lastName?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter your email address' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter a password' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  password: string;
    
}
