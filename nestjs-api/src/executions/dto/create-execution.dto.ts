import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class CreateExecutionDto {
  @IsNumber()
  projectId: number;
  @IsNumber()
  associateId: number;
  @Type(() => Date)
  Inicio: Date;
  @Type(() => Date)
  Fim: Date;
  connectionDb: any;
}
