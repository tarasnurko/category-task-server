import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  GetProjectDataDto,
  GetProjectListDto,
  CreateProjectDto,
  UpdateProjectDto,
} from './dto';

import { ProjectRepository } from './project.repository';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
  ) {}

  async getProjectList(): Promise<GetProjectListDto> {
    const list = await this.projectRepository.getProjectList();
    return { list };
  }

  async getProjectData(projectId: number): Promise<GetProjectDataDto> {
    return await this.projectRepository.getProjectData(projectId);
  }

  async createProject(
    createProjectDto: CreateProjectDto,
  ): Promise<GetProjectDataDto> {
    return await this.projectRepository.createProject(createProjectDto);
  }

  async updateProject(
    updateProjectDto: UpdateProjectDto,
    projectId: number,
  ): Promise<UpdateProjectDto> {
    return await this.projectRepository.updateProject(
      updateProjectDto,
      projectId,
    );
  }

  async deleteProject(projectId: number): Promise<void> {
    return await this.projectRepository.deleteProject(projectId);
  }
}
