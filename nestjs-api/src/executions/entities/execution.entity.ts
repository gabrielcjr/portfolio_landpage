import { Associate } from 'src/associates/entities/associate.entity';
import { Project } from 'src/projects/entities/project.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'executions' })
export class Execution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: number;

  @Column()
  associateId: number;

  @Column()
  Inicio: Date;

  @Column()
  Fim: Date;

  @ManyToOne(() => Associate, (associate) => associate.executions)
  @JoinTable({ name: 'executions_associates_projects' })
  associate: Associate[];

  @ManyToOne(() => Project, (project) => project.executions)
  @JoinTable({ name: 'executions_associates_projects' })
  project: Project[];
}
