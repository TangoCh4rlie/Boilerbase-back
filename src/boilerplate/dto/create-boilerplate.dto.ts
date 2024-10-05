import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateBoilerplateDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(22)
  @ApiProperty()
  gitUrl: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, default: 0 })
  likes?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, default: 0 })
  uses?: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: false, nullable: true })
  authorId: number;
}
