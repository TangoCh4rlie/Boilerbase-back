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
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { CreateBoilerplateDto } from './dto/create-boilerplate.dto';
import { UpdateBoilerplateDto } from './dto/update-boilerplate.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BoilerplateEntity } from './entities/boilerplate.entity';
import { UserEntity } from '../user/entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { JwtPayload } from '../auth/entities/jwt-payload.entity';
import { JwtOptionalGuard } from '../auth/jwt/jwt-optional.guard';

@Controller('boilerplate')
@ApiTags('boilerplate')
export class BoilerplateController {
  constructor(private readonly boilerplateService: BoilerplateService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse()
  async create(
    @Req() req: { user: JwtPayload },
    @Body() createBoilerplateDto: CreateBoilerplateDto,
  ) {
    try {
      createBoilerplateDto.logo = req.user.avatar;
      await this.boilerplateService.create(createBoilerplateDto);
      return {
        status: HttpStatus.CREATED,
        message: 'The boilerbase was created successfully',
      };
    } catch (error) {
      console.log(error);
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

    return boilerplates.map((boilerplate: any) => {
      const author = boilerplate.author
        ? new UserEntity(boilerplate.author)
        : null;
      return new BoilerplateEntity({
        ...boilerplate,
        author,
      });
    });
  }

  @Get('search')
  @ApiOkResponse({ type: BoilerplateEntity, isArray: true })
  async findBoilerplateWithFilter(
    @Query('names') names: string[] | string = [],
    @Query('languages') languages: string[] | string | null,
    @Query('features') features: string[] | string | null,
  ) {
    if (typeof names === 'string') {
      names = [names];
    }
    if (typeof languages === 'string') {
      languages = [languages];
    }
    if (typeof features === 'string') {
      features = [features];
    }

    if (names.length === 0 && !languages && !features) {
      return [];
    }

    const boilerplates =
      (await this.boilerplateService.findBoilerplateWithFilter(
        names,
        languages,
        features,
      )) as BoilerplateEntity[];

    return boilerplates.map((boilerplate) => {
      const author = boilerplate.author
        ? new UserEntity(boilerplate.author)
        : null;
      return new BoilerplateEntity({
        ...boilerplate,
        author,
      });
    });
  }

  @Get('top')
  @UseGuards(JwtOptionalGuard)
  @ApiOkResponse({ type: BoilerplateEntity, isArray: true })
  async getTopOfTheMonth(
    @Query('number', ParseIntPipe) number: number,
    @Req() req: { user: JwtPayload },
  ) {
    const boilerplates = (await this.boilerplateService.getTopOfTheMonth(
      number,
      req.user ? req.user.id : '-1',
    )) as BoilerplateEntity[];

    return boilerplates.map((boilerplate) => {
      const author = boilerplate.author
        ? new UserEntity(boilerplate.author)
        : null;
      return new BoilerplateEntity({
        ...boilerplate,
        author,
      });
    });
  }

  @Get('me/history')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: BoilerplateEntity, isArray: true })
  async getHistory(@Req() req: { user: JwtPayload }) {
    const boilerplates = (await this.boilerplateService.getHistory(
      req.user.id,
    )) as BoilerplateEntity[];

    return boilerplates.map((boilerplate) => {
      const author = boilerplate.author
        ? new UserEntity(boilerplate.author)
        : null;
      return new BoilerplateEntity({
        ...boilerplate,
        author,
      });
    });
  }

  @Get(':name')
  @ApiOkResponse({ type: BoilerplateEntity })
  async findOne(@Param('name') name: string) {
    return this.boilerplateService.findOneByName(name);
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

  // @Post('logo/:name')
  // @UseGuards(JwtAuthGuard)
  // @ApiOkResponse()
  // @UseInterceptors(FileInterceptor('image'))
  // uploadLogo(
  //   @Param('name') name: string,
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [
  //         // 500kb
  //         new MaxFileSizeValidator({ maxSize: 500000 }),
  //         new FileTypeValidator({ fileType: /image\/(png|jpeg|jpg)/ }),
  //       ],
  //     }),
  //   )
  //   banner: Express.Multer.File,
  // ) {
  //   return this.boilerplateService.uploadLogo(name, banner);
  //   return {
  //     filename: banner.originalname,
  //     size: banner.size,
  //     mimetype: banner.mimetype,
  //   };
  // }
}
