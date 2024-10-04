import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { CreateBoilerplateDto } from './dto/create-boilerplate.dto';
import { UpdateBoilerplateDto } from './dto/update-boilerplate.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BoilerplateEntity } from './entities/boilerplate.entity';

@Controller('boilerplate')
@ApiTags('boilerplate')
export class BoilerplateController {
  constructor(private readonly boilerplateService: BoilerplateService) {}

  @Post()
  @ApiCreatedResponse({ type: BoilerplateEntity })
  create(@Body() createBoilerplateDto: CreateBoilerplateDto) {
    return this.boilerplateService.create(createBoilerplateDto);
  }

  @Get()
  @ApiOkResponse({ type: BoilerplateEntity, isArray: true })
  findAll() {
    return this.boilerplateService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BoilerplateEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.boilerplateService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BoilerplateEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoilerplateDto: UpdateBoilerplateDto,
  ) {
    return this.boilerplateService.update(id, updateBoilerplateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BoilerplateEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.boilerplateService.remove(id);
  }
}
