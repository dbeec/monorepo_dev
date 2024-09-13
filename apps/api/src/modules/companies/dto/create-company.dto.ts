import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @MinLength(3)
  nit: string;

  @IsString()
  @MaxLength(1)
  dv: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  department: number;

  @IsString()
  city: string;
}
