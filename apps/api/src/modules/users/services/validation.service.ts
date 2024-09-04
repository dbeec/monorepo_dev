import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/modules/users/entities/user.entity';
import { Company } from 'src/modules/companies/entities/company.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { DocumentType } from 'src/modules/document-types/entities/document-type.entity';

@Injectable()
export class ValidationService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(DocumentType)
    private readonly documentTypeRepository: Repository<DocumentType>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) { }

  async validateUserExists(userId: string): Promise<User>{
    const user = await this.userRepository.findOneBy({ userId })
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }
  async validateEmailExists(email: string): Promise<void> {
    const existEmail = await this.userRepository.findOneBy({ email })
    if (existEmail) {
      throw new ConflictException('Email already exists')
    }
  }

  async validateDocumentExists(document: string): Promise<void> {
    const existDocument = await this.userRepository.findOneBy({ document })
    if (existDocument) {
      throw new ConflictException('Document already exists')
    }
  }

  async validateDocumentTypeExists(documentTypeId: number): Promise<DocumentType>{
    const documentType = await this.documentTypeRepository.findOneBy({document_typeId: documentTypeId})
    if (!documentType) {
      throw new NotFoundException('Invalid Document Type')
    }
    return documentType
  }

  async validateRoleExists(roleId: number): Promise<Role>{
    const role = await this.roleRepository.findOneBy({roleId})
    if (!role) {
      throw new NotFoundException('Invalid Role')
    }
    return role
  }

  async validateCompanyExists(companyId: number): Promise<Company>{
    const company = await this.companyRepository.findOneBy({companyId})
    if (!company) {
      throw new NotFoundException('Invalid Company')
    }
    return company
  }
} 