import { IsNumber, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsNumber()
  dane_cod_department: number;

  @IsString()
  department: string;
}
