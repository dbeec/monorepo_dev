import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    try {
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
      const newCompany = this.companyRepository.create(createCompanyDto);
      return await this.companyRepository.save(newCompany);
    } catch (error) {
      console.error('Error creating company: ', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.companyRepository.find();
    } catch (error) {
      console.error('Error getting companies: ', error);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const existCompany = await this.companyRepository.findOneBy({ nit: id });
      if (!existCompany) {
        throw new NotFoundException('Company not found');
      }
      return existCompany;
    } catch (error) {
      console.error('Error getting company: ', error);
      throw error;
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    try {
      const existCompany = await this.companyRepository.findOneBy({
        companyId: id,
      });
      if (!existCompany) {
        throw new NotFoundException('Company not found');
      }
      const existName = await this.companyRepository.findOneBy({
        name: updateCompanyDto.name,
      });
      if (existName) {
        throw new ConflictException('Company name already exists');
      }
      return await this.companyRepository.update(id, updateCompanyDto);
    } catch (error) {
      console.error('Error updating company: ', error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const existCompany = await this.companyRepository.findOneBy({
        companyId: id,
      });
      if (!existCompany) {
        throw new NotFoundException('Company not found');
      }
      existCompany.isActive = false;
      await this.companyRepository.save(existCompany);
      return await this.companyRepository.softDelete(id);
    } catch (error) {
      console.error('Error deleting company: ', error);
      throw error;
    }
  }
}
