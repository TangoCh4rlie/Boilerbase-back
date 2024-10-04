import { Module } from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { BoilerplateController } from './boilerplate.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [BoilerplateController],
  providers: [BoilerplateService],
  imports: [PrismaModule],
})
export class BoilerplateModule {}
