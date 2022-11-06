import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CategoryRepository } from './category.repository';
import {
  CreateCategoryDto,
  GetCategoryDataDto,
  GetCategoryListDto,
  UpdateCategoryDto,
} from './dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  async getCategoryList(projectId: number): Promise<GetCategoryListDto> {
    const list = await this.categoryRepository.getCategoryList(projectId);
    return { list };
  }

  async createCategory(
    createCategoryDto: CreateCategoryDto,
    projectId: number,
  ): Promise<GetCategoryDataDto> {
    return await this.categoryRepository.createCategory(
      createCategoryDto,
      projectId,
    );
  }

  async updateCategory(
    updateCategoryDto: UpdateCategoryDto,
    categoryId: number,
    projectId: number,
  ): Promise<UpdateCategoryDto> {
    return await this.categoryRepository.updateCategory(
      updateCategoryDto,
      categoryId,
      projectId,
    );
  }

  async deleteCategory(categoryId: number): Promise<void> {
    return await this.categoryRepository.deleteCategory(categoryId);
  }
}
