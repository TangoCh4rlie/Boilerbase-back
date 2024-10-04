import { Boilerplate } from '@prisma/client';

export class BoilerplateEntity implements Boilerplate {
  id: number;
  name: string;
  gitUrl: string;
  likes: number;
  uses: number;
}
