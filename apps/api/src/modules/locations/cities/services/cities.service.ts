import { Injectable } from "@nestjs/common";
import { AdditionalServices } from "./additional.service";
import { CreateCityDto } from "../dto/create-city.dto";
import { UpdateCityDto } from "../dto/update-city.dto";

@Injectable()
export class CitiesService {
  constructor(private readonly additionalService: AdditionalServices) {}
  async create(createCityDto: CreateCityDto) {
    const city =
      await this.additionalService.createCity(createCityDto);
    return { message: 'City created successfully', city };
  }

  async findAll() {
    return await this.additionalService.getAllCities();
  }

  async findOne(id: string) {
    return await this.additionalService.getOneCity(id);
  }

  async findCityByDepartment(id: number){
    return await this.additionalService.getCityByDepartment(id)
  }

  async update(id: string, updateCityDto: UpdateCityDto) {
    return await this.additionalService.updateCity(id, updateCityDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} department`;
  }
}