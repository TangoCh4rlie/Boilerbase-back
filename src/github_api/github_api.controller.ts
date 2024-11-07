import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { GithubApiService } from './github_api.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { JwtPayload } from '../auth/entities/jwt-payload.entity';

@Controller('github-api')
@ApiTags('github')
export class GithubApiController {
  constructor(private readonly githubApiService: GithubApiService) {}

  @Get('user-repositories')
  @UseGuards(JwtAuthGuard)
  async getUserRepositories(@Req() req: { user: JwtPayload }) {
    return await this.githubApiService.getUserRepositories(req.user.username);
  }

  @Get('repository-languages/:repo')
  @UseGuards(JwtAuthGuard)
  async getRepositoryLanguages(
    @Req() req: { user: JwtPayload },
    @Param('repo') repo: string,
  ) {
    return await this.githubApiService.getRepositoryLanguages(
      req.user.username,
      repo,
    );
  }

  @Get('repository-readme/:repo')
  @UseGuards(JwtAuthGuard)
  async getRepositoryReadme(
    @Req() req: { user: JwtPayload },
    @Param('repo') repo: string,
  ) {
    return await this.githubApiService.getRepositoryReadme(
      req.user.username,
      repo,
    );
  }
}
