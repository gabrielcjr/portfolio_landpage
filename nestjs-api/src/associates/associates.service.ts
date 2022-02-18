import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';
import { Associate } from './entities/associate.entity';

@Injectable()
export class AssociatesService {
  constructor(
    @InjectRepository(Associate)
    private associateRepo: Repository<Associate>,
  ) {}
  create(createAssociateDto: CreateAssociateDto) {
    const associate = this.associateRepo.create(createAssociateDto);
    return this.associateRepo.save(associate);
  }

  findAll() {
    return this.associateRepo.find();
  }

  findOne(id: number) {
    return this.associateRepo.findOne(id);
  }

  async update(id: number, updateAssociateDto: UpdateAssociateDto) {
    const updateResult = await this.associateRepo.update(
      id,
      updateAssociateDto,
    );
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Associate, id + 'Associate not found');
    }
    return this.associateRepo.findOne(id);
  }

  async remove(id: number) {
    const deleteResult = await this.associateRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Associate, id + 'Associate not found');
    }
  }
}
