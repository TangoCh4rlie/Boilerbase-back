import { Module } from '@nestjs/common';
import { GithubApiService } from './github_api.service';
import { GithubApiController } from './github_api.controller';

@Module({
  controllers: [GithubApiController],
  providers: [GithubApiService],
})
export class GithubApiModule {}
