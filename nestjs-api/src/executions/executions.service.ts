import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Associate } from 'src/associates/entities/associate.entity';
import { Project } from 'src/projects/entities/project.entity';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateExecutionDto } from './dto/create-execution.dto';
import { UpdateExecutionDto } from './dto/update-execution.dto';
import { Execution } from './entities/execution.entity';

@Injectable()
export class ExecutionsService {
  constructor(
    @InjectRepository(Execution)
    private executionRepo: Repository<Execution>,

    @InjectRepository(Associate)
    private associateRepo: Repository<Associate>,

    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
  ) {}

  async create(createExecutionDto: CreateExecutionDto) {
    try {
      await this.associateExists(createExecutionDto.associateId);
      await this.projectExists(createExecutionDto.projectId);
      await this.checkDbFim(createExecutionDto, createExecutionDto.associateId);

      const execution = this.executionRepo.create(createExecutionDto);

      return this.executionRepo.save(execution);
    } catch (err) {
      throw err;
    }
  }

  findAll() {
    return this.executionRepo.find();
  }

  findOne(id: number) {
    return this.executionRepo.findOne(id);
  }

  async update(id: number, updateExecutionDto: UpdateExecutionDto) {
    const updateResult = await this.executionRepo.update(
      id,
      updateExecutionDto,
    );
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Execution, id + 'Associate not found');
    }
    return this.executionRepo.findOne(id);
  }

  async remove(id: number) {
    const deleteResult = await this.executionRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Execution, id + 'Associate not found');
    }
  }

  private async associateExists(id: number) {
    const associate = await this.associateRepo.findOne(id);
    if (typeof associate === 'undefined' || associate.Ativo === false) {
      throw new EntityNotFoundError(Associate, id + ' Associate not found');
    }
  }

  private async projectExists(id: number) {
    const project = await this.projectRepo.findOne(id);
    if (!project) {
      throw new EntityNotFoundError(Project, id + ' Project not found');
    }
  }

  private dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
    if (b_start < a_start && a_end < b_end) return true; // a in b
    if (b_start > a_start && a_end > b_end) return true; // b in a
    return false;
  }

  private async checkDbFim(
    createExecutionDto: CreateExecutionDto,
    associateId: number,
  ) {
    const convertedInputInicio = new Date(createExecutionDto.Inicio);
    const convertedInputFim = new Date(createExecutionDto.Fim);
    const allAssociateIdInDb = await this.executionRepo.find({
      where: { associateId: associateId },
    });

    for (let i = 0; i < allAssociateIdInDb.length; i++) {
      if (
        this.dateRangeOverlaps(
          allAssociateIdInDb[i]['Inicio'],
          allAssociateIdInDb[i]['Fim'],
          convertedInputInicio,
          convertedInputFim,
        )
      ) {
        throw new Error(
          'An associate just can have one project assigned at a time',
        );
      }
    }
  }
}
