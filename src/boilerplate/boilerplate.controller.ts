import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findOne(@Param('id') id: string) {
    return this.boilerplateService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BoilerplateEntity })
  update(
    @Param('id') id: string,
    @Body() updateBoilerplateDto: UpdateBoilerplateDto,
  ) {
    return this.boilerplateService.update(+id, updateBoilerplateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BoilerplateEntity })
  remove(@Param('id') id: string) {
    return this.boilerplateService.remove(+id);
  }
}
