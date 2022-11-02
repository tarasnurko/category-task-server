import { CategoryService } from './category.service';
import { CreateCategoryDto, GetCategoryDataDto, GetCategoryListDto } from './dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getCategoryList(projectId: any): Promise<GetCategoryListDto>;
    createCategory(createCategoryDto: CreateCategoryDto, projectId: any): Promise<GetCategoryDataDto>;
    deleteProject(categoryId: any): Promise<void>;
}
