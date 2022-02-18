import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  Nome: string;
  @IsString()
  Descrição: string;
  @IsNotEmpty()
  @Type(() => Date)
  Início: string;
  @Type(() => Date)
  Fim: string;
  @IsBoolean()
  Ativo: boolean;
}
