import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { UserEntity } from '../../user/entities/user.entity';
import { GithubOAuthGuard } from './github-oauth.guard';

@Controller('auth/github')
export class GitHubOAuthController {
  constructor(private jwtAuthService: JwtAuthService) {}

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
    res.cookie('jwt', accessToken);
    return { access_token: accessToken };
  }
}
