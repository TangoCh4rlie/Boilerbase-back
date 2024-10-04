import { User } from '@prisma/client';
import { BoilerplateEntity } from '../../boilerplate/entities/boilerplate.entity';

export class UserEntity implements User {
  id: number;
  username: string;
  boilerplates?: BoilerplateEntity[];
}
