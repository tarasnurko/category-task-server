import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { CategoryModule } from './core/category/category.module';
import { ProjectModule } from './core/project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ProjectModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
