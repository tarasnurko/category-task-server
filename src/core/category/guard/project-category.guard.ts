import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CATEGORY_ERROR } from '../enum';
import { CategoryEntity } from '../category.entity';

@Injectable()
export class ProjectCategoryGuard implements CanActivate {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    const { projectId, categoryId } = params;

    const category = await this.categoryRepository.findOneBy({
      id: categoryId,
    });

    if (category.projectId !== parseInt(projectId)) {
      throw new BadRequestException(CATEGORY_ERROR.PROJECT_CATEGORY_ERROR);
    }

    return true;
  }
}
