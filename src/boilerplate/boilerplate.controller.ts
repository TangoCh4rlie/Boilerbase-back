import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { CreateBoilerplateDto } from './dto/create-boilerplate.dto';
import { UpdateBoilerplateDto } from './dto/update-boilerplate.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BoilerplateEntity } from './entities/boilerplate.entity';
import { UserEntity } from '../user/entities/user.entity';
import { LikeEntity } from '../like/entity/like.entity';

@Controller('boilerplate')
@ApiTags('boilerplate')
export class BoilerplateController {
  constructor(private readonly boilerplateService: BoilerplateService) {}

  @Post()
  @ApiCreatedResponse({ type: BoilerplateEntity })
  async create(@Body() createBoilerplateDto: CreateBoilerplateDto) {
    return new BoilerplateEntity(
      await this.boilerplateService.create(createBoilerplateDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: BoilerplateEntity, isArray: true })
  async findAll() {
    const boilerplates = await this.boilerplateService.findAll();

    return boilerplates.map((boilerplate) => {
      const author = boilerplate.author
        ? new UserEntity(boilerplate.author)
        : null;
      const likes = boilerplate.likes
        ? boilerplate.likes.map((like) => new LikeEntity(like))
        : [];
      return new BoilerplateEntity({
        ...boilerplate,
        author,
        likes,
      });
    });
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
