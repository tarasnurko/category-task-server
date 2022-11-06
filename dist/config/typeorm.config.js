"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmAsyncConfig = exports.Entities = void 0;
const category_entity_1 = require("../core/category/category.entity");
const project_entity_1 = require("../core/project/project.entity");
exports.Entities = [project_entity_1.ProjectEntity, category_entity_1.CategoryEntity];
exports.typeOrmAsyncConfig = {
    useFactory: async () => {
        return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: exports.Entities,
            synchronize: true,
        };
    },
};
//# sourceMappingURL=typeorm.config.js.map