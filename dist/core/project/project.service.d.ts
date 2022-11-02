import { GetProjectDataDto, GetProjectListDto, CreateProjectDto, UpdateProjectDto } from './dto';
import { ProjectRepository } from './project.repository';
export declare class ProjectService {
    private projectRepository;
    constructor(projectRepository: ProjectRepository);
    getProjectList(): Promise<GetProjectListDto>;
    getProjectData(projectId: number): Promise<GetProjectDataDto>;
    createProject(createProjectDto: CreateProjectDto): Promise<GetProjectDataDto>;
    updateProject(updateProjectDto: UpdateProjectDto, projectId: number): Promise<UpdateProjectDto>;
    deleteProject(projectId: number): Promise<void>;
}
