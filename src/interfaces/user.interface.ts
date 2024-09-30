import { Boilerplate } from './boilerplate.interface';

export interface User {
  id: number;
  username: string;
  templates?: Boilerplate[];
}
