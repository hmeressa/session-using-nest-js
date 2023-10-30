import { Injectable } from '@nestjs/common';
import { ProjectDto, ProjectUpdateDto } from 'src/dto';
import { ProjectInterface } from '../../interface';
import { PorjectRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectModel } from '../../model';

@Injectable()
export class ProjectService implements ProjectInterface {
  constructor(
    @InjectRepository(ProjectModel)
    private readonly porjectRepository: PorjectRepository,
  ) {}

  async createProject(projectDto: ProjectDto): Promise<any> {
    try {
      const project = this.porjectRepository.create(projectDto);
      return await this.porjectRepository.save(project);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }

  async getProject(id: string): Promise<any> {
    return await this.porjectRepository.findOne({
      where: { id: id },
      relations: ['task.user', 'task.taskStatus'],
    });
  }

  async getProjects(): Promise<any> {
    return await this.porjectRepository.find({
      relations: ['task.user', 'task.taskStatus'],
    });
  }

  async getProjectByName(project: string): Promise<any> {
    return await this.porjectRepository.findOne({ where: { name: project } });
  }

  async deleteProject(id: string): Promise<any> {
    return await this.porjectRepository.delete(id);
  }

  async updateProject(
    id: string,
    projectUpdateDto: ProjectUpdateDto,
  ): Promise<any> {
    return await this.porjectRepository.update(id, projectUpdateDto);
  }
}
