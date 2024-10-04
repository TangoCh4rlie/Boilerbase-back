import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BoilerplateModule } from './boilerplate/boilerplate.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, BoilerplateModule, PrismaModule],
})
export class AppModule {}
