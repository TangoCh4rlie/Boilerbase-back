import { Boilerplate } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BoilerplateEntity implements Boilerplate {
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
  authorId: number;
}
