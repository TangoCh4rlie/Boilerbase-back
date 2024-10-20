import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { CreateBoilerplateDto } from './dto/create-boilerplate.dto';
import { UpdateBoilerplateDto } from './dto/update-boilerplate.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BoilerplateEntity } from './entities/boilerplate.entity';
import { UserEntity } from '../user/entities/user.entity';
import { LikeEntity } from '../like/entity/like.entity';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';

@Controller('boilerplate')
@ApiTags('boilerplate')
export class BoilerplateController {
  constructor(private readonly boilerplateService: BoilerplateService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse()
  async create(@Body() createBoilerplateDto: CreateBoilerplateDto) {
    try {
      await this.boilerplateService.create(createBoilerplateDto);
      return {
        status: HttpStatus.CREATED,
        message: 'The boilerbase was created successfully',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          // TODO: Add a better error message
          error: 'The boilerbase could not be created' + error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
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

  @Get('top')
  @ApiOkResponse({ type: BoilerplateEntity, isArray: true })
  async getTopOfTheMonth() {
    const boilerplates = await this.boilerplateService.getTopOfTheMonth();

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
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: BoilerplateEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoilerplateDto: UpdateBoilerplateDto,
  ) {
    return this.boilerplateService.update(id, updateBoilerplateDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: BoilerplateEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.boilerplateService.remove(id);
  }
}
