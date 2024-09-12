import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DocumentTypesModule } from '../document-types/document-types.module';
import { RolesModule } from '../roles/roles.module';
import { CompaniesModule } from '../companies/companies.module';
import { AdditionalServices } from './services/additionals.service';
import { CitiesModule, DepartmentsModule } from '../locations/index.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    DocumentTypesModule,
    RolesModule,
    CompaniesModule,
    DepartmentsModule,
    CitiesModule
  ],
  controllers: [UsersController],
  providers: [UsersService, AdditionalServices],
  exports: [TypeOrmModule],
})
export class UsersModule {}
