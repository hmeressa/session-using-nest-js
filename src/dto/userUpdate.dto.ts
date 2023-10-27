// userUpdateDto.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty({ message: 'Please enter your first name' })
  @IsString()
  firstName?: string;
    
  @IsNotEmpty({ message: 'Please enter your last name' })
  @IsString()
  lastName?: string;
    
}
