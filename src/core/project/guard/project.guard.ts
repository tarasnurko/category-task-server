import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PROJECT_ERROR } from '../enum';
import { ProjectEntity } from '../project.entity';

@Injectable()
export class ProjectGuard implements CanActivate {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    const projectId = params.projectId;

    if (!projectId) {
      throw new BadRequestException(PROJECT_ERROR.NO_ID_ERROR);
    }

    const project = await this.projectRepository.findOneBy({ id: projectId });

    if (!project) {
      throw new BadRequestException(PROJECT_ERROR.ID_NOT_FOUND);
    }

    return true;
  }
}
