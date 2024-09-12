import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/modules/users/entities/user.entity';
import { Company } from 'src/modules/companies/entities/company.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { DocumentType } from 'src/modules/document-types/entities/document-type.entity';
import { Department } from 'src/modules/locations/departments/entities/department.entity';
import { City } from 'src/modules/locations/cities/entities/city.entity';

@Injectable()
export class AdditionalServices {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(DocumentType)
    private readonly documentTypeRepository: Repository<DocumentType>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async validateUserExists(userId: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async validateEmailExists(email: string): Promise<void> {
    const existEmail = await this.userRepository.findOneBy({ email });
    if (existEmail) {
      throw new ConflictException('Email already exists');
    }
  }

  async validateDocumentExists(document: string): Promise<void> {
    const existDocument = await this.userRepository.findOneBy({ document });
    if (existDocument) {
      throw new ConflictException('Document already exists');
    }
  }

  async validateDocumentTypeExists(
    documentTypeId: number,
  ): Promise<DocumentType> {
    const documentType = await this.documentTypeRepository.findOneBy({
      document_typeId: documentTypeId,
    });
    if (!documentType) {
      throw new NotFoundException('Invalid Document Type');
    }
    return documentType;
  }

  async validateRoleExists(roleId: number): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ roleId });
    if (!role) {
      throw new NotFoundException('Invalid Role');
    }
    return role;
  }

  async validateCompanyExists(companyId: number): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ companyId });
    if (!company) {
      throw new NotFoundException('Invalid Company');
    }
    return company;
  }

  async validateDepartmentExists(
    dane_cod_department: number,
  ): Promise<Department> {
    const department = await this.departmentRepository.findOneBy({
      dane_cod_department,
    });
    if (!department) {
      throw new NotFoundException('Invalid Department');
    }
    return department;
  }

  async validateCityExists(dane_cod_city: string): Promise<City> {
    const city = await this.cityRepository.findOneBy({ dane_cod_city });
    if (!city) {
      throw new NotFoundException('Invalid City');
    }
    return city;
  }

  async countUsers() {
    const totalUsers = await this.userRepository.count();
    return totalUsers;
  }
}
