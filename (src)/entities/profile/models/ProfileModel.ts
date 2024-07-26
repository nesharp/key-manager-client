import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { User } from '@/(src)/shared/services/auth';

class ProfileModel {
  user: User | null = null;
  token: string | null = null;
  constructor() {
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      makePersistable(this, {
        name: 'TokenStore',
        properties: ['token', 'user'],
        storage: window?.localStorage,
      });
    }
  }
  setProfile = (user: User, token: string) => {
    console.log('from profileModel', user, token);
    this.user = user;
    this.token = token;
  };

  public clearProfile = () => {
    this.user = null;
    this.token = null;
  };
}
export const profileModel = new ProfileModel();

