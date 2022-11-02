import { GetProjectDataDto, GetProjectListDto, CreateProjectDto, UpdateProjectDto } from './dto';
import { ProjectService } from './project.service';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    getProjectList(): Promise<GetProjectListDto>;
    getProjectData(projectId: any): Promise<GetProjectDataDto>;
    createProject(createProjectDto: CreateProjectDto): Promise<GetProjectDataDto>;
    updateProject(updateProjectDto: UpdateProjectDto, projectId: any): Promise<UpdateProjectDto>;
    deleteProject(projectId: any): Promise<void>;
}
