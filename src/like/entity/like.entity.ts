import { Like } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { BoilerplateEntity } from '../../boilerplate/entities/boilerplate.entity';
import { UserEntity } from '../../user/entities/user.entity';

export class LikeEntity implements Like {
  constructor(partial: Partial<LikeEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  boilerplateId: number;

  @ApiProperty({ required: false, type: BoilerplateEntity })
  boilerplate?: BoilerplateEntity;

  @ApiProperty()
  userId: number;

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;
}
