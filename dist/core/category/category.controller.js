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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const guard_1 = require("../project/guard");
const category_service_1 = require("./category.service");
const dto_1 = require("./dto");
const guard_2 = require("./guard");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getCategoryList(projectId) {
        return this.categoryService.getCategoryList(projectId);
    }
    createCategory(createCategoryDto, projectId) {
        return this.categoryService.createCategory(createCategoryDto, projectId);
    }
    updateProject(updateCategoryDto, categoryId, projectId) {
        return this.categoryService.updateCategory(updateCategoryDto, categoryId, projectId);
    }
    deleteProject(categoryId) {
        return this.categoryService.deleteCategory(categoryId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryList", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCategoryDto, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Patch)(':categoryId'),
    (0, common_1.UseGuards)(guard_2.CategoryGuard, guard_2.ProjectCategoryGuard),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, common_1.Param)('categoryId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateCategoryDto, Object, Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "updateProject", null);
__decorate([
    (0, common_1.Delete)(':categoryId'),
    (0, common_1.UseGuards)(guard_2.CategoryGuard, guard_2.ProjectCategoryGuard),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteProject", null);
CategoryController = __decorate([
    (0, common_1.Controller)('api/projects/:projectId/categories'),
    (0, common_1.UseGuards)(guard_1.ProjectGuard),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map