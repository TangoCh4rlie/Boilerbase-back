import { User } from '@prisma/client';
import { BoilerplateEntity } from '../../boilerplate/entities/boilerplate.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @Type(() => BoilerplateEntity)
  @ApiProperty({ type: () => [BoilerplateEntity] })
  boilerplates?: BoilerplateEntity[];
}
