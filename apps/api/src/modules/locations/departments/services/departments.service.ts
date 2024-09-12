import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from '../dto/create-department.dto';
import { UpdateDepartmentDto } from '../dto/update-department.dto';
import { AdditionalServices } from './additionals.service';

@Injectable()
export class DepartmentsService {
  constructor(private readonly additionalService: AdditionalServices) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const deparment =
      await this.additionalService.createDepartment(createDepartmentDto);
    return { message: 'Department created successfully', deparment };
  }

  async findAll() {
    return await this.additionalService.getAllDepartments();
  }

  async findOne(id: number) {
    return await this.additionalService.getOneDepartment(id);
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    await this.additionalService.updateDepartment(id, updateDepartmentDto);
    return { message: 'Department updated successfully' };
  }

  async remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
