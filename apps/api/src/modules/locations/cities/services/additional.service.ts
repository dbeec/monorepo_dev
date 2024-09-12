import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { City } from "../entities/city.entity";
import { CreateCityDto } from "../dto/create-city.dto";
import { UpdateCityDto } from "../dto/update-city.dto";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class AdditionalServices{
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ){}
  // Funtions for the additional services
  async getAllCities(): Promise<City[]> {
    return await this.cityRepository.find();
  }

  async getOneCity(id: string): Promise<City>{
    const city = await this.cityRepository.findOne({ where: {dane_cod_city: id }});
    if (!city) {
      throw new NotFoundException('City not found');
    }
    return city;
  }

  async createCity(createCityDto: CreateCityDto): Promise<City> {
    await this.validateCityCodeExists(createCityDto.dane_cod_city)
    await this.validateCityNameExists(createCityDto.dane_cod_city)
    return await this.cityRepository.save(createCityDto);
  }

  async updateCity(id: string, updateCityDto: UpdateCityDto): Promise<City> {
    await this.validateCityCodeExists(id)
    await this.validateCityNameExists(updateCityDto.dane_cod_city)
    await this.cityRepository.update(id,{
      ...updateCityDto
    })
    return ;
  }


    // Validations for the additional services
    async validateCityCodeExists(cityId: string): Promise<City> {
      const CityExist = await this.cityRepository.findOne({ where: {dane_cod_city: cityId }});
      if (CityExist) {
        throw new ConflictException('City code exists');
      }
      return CityExist;
    }
    async validateCityNameExists(city: string): Promise<City> {
      const CityExist = await this.cityRepository.findOne({ where: { city }});
      if (CityExist) {
        throw new ConflictException('City name exists');
      }
      return CityExist;
    }
}