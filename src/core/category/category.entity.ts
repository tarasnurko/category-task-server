import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectEntity } from '../project/project.entity';

@Entity('category')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  projectId: number;
  @ManyToOne(() => ProjectEntity, (project) => project.categories)
  @JoinColumn({ name: 'projectId' })
  project: ProjectEntity;

  @CreateDateColumn()
  created_at: Date;
}
