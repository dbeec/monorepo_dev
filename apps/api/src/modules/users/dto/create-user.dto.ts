import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

  @IsNumber()
  typeDocument: number;

  @IsString()
  @MinLength(6)
  document: string;

  @IsString()
  firstname: string;

  @IsString()
  middlename: string;

  @IsString()
  firstsurname: string;

  @IsString()
  secondsurname: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsNumber()
  roles: number;

  @IsString()
  company: string;
}
