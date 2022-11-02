import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { CategoryEntity } from 'src/core/category/category.entity';
import { ProjectEntity } from 'src/core/project/project.entity';

export const Entities = [ProjectEntity, CategoryEntity];

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      port: parseInt(process.env.DB_PORT, 10),
      password: process.env.DB_PASSWORD,
      url: process.env.DB_URL,
      entities: Entities,
      synchronize: true,
    };
  },
};
