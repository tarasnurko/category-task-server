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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectGuard = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const enum_1 = require("../enum");
const project_entity_1 = require("../project.entity");
let ProjectGuard = class ProjectGuard {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { params } = request;
        const projectId = params.projectId;
        if (!projectId) {
            throw new common_1.BadRequestException(enum_1.PROJECT_ERROR.NO_ID_ERROR);
        }
        const project = await this.projectRepository.findOneBy({ id: projectId });
        if (!project) {
            throw new common_1.BadRequestException(enum_1.PROJECT_ERROR.ID_NOT_FOUND);
        }
        return true;
    }
};
ProjectGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.ProjectEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectGuard);
exports.ProjectGuard = ProjectGuard;
//# sourceMappingURL=project.guard.js.map