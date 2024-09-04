import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';

@Injectable()
export class CompanySearchService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async findByNit(nit: string): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ nit });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }

  async findById(id: number): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ companyId: id });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }

  async findByName(name: string): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ name });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }
}
