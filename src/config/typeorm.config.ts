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
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // ssl: { rejectUnauthorized: false },
      entities: Entities,
      synchronize: true,
    };
  },
};
