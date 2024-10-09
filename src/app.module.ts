import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BoilerplateModule } from './boilerplate/boilerplate.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    UserModule,
    BoilerplateModule,
    PrismaModule,
    AuthModule,
    LikeModule,
  ],
})
export class AppModule {}
