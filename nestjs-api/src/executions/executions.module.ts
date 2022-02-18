import { Module } from '@nestjs/common';
import { ExecutionsService } from './executions.service';
import { ExecutionsController } from './executions.controller';
import { Execution } from './entities/execution.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Associate } from 'src/associates/entities/associate.entity';
import { Project } from 'src/projects/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Execution, Associate, Project])],
  controllers: [ExecutionsController],
  providers: [ExecutionsService],
})
export class ExecutionsModule {}
