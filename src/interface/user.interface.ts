import { UserDto, UserUpdateDto } from '../dto';

export interface UserInterface {
  createUser(userDto: UserDto): Promise<Object>;
  getUser(id: string): Promise<Object>;
  getUsers(): Promise<Object>;
  deleteUser(id: string): Promise<Object>;
  updateUser(id: string, userUpdateDto: UserUpdateDto): Promise<Object>;
  getUserByEmail(email: string): Promise<UserDto>;
}
