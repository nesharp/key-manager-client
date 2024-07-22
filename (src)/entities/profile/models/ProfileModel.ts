import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { User } from '@/(src)/shared/services/auth';

class ProfileModel {
  user: User | null = null;
  token: string | null = null;
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'token',
      properties: ['token'],
      storage: window?.localStorage,
    });
  }
  public setProfile({ user, token }: { user: User; token: string }) {
    console.log('setProfile', user, token);
    this.user = user;
    this.token = token;
  }

  public clearProfile = () => {
    this.user = null;
    this.token = '';
  };
}
export const profileModel = new ProfileModel();
