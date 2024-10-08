import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DocumentTypesModule } from '../document-types/document-types.module';
import { RolesModule } from '../roles/roles.module';
import { CompaniesModule } from '../companies/companies.module';
import { AdditionalServices } from './services/additionals.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    DocumentTypesModule,
    RolesModule,
    CompaniesModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, AdditionalServices],
})
export class UsersModule {}
