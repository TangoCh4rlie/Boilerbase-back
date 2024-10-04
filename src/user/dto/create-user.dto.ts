import { BoilerplateEntity } from '../../boilerplate/entities/boilerplate.entity';

export class CreateUserDto {
  id: number;
  username: string;
  boilerplates: BoilerplateEntity[];
}
