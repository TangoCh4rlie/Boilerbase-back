import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { UserModule } from '../../user/user.module';
import { GitHubOAuthController } from './github-oauth.controller';
import { GithubOAuthStrategy } from './github-oauth.strategy';

@Module({
  imports: [JwtAuthModule, UserModule],
  controllers: [GitHubOAuthController],
  providers: [GithubOAuthStrategy],
})
export class GitHubOAuthModule {}
