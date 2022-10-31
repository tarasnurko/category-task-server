import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectGuard } from '../project/guard';

import { CategoryService } from './category.service';

import {
  CreateCategoryDto,
  GetCategoryDataDto,
  GetCategoryListDto,
} from './dto';

import { CategoryGuard, ProjectCategoryGuard } from './guard';

@Controller('api/projects/:projectId/categories')
@UseGuards(ProjectGuard)
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategoryList(@Param('projectId') projectId): Promise<GetCategoryListDto> {
    return this.categoryService.getCategoryList(projectId);
  }

  @Post()
  createCategory(
    @Body(ValidationPipe) createCategoryDto: CreateCategoryDto,
    @Param('projectId') projectId,
  ): Promise<GetCategoryDataDto> {
    return this.categoryService.createCategory(createCategoryDto, projectId);
  }

  @Delete(':categoryId')
  @UseGuards(CategoryGuard, ProjectCategoryGuard)
  deleteProject(@Param('categoryId') categoryId): Promise<void> {
    return this.categoryService.deleteCategory(categoryId);
  }
}
