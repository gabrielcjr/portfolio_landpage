import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepo.create(createProjectDto);
    return this.projectRepo.save(project);
  }

  findAll() {
    return this.projectRepo.find();
  }

  findOne(id: number) {
    return this.projectRepo.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const updateResult = await this.projectRepo.update(id, updateProjectDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Project, id + 'Associate not found');
    }
    return this.projectRepo.findOne(id);
  }

  async remove(id: number) {
    const deleteResult = await this.projectRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Project, id + 'Associate not found');
    }
  }
}
