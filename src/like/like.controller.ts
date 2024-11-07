import {
  Controller,
  Param,
  ParseIntPipe,
  Put,
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

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse()
  likeBoilerplate(
    @Req() req: any,
    @Param('id', ParseIntPipe) boilerplateId: number,
  ) {
    return this.likeService.likeUnlikeBoilerplate(req.user.id, boilerplateId);
  }
}
