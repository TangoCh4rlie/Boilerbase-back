import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { JwtPayload } from '../auth/entities/jwt-payload.entity';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    const users = await this.userService.findAll();
    return users.map((user: any) => {
      return new UserEntity({ ...user });
    });
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async me(@Req() req: { user: JwtPayload }) {
    const user = await this.userService.me(req.user.id);
    if (!user) {
      throw new NotFoundException(`User with ID ${req.user.id} not found`);
    }
    console.log(user.boilerplates);
    return new UserEntity({ ...user });
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return new UserEntity(user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param('id') id: string) {
    return new UserEntity(await this.userService.remove(id));
  }

  @Put('view/:id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  addHistoryBoilerplate(
    @Param('id', ParseIntPipe) boilerplateId: number,
    @Req() req: { user: JwtPayload },
  ) {
    this.userService.addHistoryBoilerplate(boilerplateId, req.user.id);
  }
}
