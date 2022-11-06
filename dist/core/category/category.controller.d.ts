import { CategoryService } from './category.service';
import { CreateCategoryDto, GetCategoryDataDto, GetCategoryListDto, UpdateCategoryDto } from './dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getCategoryList(projectId: any): Promise<GetCategoryListDto>;
    createCategory(createCategoryDto: CreateCategoryDto, projectId: any): Promise<GetCategoryDataDto>;
    updateProject(updateCategoryDto: UpdateCategoryDto, categoryId: any, projectId: any): Promise<UpdateCategoryDto>;
    deleteProject(categoryId: any): Promise<void>;
}
