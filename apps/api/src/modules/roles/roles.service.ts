import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>
  ) { }
  async create(createRoleDto: CreateRoleDto) {
    const existRole = await this.rolesRepository.findOneBy({ name: createRoleDto.name })
    if (existRole) {
      throw new ConflictException('Role already exists')
    }
    return await this.rolesRepository.save(createRoleDto);
  }

  async findAll() {
    return await this.rolesRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const existrole = await this.rolesRepository.findOneBy({ roleId: id });
    if (!existrole) {
      throw new NotFoundException("Role not found")
    }
    const role = await this.rolesRepository.findOneBy({ name: updateRoleDto.name })
    if (role) {
      throw new ConflictException("Role name already exists")
    }
    return await this.rolesRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    const existRole = await this.rolesRepository.findOneBy({ roleId: id });
    if (!existRole) {
      throw new NotFoundException("Role not found")
    }
    return await this.rolesRepository.softDelete(id);
  }
}
