import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { hashPassword } from 'src/shared';
import { AdditionalServices } from './additionals.service';
import { mapUserToResponse } from './mapping/user.mapper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly AdditionalServices: AdditionalServices,
  ) {}
  async create(createUserDto: CreateUserDto) {
    await this.AdditionalServices.validateDocumentExists(createUserDto.document);
    await this.AdditionalServices.validateEmailExists(createUserDto.email);
    const documentType =
      await this.AdditionalServices.validateDocumentTypeExists(
        createUserDto.typeDocument,
      );
    const role = await this.AdditionalServices.validateRoleExists(
      createUserDto.roles,
    );
    const company = await this.AdditionalServices.validateCompanyExists(
      createUserDto.company,
    );

    const hashedPassword = await hashPassword(createUserDto.password);

    const user = this.userRepository.create({
      ...createUserDto,
      typeDocument: documentType,
      password: hashedPassword,
      roles: role,
      company: company,
    });

    await this.userRepository.save(user);
    return mapUserToResponse(user);
  }

  async findAll() {
    const user = await this.userRepository.find();
    return user.map((user) => mapUserToResponse(user));
  }

  async findOne(id: string) {
    const user = await this.AdditionalServices.validateUserExists(id);
    return mapUserToResponse(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.AdditionalServices.validateUserExists(id);
    if (updateUserDto.email) {
      await this.AdditionalServices.validateEmailExists(updateUserDto.email);
    }
    if (updateUserDto.document) {
      await this.AdditionalServices.validateDocumentExists(
        updateUserDto.document,
      );
    }
    if (updateUserDto.password) {
      const hashedPassword = await hashPassword(updateUserDto.password);
      updateUserDto.password = hashedPassword;
    }
    const documentType =
      await this.AdditionalServices.validateDocumentTypeExists(
        updateUserDto.typeDocument,
      );
    const roles = await this.AdditionalServices.validateRoleExists(
      updateUserDto.roles,
    );
    const company = await this.AdditionalServices.validateCompanyExists(
      updateUserDto.company,
    );

    await this.userRepository.update(id, {
      ...updateUserDto,
      typeDocument: documentType,
      roles,
      company,
    });

    return { message: 'Updated' };
  }

  async remove(id: string) {
    const user = await this.AdditionalServices.validateUserExists(id);
    user.isActive = false;
    await this.userRepository.save(user);
    await this.userRepository.softDelete(id);
    return { message: 'Deleted' };
  }

  async AllUserCounts() {
    return this.AdditionalServices.countUsers()
  }
}
