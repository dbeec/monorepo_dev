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
    try {
      const existRole = await this.rolesRepository.findOneBy({ name: createRoleDto.name })
      if (existRole) {
        throw new ConflictException('Role already exists')
      }
      return await this.rolesRepository.save(createRoleDto);
    } catch (error) {
      console.error("Error creating role: ", error)
      throw error
    }
  }

  async findAll() {
    try {
      return await this.rolesRepository.find();
    } catch (error) {
      console.error("Error getting roles: ", error)
      throw error
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      const existrole = await this.rolesRepository.findOneBy({ roleId: id });
      if (!existrole) {
        throw new NotFoundException("Role not found")
      }
      const role = await this.rolesRepository.findOneBy({ name: updateRoleDto.name })
      if (role) {
        throw new ConflictException("Role name already exists")
      }
      return await this.rolesRepository.update(id, updateRoleDto);
    } catch (error) {
      console.error("error updating role: ", error)
      throw error
    }
  }

  async remove(id: number) {
    try {
      const existRole = await this.rolesRepository.findOneBy({ roleId: id });
      if (!existRole) {
        throw new NotFoundException("Role not found")
      }
      return await this.rolesRepository.softDelete(id);
    } catch (error) {
      console.error("error deleting role: ", error)
      throw error
    }
  }
}
