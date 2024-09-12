import { Module } from '@nestjs/common';
import { DepartmentsController } from './controllers/departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { DepartmentsService } from './services/departments.service';
import { AdditionalServices } from './services/additionals.service';
import { City } from '../cities/entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department]),City],
  controllers: [DepartmentsController],
  providers: [DepartmentsService,AdditionalServices],
  exports: [TypeOrmModule],
})
export class DepartmentsModule {}
