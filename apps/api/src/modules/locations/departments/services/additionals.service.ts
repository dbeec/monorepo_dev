import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';
import { CreateDepartmentDto } from '../dto/create-department.dto';
import { UpdateDepartmentDto } from '../dto/update-department.dto';

@Injectable()
export class AdditionalServices {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}
  // Funtions for the additional services
  async getAllDepartments(): Promise<Department[]> {
    return await this.departmentRepository.find();
  }

  async getOneDepartment(id: number): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: { dane_cod_department: id },
    });
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    return department;
  }

  async createDepartment(
    createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    await this.validateDepartmentCodeExists(
      createDepartmentDto.dane_cod_department,
    );
    await this.validateDepartmentNameExists(createDepartmentDto.department);
    return await this.departmentRepository.save(createDepartmentDto);
  }

  async updateDepartment(
    id: number,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const departmentCode = await this.departmentRepository.findOne({
      where: { dane_cod_department: id },
    });
    if (!departmentCode) {
      throw new NotFoundException('Department code not found');
    }

    if (updateDepartmentDto.department) {
      await this.validateDepartmentNameExists(updateDepartmentDto.department);
    }
    await this.departmentRepository.update(id, {
      department: updateDepartmentDto.department,
    });
    return;
  }

  // Validations for the additional services
  async validateDepartmentCodeExists(
    departmentId: number,
  ): Promise<Department> {
    const departmentExist = await this.departmentRepository.findOne({
      where: { dane_cod_department: departmentId },
    });
    if (departmentExist) {
      throw new ConflictException('Department code exists');
    }
    return departmentExist;
  }
  async validateDepartmentNameExists(department: string): Promise<Department> {
    const departmentExist = await this.departmentRepository.findOne({
      where: { department },
    });
    if (departmentExist) {
      throw new ConflictException('Department name exists');
    }
    return departmentExist;
  }
}
