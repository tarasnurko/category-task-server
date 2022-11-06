import { CategoryRepository } from './category.repository';
import { CreateCategoryDto, GetCategoryDataDto, GetCategoryListDto, UpdateCategoryDto } from './dto';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getCategoryList(projectId: number): Promise<GetCategoryListDto>;
    createCategory(createCategoryDto: CreateCategoryDto, projectId: number): Promise<GetCategoryDataDto>;
    updateCategory(updateCategoryDto: UpdateCategoryDto, categoryId: number, projectId: number): Promise<UpdateCategoryDto>;
    deleteCategory(categoryId: number): Promise<void>;
}
