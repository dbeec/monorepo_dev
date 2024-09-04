import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDocumentTypeDto {
  @IsString()
  @MinLength(2)
  @MaxLength(4)
  type: string;
}
