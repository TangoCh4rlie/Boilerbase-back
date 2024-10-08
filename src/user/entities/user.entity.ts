import { User } from '@prisma/client';
import { BoilerplateEntity } from '../../boilerplate/entities/boilerplate.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
    if (partial.boilerplates) {
      this.boilerplates = partial.boilerplates.map(
        (bp) => new BoilerplateEntity(bp),
      );
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty({ required: false })
  email: string | null;

  @ApiProperty()
  username: string;

  @Exclude()
  password: string;

  @ApiProperty({ required: false })
  avatar: string | null;

  @ApiProperty({ required: false, type: BoilerplateEntity, isArray: true })
  boilerplates?: BoilerplateEntity[];
}
