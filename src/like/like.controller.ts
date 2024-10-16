import {
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LikeService } from './like.service';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('like')
@ApiTags('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse()
  likeBoilerplate(
    @Req() req: any,
    @Param('id', ParseIntPipe) boilerplateId: number,
  ) {
    this.likeService.likeBoilerplate(req.user.id, boilerplateId);
    return { message: 'Boilerplate liked successfully' };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse()
  unlikeBoilerplate(
    @Req() req: any,
    @Param('id', ParseIntPipe) boilerplateId: number,
  ) {
    this.likeService.unlikeBoilerplate(req.user.id, boilerplateId);
    return { message: 'Boilerplate unliked successfully' };
  }
}
