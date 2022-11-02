"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../category/category.entity");
const project_entity_1 = require("./project.entity");
let ProjectRepository = class ProjectRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(project_entity_1.ProjectEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getProjectList() {
        const query = this.createQueryBuilder('project');
        query.orderBy('created_at', 'ASC');
        query.select(['project.id', 'project.name', 'project.text']);
        return query.getMany();
    }
    async getProjectData(projectId) {
        const query = this.createQueryBuilder('project');
        query.leftJoinAndSelect('project.categories', 'category');
        query.where('project.id = :projectId', { projectId });
        query.select(['project.id', 'project.name', 'project.text']);
        query.addSelect(['category.id', 'category.text']);
        return query.getOne();
    }
    async createProject(createProjectDto) {
        const { name, text } = createProjectDto;
        const project = new project_entity_1.ProjectEntity();
        project.name = name;
        project.text = text;
        try {
            await project.save();
            return project;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateProject(updateProjectDto, projectId) {
        const { name, text } = updateProjectDto;
        const project = await this.findOneBy({ id: projectId });
        if (name && project.name !== name)
            project.name = name;
        if (text && project.text !== text)
            project.text = text;
        await project.save();
        return project;
    }
    async deleteProject(projectId) {
        await category_entity_1.CategoryEntity.createQueryBuilder()
            .delete()
            .where('projectId = :projectId', { projectId })
            .execute();
        await this.delete(projectId);
    }
};
ProjectRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ProjectRepository);
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=project.repository.js.map