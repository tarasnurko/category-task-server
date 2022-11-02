import { BaseEntity } from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
export declare class ProjectEntity extends BaseEntity {
    id: number;
    name: string;
    text: string;
    categories: CategoryEntity[];
    created_at: Date;
}
