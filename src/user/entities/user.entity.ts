import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { BoilerplateEntity } from '../../boilerplate/entities/boilerplate.entity';
import { LikeEntity } from '../../like/entity/like.entity';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
    if (partial.boilerplates) {
      this.boilerplates = partial.boilerplates.map(
        (bp) => new BoilerplateEntity(bp),
      );
    }
    if (partial.likes) {
      this.likes = partial.likes.map((bp) => new LikeEntity(bp));
    }
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty({ required: false, type: BoilerplateEntity, isArray: true })
  boilerplates?: BoilerplateEntity[];

  @ApiProperty({ required: false, type: BoilerplateEntity, isArray: true })
  likes?: LikeEntity[];

  @ApiProperty({ required: false, isArray: true })
  views: number[];
}
