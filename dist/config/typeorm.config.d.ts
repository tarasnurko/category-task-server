import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/core/category/category.entity';
import { ProjectEntity } from 'src/core/project/project.entity';
export declare const Entities: (typeof ProjectEntity | typeof CategoryEntity)[];
export declare const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions;
