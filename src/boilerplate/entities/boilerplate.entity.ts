import { Boilerplate } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../user/entities/user.entity';

export class BoilerplateEntity implements Boilerplate {
  constructor({ author, ...data }: Partial<BoilerplateEntity>) {
    Object.assign(this, data);
    if (author) {
      this.author = new UserEntity(author);
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  gitUrl: string;

  @ApiProperty()
  likes: number;

  @ApiProperty()
  uses: number;

  @ApiProperty()
  authorId: number | null;

  @ApiProperty({ required: false, type: UserEntity })
  author?: UserEntity;
}
