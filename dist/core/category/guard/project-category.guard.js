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
exports.ProjectCategoryGuard = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const enum_1 = require("../enum");
const category_entity_1 = require("../category.entity");
let ProjectCategoryGuard = class ProjectCategoryGuard {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { params } = request;
        const { projectId, categoryId } = params;
        const category = await this.categoryRepository.findOneBy({
            id: categoryId,
        });
        if (category.projectId !== parseInt(projectId)) {
            throw new common_1.BadRequestException(enum_1.CATEGORY_ERROR.PROJECT_CATEGORY_ERROR);
        }
        return true;
    }
};
ProjectCategoryGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectCategoryGuard);
exports.ProjectCategoryGuard = ProjectCategoryGuard;
//# sourceMappingURL=project-category.guard.js.map