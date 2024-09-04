import { IsString, MinLength } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @MinLength(3)
  nit: string;

  @IsString()
  @MinLength(3)
  name: string;
}
