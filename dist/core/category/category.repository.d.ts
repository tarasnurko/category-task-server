import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
export declare class CategoryRepository extends Repository<CategoryEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getCategoryList(projectId: number): Promise<CategoryEntity[]>;
    createCategory(createCategoryDto: CreateCategoryDto, projectId: number): Promise<CategoryEntity>;
    updateCategory(updateCategoryDto: UpdateCategoryDto, categoryId: number, projectId: number): Promise<CategoryEntity>;
    deleteCategory(categoryId: number): Promise<void>;
}
