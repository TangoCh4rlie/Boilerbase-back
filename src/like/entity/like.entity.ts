import { ApiProperty } from '@nestjs/swagger';
import { BoilerplateEntity } from '../../boilerplate/entities/boilerplate.entity';

export class LikeEntity {
  constructor(partial: Partial<LikeEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  boilerplateId: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  Boilerplate: BoilerplateEntity | null;
}
