import { Injectable } from '@nestjs/common';
import { RoleDto, RoleUpdateDto } from '../../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleModel } from '../../model';
import { RoleRepository } from '../../repository';
import { RoleInterface } from '../../interface';

@Injectable()
export class RoleService implements RoleInterface {
    constructor(
        @InjectRepository(RoleModel)
        private readonly roleRepository : RoleRepository) { }
    
    async createRole(roleDto : RoleDto) : Promise<any> {
        const role =  this.roleRepository.create(roleDto);
        return this.roleRepository.save(role); 
    }

     async getRole(id: any) : Promise<any> {
         return this.roleRepository.findOne({ where: { id: id } });
     }
    
     async getRoles() : Promise<any> {
         return this.roleRepository.find();
     }
    
    async getRoleByName(role : string): Promise<any>{
        return await this.roleRepository.findOne({ where: { name: role } });
    }

     async deleteRole(id: any) : Promise<any> {
         return this.roleRepository.delete(id);
     }
    
     async updateRole(id : any, roleUpdateDto: RoleUpdateDto) : Promise<any> {
         return this.roleRepository.update(id, roleUpdateDto);
    }
}
