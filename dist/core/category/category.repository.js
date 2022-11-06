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
exports.CategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const enum_1 = require("./enum");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(category_entity_1.CategoryEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getCategoryList(projectId) {
        const query = this.createQueryBuilder('category');
        query.where('category.projectId = :projectId', { projectId });
        query.orderBy('created_at', 'ASC');
        query.select(['category.id', 'category.text', 'category.projectId']);
        return query.getMany();
    }
    async createCategory(createCategoryDto, projectId) {
        const { text } = createCategoryDto;
        const category = new category_entity_1.CategoryEntity();
        if (await this.findOneBy({ text, projectId })) {
            throw new common_1.ConflictException(enum_1.CATEGORY_ERROR.DUPLICATED_CATEGORY_ERROR);
        }
        category.text = text;
        category.projectId = projectId;
        try {
            await category.save();
            return category;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateCategory(updateCategoryDto, categoryId, projectId) {
        const { text } = updateCategoryDto;
        if (await this.findOneBy({ text, projectId })) {
            throw new common_1.ConflictException(enum_1.CATEGORY_ERROR.DUPLICATED_CATEGORY_ERROR);
        }
        const category = await this.findOneBy({ id: categoryId });
        if (category.text !== text)
            category.text = text;
        await category.save();
        return category;
    }
    async deleteCategory(categoryId) {
        await this.remove(await this.findOneBy({ id: categoryId }));
    }
};
CategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map