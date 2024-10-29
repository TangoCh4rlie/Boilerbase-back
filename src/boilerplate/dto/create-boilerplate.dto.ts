import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
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
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(22)
  @ApiProperty()
  gitUrl: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ApiProperty()
  languages: string[];

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, default: 0 })
  likesCounter?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, default: 0 })
  usesCounter?: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false, nullable: true })
  authorId: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  logo?: string;

  @IsString()
  @ApiProperty()
  defaultBranch: string;

  @IsString()
  @ApiProperty()
  githubName: string;
}
