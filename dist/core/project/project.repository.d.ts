import { DataSource, Repository } from 'typeorm';
import { CreateProjectDto, UpdateProjectDto } from './dto';
import { ProjectEntity } from './project.entity';
export declare class ProjectRepository extends Repository<ProjectEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getProjectList(): Promise<ProjectEntity[]>;
    getProjectData(projectId: number): Promise<ProjectEntity>;
    createProject(createProjectDto: CreateProjectDto): Promise<ProjectEntity>;
    updateProject(updateProjectDto: UpdateProjectDto, projectId: number): Promise<ProjectEntity>;
    deleteProject(projectId: number): Promise<void>;
}
