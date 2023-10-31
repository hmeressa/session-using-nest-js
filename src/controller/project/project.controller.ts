import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Patch,
  NotFoundException,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ProjectService } from '../../service';
import { PaginationQueryDto, ProjectDto, ProjectUpdateDto } from '../../dto';
import { RolePermissionsGuard, Permissions } from '../../middleware';
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async createProject(@Body() projectDto: ProjectDto): Promise<any> {
    try {
      const isExist = await this.projectService.getProjectByName(
        projectDto.name,
      );
      if (isExist) {
        return new NotFoundException({
          message: 'Something bad happened',
          error: 'Project already exist',
        });
      }
      return await this.projectService.createProject(projectDto);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async getProject(@Param('id') id: string): Promise<any> {
    const project = await this.projectService.getProject(id);
    if (!project) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Project NOT FOUND',
      });
    }
    return project;
  }

  @Get()
  @UseGuards(RolePermissionsGuard)
  @Permissions('view-user')
  async getProjects(): Promise<any> {
    const project = await this.projectService.getProjects();
    if (!project) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Project NOT FOUND',
      });
    }
    const open = project.filter((open: any) => open.status === 'open').length;
    const closed = project.filter(
      (closed: any) => closed.status === 'closed',
    ).length;
    const inProgress = project.filter(
      (inProgress: any) => inProgress.status === 'inProgress',
    ).length;
    // project.user = project?.task?.user;

    return {
      project: project,
      open: open,
      closed: closed,
      inProgress: inProgress,
    };
  }

  @Get('/pagination/getAll')
  async getProjectsByPagination(
    @Query() paginationDto: PaginationQueryDto,
  ): Promise<any> {
    console.log(paginationDto); // Log the actual paginationDto object
    const project =
      await this.projectService.getProjectsByPagination(paginationDto);
    if (!project) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Project NOT FOUND',
      });
    }
    const open = project.filter((open: any) => open.status === 'open').length;
    const closed = project.filter(
      (closed: any) => closed.status === 'closed',
    ).length;
    const inProgress = project.filter(
      (inProgress: any) => inProgress.status === 'inProgress',
    ).length;

    return {
      project: project,
      open: open,
      closed: closed,
      inProgress: inProgress,
    };
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string): Promise<any> {
    const project = await this.getProject(id);
    if (!project) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Project NOT FOUND',
      });
    }
    await this.projectService.deleteProject(id);
    return {
      message: 'Project is Deleted',
      status: 'Success',
    };
  }

  @Patch(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() projectUpdateDto: ProjectUpdateDto,
  ): Promise<any> {
    const project = await this.getProject(id);
    if (!project) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Project NOT FOUND',
      });
    }

    return await this.projectService.updateProject(id, projectUpdateDto);
  }
}
