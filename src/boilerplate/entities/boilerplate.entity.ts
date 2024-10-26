import { Boilerplate } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../user/entities/user.entity';

export class BoilerplateEntity implements Boilerplate {
  constructor(partial: Partial<BoilerplateEntity>) {
    Object.assign(this, partial);
    if (partial.author) {
      this.author = new UserEntity(partial.author);
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  gitUrl: string;

  @ApiProperty()
  languages: string[];

  @ApiProperty()
  features: string[];

  @ApiProperty()
  likesCounter: number;

  @ApiProperty()
  usesCounter: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  authorId: string;

  @ApiProperty()
  logo: string | null;

  @ApiProperty({ required: false, type: UserEntity })
  author?: UserEntity | null;

  @ApiProperty({ required: false })
  liked?: boolean;
}
