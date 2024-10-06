import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BoilerplateModule } from './boilerplate/boilerplate.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, BoilerplateModule, PrismaModule, AuthModule],
})
export class AppModule {}
