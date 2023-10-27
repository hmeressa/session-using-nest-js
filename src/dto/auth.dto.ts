// auth.dto.ts
import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({ message: 'Please enter your first name' })
  @IsString()
  @IsEmail()
  email: string;
    
  @IsNotEmpty({ message: 'Please enter a password' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  password?: string;  
}
