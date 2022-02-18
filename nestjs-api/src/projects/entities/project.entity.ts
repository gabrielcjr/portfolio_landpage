import { Execution } from 'src/executions/entities/execution.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nome: string;

  @Column()
  Descrição: string;

  @Column()
  Início: string;

  @Column()
  Fim: string;

  @Column()
  Ativo: boolean;

  @OneToMany(() => Execution, (execution) => execution.project)
  executions: Execution[];
}
