import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../category.entity';
export declare class ProjectCategoryGuard implements CanActivate {
    private categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
