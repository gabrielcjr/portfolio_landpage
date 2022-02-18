import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/auth/jwt.guard';
import { AssociatesService } from './associates.service';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';

// @UseGuards(JwtGuard)
@Controller('associates')
export class AssociatesController {
  constructor(private readonly associatesService: AssociatesService) {}

  @Post()
  create(
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    createAssociateDto: CreateAssociateDto,
  ) {
    return this.associatesService.create(createAssociateDto);
  }

  @Get()
  findAll() {
    return this.associatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    updateAssociateDto: UpdateAssociateDto,
  ) {
    return this.associatesService.update(+id, updateAssociateDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associatesService.remove(+id);
  }
}
