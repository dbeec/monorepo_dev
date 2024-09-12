import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateDepartmentDto } from '../dto/create-department.dto';
import { UpdateDepartmentDto } from '../dto/update-department.dto';
import { DepartmentsService } from '../services/departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get('by/:id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Patch('updateBy/:id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}