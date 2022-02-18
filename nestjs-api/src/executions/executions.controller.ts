import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ExecutionsService } from './executions.service';
import { CreateExecutionDto } from './dto/create-execution.dto';
import { UpdateExecutionDto } from './dto/update-execution.dto';
import { JwtGuard } from 'src/auth/auth/jwt.guard';

// @UseGuards(JwtGuard)
@Controller('executions')
export class ExecutionsController {
  constructor(private readonly executionsService: ExecutionsService) {}

  @Post()
  create(@Body() createExecutionDto: CreateExecutionDto) {
    if (createExecutionDto.associateId) {
      return this.executionsService.create(createExecutionDto);
    }
  }

  @Get()
  findAll() {
    return this.executionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.executionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExecutionDto: UpdateExecutionDto,
  ) {
    return this.executionsService.update(+id, updateExecutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.executionsService.remove(+id);
  }
}
