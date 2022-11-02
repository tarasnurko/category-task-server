import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../project.entity';
export declare class ProjectGuard implements CanActivate {
    private projectRepository;
    constructor(projectRepository: Repository<ProjectEntity>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
