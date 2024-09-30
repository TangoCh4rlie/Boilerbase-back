import { Module } from '@nestjs/common';
import { BoilerplateController } from '../controller/boilerplate.controller';
import { BoilerplateService } from '../service/boilerplate.service';

@Module({
  imports: [],
  controllers: [BoilerplateController],
  providers: [BoilerplateService],
})
export class BoilerplateModule {}
