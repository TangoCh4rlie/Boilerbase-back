import {
  Controller,
  Get,
  NotFoundException,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { UserEntity } from '../../user/entities/user.entity';
import { GithubOAuthGuard } from './github-oauth.guard';
import { UserService } from '../../user/user.service';

@Controller('auth/github')
export class GitHubOAuthController {
  constructor(
    private jwtAuthService: JwtAuthService,
    private userService: UserService,
  ) {}

  @Get()
  @UseGuards(GithubOAuthGuard)
  async githubAuth() {}

  @Get('callback')
  @UseGuards(GithubOAuthGuard)
  async githubAuthCallback(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = req.user as UserEntity;
    const { accessToken } = this.jwtAuthService.login(user);

    const returnUser = await this.userService.me(user.id);
    if (!returnUser) {
      throw new NotFoundException(`User with ID ${user.id} not found`);
    }
    res.cookie('jwt', accessToken);

    return {
      accessToken: accessToken,
      user: new UserEntity({ ...user }),
    };
  }
}
