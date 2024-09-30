import { Module } from '@nestjs/common';
import { UserModule } from './module/user.module';
import { BoilerplateModule } from './module/boilerplate.module';

@Module({
  imports: [UserModule, BoilerplateModule],
})
export class AppModule {}
