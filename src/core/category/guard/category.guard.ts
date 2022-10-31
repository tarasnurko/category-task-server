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
export class CategoryGuard implements CanActivate {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    const categoryId = params.categoryId;

    if (!categoryId) {
      throw new BadRequestException(CATEGORY_ERROR.NO_ID_ERROR);
    }

    const category = await this.categoryRepository.findOneBy({
      id: categoryId,
    });

    if (!category) {
      throw new BadRequestException(CATEGORY_ERROR.ID_NOT_FOUND);
    }

    return true;
  }
}
