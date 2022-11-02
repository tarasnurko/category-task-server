import { GetCategoryDataDto } from 'src/core/category/dto';
export interface GetProjectDataDto {
    id: number;
    name: string;
    text: string;
    categories: GetCategoryDataDto[];
}
