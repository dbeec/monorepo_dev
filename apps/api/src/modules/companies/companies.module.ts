import { Module } from '@nestjs/common';
import { CompaniesService } from './service/companies.service';
import { CompaniesController } from './controllers/companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CitiesModule, DepartmentsModule } from '../locations/index.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    DepartmentsModule,
    CitiesModule,
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [TypeOrmModule],
})
export class CompaniesModule {}
