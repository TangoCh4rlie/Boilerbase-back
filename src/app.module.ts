import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GitHubOAuthModule } from './auth/github/github-oauth.module';
import { BoilerplateModule } from './boilerplate/boilerplate.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { LikeModule } from './like/like.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    GitHubOAuthModule,
    UserModule,
    BoilerplateModule,
    PrismaModule,
    LikeModule,
  ],
})
export class AppModule {}
