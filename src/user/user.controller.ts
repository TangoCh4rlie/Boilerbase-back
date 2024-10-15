import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { LikeEntity } from '../like/entity/like.entity';
import { JwtPayload } from '../auth/entities/jwt-payload.entity';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    const users = await this.userService.findAll();
    return users.map((user) => {
      const likes = user.likes.map((like) => new LikeEntity(like));
      return new UserEntity({ ...user, likes });
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
    const likes = user.likes.map((like) => new LikeEntity(like));

    return new UserEntity({ ...user, likes });
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
}
