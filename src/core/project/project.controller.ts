import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import {
  GetProjectDataDto,
  GetProjectListDto,
  CreateProjectDto,
  UpdateProjectDto,
} from './dto';

import { ProjectGuard } from './guard';
import { ProjectService } from './project.service';

@Controller('api/projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getProjectList(): Promise<GetProjectListDto> {
    return this.projectService.getProjectList();
  }

  @Get(':projectId')
  @UseGuards(ProjectGuard)
  getProjectData(@Param('projectId') projectId): Promise<GetProjectDataDto> {
    return this.projectService.getProjectData(projectId);
  }

  @Post()
  createProject(
    @Body(ValidationPipe) createProjectDto: CreateProjectDto,
  ): Promise<GetProjectDataDto> {
    return this.projectService.createProject(createProjectDto);
  }

  @Patch(':projectId')
  @UseGuards(ProjectGuard)
  updateProject(
    @Body(ValidationPipe) updateProjectDto: UpdateProjectDto,
    @Param('projectId') projectId,
  ) {
    return this.projectService.updateProject(updateProjectDto, projectId);
  }

  @Delete(':projectId')
  @UseGuards(ProjectGuard)
  deleteProject(@Param('projectId') projectId): Promise<void> {
    return this.projectService.deleteProject(projectId);
  }
}
