import { User } from '@/(src)/shared/services/auth/index';

export interface Profile {
  user: User;
  token: string;
}
