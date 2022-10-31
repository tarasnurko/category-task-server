import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CategoryEntity } from './category.entity';
import { CreateCategoryDto } from './dto';
import { CATEGORY_ERROR } from './enum';

@Injectable()
export class CategoryRepository extends Repository<CategoryEntity> {
  constructor(private dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
  }

  async getCategoryList(projectId: number): Promise<CategoryEntity[]> {
    const query = this.createQueryBuilder('category');

    query.where('category.projectId = :projectId', { projectId });

    query.orderBy('created_at', 'ASC');

    query.select(['category.id', 'category.text', 'category.projectId']);

    return query.getMany();
  }

  async createCategory(
    createCategoryDto: CreateCategoryDto,
    projectId: number,
  ): Promise<CategoryEntity> {
    const { text } = createCategoryDto;

    const category = new CategoryEntity();

    if (await this.findOneBy({ text, projectId })) {
      throw new ConflictException(CATEGORY_ERROR.DUPLICATED_CATEGORY_ERROR);
    }

    category.text = text;
    category.projectId = projectId;

    try {
      await category.save();
      return category;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteCategory(categoryId: number): Promise<void> {
    await this.remove(await this.findOneBy({ id: categoryId }));
  }
}
