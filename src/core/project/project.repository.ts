import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateProjectDto, UpdateProjectDto } from './dto';

import { ProjectEntity } from './project.entity';

@Injectable()
export class ProjectRepository extends Repository<ProjectEntity> {
  constructor(private dataSource: DataSource) {
    super(ProjectEntity, dataSource.createEntityManager());
  }

  async getProjectList(): Promise<ProjectEntity[]> {
    const query = this.createQueryBuilder('project');

    query.orderBy('created_at', 'ASC');

    query.select(['project.id', 'project.name', 'project.text']);

    return query.getMany();
  }

  async getProjectData(projectId: number): Promise<ProjectEntity> {
    // const query = this.createQueryBuilder('category');
    // query.innerJoinAndSelect('category.project', 'project');

    return await this.findOneBy({ id: projectId });
  }

  public async createProject(
    createProjectDto: CreateProjectDto,
  ): Promise<ProjectEntity> {
    const { name, text } = createProjectDto;

    const project = new ProjectEntity();

    project.name = name;
    project.text = text;

    try {
      await project.save();
      return project;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateProject(
    updateProjectDto: UpdateProjectDto,
    projectId: number,
  ): Promise<ProjectEntity> {
    const { name, text } = updateProjectDto;

    const project = await this.findOneBy({ id: projectId });

    if (name && project.name !== name) project.name = name;
    if (text && project.text !== text) project.text = text;

    await project.save();

    return project;
  }

  async deleteProject(projectId: number): Promise<void> {
    await this.remove(await this.findOneBy({ id: projectId }));
  }
}
