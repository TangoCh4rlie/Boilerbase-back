import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { Boilerplate } from '../interfaces/boilerplate.interface';

@Controller('boilerplate')
export class BoilerplateController {
  constructor(private readonly boilerplateService: BoilerplateService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() boilerplate: Boilerplate): Promise<Boilerplate> {
    return this.boilerplateService.create(boilerplate);
  }

  @Get()
  async findAll(): Promise<Boilerplate[]> {
    return this.boilerplateService.findAll();
  }
}
