import { BaseEntity } from 'typeorm';
import { ProjectEntity } from '../project/project.entity';
export declare class CategoryEntity extends BaseEntity {
    id: number;
    text: string;
    projectId: number;
    project: ProjectEntity;
    created_at: Date;
}
