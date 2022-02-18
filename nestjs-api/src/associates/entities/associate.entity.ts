import { Execution } from 'src/executions/entities/execution.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'associates' })
export class Associate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nome: string;

  @Column()
  Cargo: string;

  @Column()
  Admissão: string;

  @Column()
  Ativo: boolean;

  @OneToMany(() => Execution, (execution) => execution.project)
  executions: Execution[];
}
