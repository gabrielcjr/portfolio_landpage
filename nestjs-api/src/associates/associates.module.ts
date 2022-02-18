import { Module } from '@nestjs/common';
import { AssociatesService } from './associates.service';
import { AssociatesController } from './associates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Associate } from './entities/associate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Associate])],
  controllers: [AssociatesController],
  providers: [AssociatesService],
})
export class AssociatesModule {}
