// user.dto.ts
import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty({ message: 'Please enter your first name' })
  @IsString()
  firstName?: string;
    
  @IsNotEmpty({ message: 'Please enter your last name' })
  @IsString()
  lastName?: string;
    
}
