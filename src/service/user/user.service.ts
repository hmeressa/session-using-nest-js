import { Injectable } from '@nestjs/common';
import { UserDto, UserUpdateDto } from '../../dto';
import { UserRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../../model';
import { UserInterface } from '../../interface';

@Injectable()  
export class UserService implements UserInterface {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: UserRepository) { }
  
  async createUser(userDto: UserDto): Promise<Object> {
    const user = await this.userRepository.create(userDto);
    console.log(user);
    const savedUser = await this.userRepository.save(user);
    return savedUser;
  }

  async getUser(id: string): Promise<Object> {
     return await this.userRepository.findOne({where : {id : id}})
  }

  async getUsers(): Promise<Object> {
    return await this.userRepository.find();
  }
  
  async getUserByEmail(email : any): Promise<any> {
     return this.userRepository.findOne({ where: { email: email } });
  } 
  
  async deleteUser(id: string): Promise<Object> {
    return this.userRepository.delete(id);
  }
  
 async updateUser(id: string, userUpdateDto: UserUpdateDto): Promise<Object> {
   return await this.userRepository.update(id, userUpdateDto);
  }
}
