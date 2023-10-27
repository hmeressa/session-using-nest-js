import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from 'src/dto/auth.dto';
import { UserService } from '../../service';
import { NotFoundException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { createToken } from '../../middleware';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async authUser(@Body() authDto: AuthDto): Promise<any> {
    const { email, password } = authDto;
    console.log(email, password);
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'User NOT FOUND',
      });
    } else if (!compare(user.password, password)) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Password mismatch',
      });
    }
    const userToken = await createToken(user.id);
    return {
      data: user,
      userToken: userToken,
    };
  }
}
