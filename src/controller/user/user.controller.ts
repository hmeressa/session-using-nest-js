import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { RoleService, UserService } from '../../service';
import { UserDto, UserUpdateDto } from '../../dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  ExcludeAuthorizationGuard,
  Permissions,
  RolePermissionsGuard,
  UserAuthorization,
} from 'src/middleware';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private roleService: RoleService,
  ) {}

  @Post()
  // @UseGuards(new ExcludeAuthorizationGuard())
  async createUser(@Body() userDto: UserDto): Promise<Object> {
    const { email } = userDto;
    const user = await this.userService.getUserByEmail(email);
    if (user) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'User email is exist',
      });
    }
    return await this.userService.createUser(userDto);
  }

  @Get('/:id')
  async getUser(@Param('id') id: any): Promise<Object> {
    const user = await this.userService.getUser(id);
    if (!user) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'User NOT FOUND',
      });
    }
    return this.userService.getUser(id);
  }

  @Get()
  // @UseGuards(RolePermissionsGuard)
  // @Permissions('view-users')
  async getUsers(): Promise<Object> {
    return this.userService.getUsers();
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: any): Promise<Object> {
    const user = await this.userService.getUser(id);
    if (!user) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'User NOT FOUND',
      });
    }
    await this.userService.deleteUser(id);
    return {
      message: 'User is Deleted',
    };
  }

  @Patch('/:id')
  async updateUser(
    @Body() userUpdateDto: UserUpdateDto,
    @Param('id') id: any,
  ): Promise<any> {
    const user = await this.userService.getUser(id);
    if (!user) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'User NOT FOUND',
      });
    }
    await this.userService.updateUser(id, userUpdateDto);

    return this.userService.getUser(id);
  }
}
