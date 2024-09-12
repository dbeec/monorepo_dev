import { IsNumber, IsString } from 'class-validator';

export class CreateCityDto {
  @IsString()
  dane_cod_city: string;

  @IsString()
  city: string;

  @IsNumber()
  departmentId: number;
}
