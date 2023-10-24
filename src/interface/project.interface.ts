import { ProjectDto, ProjectUpdateDto } from "../dto";

export interface ProjectInterface{
    createProject(projectDto: ProjectDto): Promise<any>;
    getProject(id: string): Promise<any>;
    getProjects(): Promise<any>;
    deleteProject(id: string): Promise<any>;
    updateProject(id: string, projectUpdateDto: ProjectUpdateDto): Promise<any>;
}