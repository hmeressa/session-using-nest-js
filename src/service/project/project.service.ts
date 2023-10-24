import { Injectable } from '@nestjs/common';
import { ProjectDto, ProjectUpdateDto } from 'src/dto';
import { ProjectInterface } from '../../interface';
import { PorjectRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectModel } from '../../model';

@Injectable()
export class ProjectService implements ProjectInterface {
    constructor(@InjectRepository(ProjectModel)
    private readonly porjectRepository: PorjectRepository) { }
    
    createProject(projectDto: ProjectDto): Promise<any> {
        const project = this.porjectRepository.create(projectDto);
        return this.porjectRepository.save(project);
    }

    getProject(id: string): Promise<any> {
        return this.porjectRepository.findOne({ where: { id: id } });
    }

    getProjects(): Promise<any> {
        return this.porjectRepository.find();
    }

    deleteProject(id: string): Promise<any> {
        return this.porjectRepository.delete(id);
    }

    updateProject(id: string, projectUpdateDto: ProjectUpdateDto): Promise<any> {
        return this.porjectRepository.update(id, projectUpdateDto);
    }
}
