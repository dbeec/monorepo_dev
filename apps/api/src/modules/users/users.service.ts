import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DocumentType } from '../document-types/entities/document-type.entity';
import { Role } from '../roles/entities/role.entity';
import { Company } from '../companies/entities/company.entity';
import { hashPassword } from 'src/shared';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(DocumentType)
    private readonly documentTypeRepository: Repository<DocumentType>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const existEmail = await this.userRepository.findOneBy({
        email: createUserDto.email,
      });
      if (existEmail) {
        throw new ConflictException('Email already exists');
      }
      const existDocument = await this.userRepository.findOneBy({
        document: createUserDto.document,
      });
      if (existDocument) {
        throw new ConflictException('Document already exists');
      }
      const documentType = await this.documentTypeRepository.findOneBy({
        document_typeId: createUserDto.typeDocument,
      });
      if (!documentType) {
        throw new NotFoundException('Invalid Document Type');
      }
      const roles = await this.roleRepository.findOneBy({
        roleId: createUserDto.roles,
      });
      if (!roles) {
        throw new NotFoundException('Invalid Role');
      }
      const company = await this.companyRepository.findOneBy({
        companyId: createUserDto.company,
      });
      if (!company) {
        throw new NotFoundException('Invalid Company');
      }
      const hashedPassword = await hashPassword(createUserDto.password);
      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
        typeDocument: documentType,
        roles,
        company,
      });

      await this.userRepository.save(user);
      return {
        message: 'User created successfully',
        userId: user.userId,
        typeDocument: user.typeDocument.type,
        document: user.document,
        firstname: user.firstname,
        middlename: user.middlename,
        firstsurname: user.firstsurname,
        secondsurname: user.secondsurname,
        email: user.email,
        phone: user.phone,
        isActive: user.isActive,
        roles: user.roles.name,
        companyId: user.company.companyId,
        companyNit: user.company.nit,
        company: user.company.name,
      };
    } catch (error) {
      console.error('Error creating user: ', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const user = await this.userRepository.find();
      return {
        users: user.map((user) => ({
          userId: user.userId,
          typeDocument: user.typeDocument.type,
          document: user.document,
          firstname: user.firstname,
          middlename: user.middlename,
          firstsurname: user.firstsurname,
          secondsurname: user.secondsurname,
          email: user.email,
          phone: user.phone,
          isActive: user.isActive,
          roles: user.roles.name,
          companyId: user.company.companyId,
          companyNit: user.company.nit,
          company: user.company.name,
        })),
      };
    } catch (error) {
      console.error('Error getting user: ', error);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findOneBy({ userId: id });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return {
        userId: user.userId,
        typeDocument: user.typeDocument.type,
        document: user.document,
        firstname: user.firstname,
        middlename: user.middlename,
        firstsurname: user.firstsurname,
        secondsurname: user.secondsurname,
        email: user.email,
        phone: user.phone,
        isActive: user.isActive,
        roles: user.roles.name,
        companyId: user.company.companyId,
        companyNit: user.company.nit,
        company: user.company.name,
      };
    } catch (error) {
      console.error('Error getting user: ', error);
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.findOneBy({ userId: id });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      if (updateUserDto.email) {
        const existEmail = await this.userRepository.findOneBy({
          email: updateUserDto.email,
        });
        if (existEmail) {
          throw new ConflictException('Email already exists');
        }
      }
      if (updateUserDto.document) {
        const existDocument = await this.userRepository.findOneBy({
          document: updateUserDto.document,
        });
        if (existDocument) {
          throw new ConflictException('Document already exists');
        }
      }
      if (updateUserDto.password) {
        const hashedPassword = await hashPassword(updateUserDto.password);
        updateUserDto.password = hashedPassword;
      }
      const documentType = await this.documentTypeRepository.findOneBy({
        document_typeId: updateUserDto.typeDocument,
      });
      if (!documentType) {
        throw new NotFoundException('Invalid Document Type');
      }
      const roles = await this.roleRepository.findOneBy({
        roleId: updateUserDto.roles,
      });
      if (!roles) {
        throw new NotFoundException('Invalid Role');
      }
      const company = await this.companyRepository.findOneBy({
        companyId: updateUserDto.company,
      });
      if (!company) {
        throw new NotFoundException('Invalid Company');
      }
      await this.userRepository.update(id, {
        ...updateUserDto,
        typeDocument: documentType,
        roles,
        company,
      });
      return {
        message: 'Updated',
      };
    } catch (error) {
      console.error('Error updating user: ', error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const user = await this.userRepository.findOneBy({ userId: id });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      user.isActive = false;
      await this.userRepository.save(user);
      return await this.userRepository.softDelete(id);
    } catch (error) {
      console.error('Error deleting user: ', error);
      throw error;
    }
  }
}
