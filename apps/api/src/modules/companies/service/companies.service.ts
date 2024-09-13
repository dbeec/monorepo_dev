import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../entities/company.entity';
import { Repository } from 'typeorm';
import { Department } from 'src/modules/locations/departments/entities/department.entity';
import { City } from 'src/modules/locations/cities/entities/city.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const existNit = await this.companyRepository.findOneBy({
      nit: createCompanyDto.nit,
    });
    if (existNit) {
      throw new ConflictException('Nit already exists');
    }
    const existCompanyName = await this.companyRepository.findOneBy({
      name: createCompanyDto.name,
    });
    if (existCompanyName) {
      throw new ConflictException('Company name already exists');
    }
    const department = await this.departmentRepository.findOne({
      where: { dane_cod_department: createCompanyDto.department },
    });
    if (!department) throw new NotFoundException('Department not found');

    const city = await this.cityRepository.findOne({
      where: { dane_cod_city: createCompanyDto.city },
    });
    if (!city) throw new NotFoundException('City not found');

    const newCompany = this.companyRepository.create({
      ...createCompanyDto,
      department,
      city,
    });
    return await this.companyRepository.save(newCompany);
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(id: string) {
    const existCompany = await this.companyRepository.findOneBy({ nit: id });
    if (!existCompany) {
      throw new NotFoundException('Company not found');
    }
    return existCompany;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const existCompany = await this.companyRepository.findOneBy({
      companyId: id,
    });
    if (!existCompany) {
      throw new NotFoundException('Company not found');
    }
    if (updateCompanyDto.name) {
      const existName = await this.companyRepository.findOneBy({
        name: updateCompanyDto.name,
      });
      if (existName) {
        throw new ConflictException('Company name already exists');
      }
    }
    const department = await this.departmentRepository.findOne({
      where: { dane_cod_department: updateCompanyDto.department },
    });
    if (!department) throw new NotFoundException('Department not found');

    const city = await this.cityRepository.findOne({
      where: { dane_cod_city: updateCompanyDto.city },
    });
    if (!city) throw new NotFoundException('City not found');
    return await this.companyRepository.update(id, {
      ...updateCompanyDto,
      department,
      city,
    });
  }

  async remove(id: number) {
    const existCompany = await this.companyRepository.findOneBy({
      companyId: id,
    });
    if (!existCompany) {
      throw new NotFoundException('Company not found');
    }
    existCompany.isActive = false;
    await this.companyRepository.save(existCompany);
    return await this.companyRepository.softDelete(id);
  }
}
