import { CategoryRepository } from './category.repository';
import { CreateCategoryDto, GetCategoryDataDto, GetCategoryListDto } from './dto';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getCategoryList(projectId: number): Promise<GetCategoryListDto>;
    createCategory(createCategoryDto: CreateCategoryDto, projectId: number): Promise<GetCategoryDataDto>;
    deleteCategory(categoryId: number): Promise<void>;
}
