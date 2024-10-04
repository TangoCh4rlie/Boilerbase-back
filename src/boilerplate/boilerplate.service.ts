import { Injectable } from '@nestjs/common';
import { Boilerplate } from '../interfaces/boilerplate.interface';

@Injectable()
export class BoilerplateService {
  private readonly boilerplates: Boilerplate[] = [];

  create(boilerplate: Boilerplate): Boilerplate {
    this.boilerplates.push(boilerplate);
    return boilerplate;
  }

  findAll(): Boilerplate[] {
    return this.boilerplates;
  }
}
