import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import {
  CreateCategoryDto,
  GetCategoryDataDto,
  GetCategoryListDto,
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

  async deleteCategory(categoryId: number): Promise<void> {
    return await this.categoryRepository.deleteCategory(categoryId);
  }
}
