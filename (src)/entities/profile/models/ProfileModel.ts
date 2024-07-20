import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { User } from '@/(src)/shared/services/auth';

class ProfileModel {
  user: User | null = null;
  token: string = '';
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'token',
      properties: ['token'],
    });
  }
  public setProfile({ user, token }: { user: User; token: string }) {
    this.user = user;
    this.token = token;
  }

  public clearProfile = () => {
    this.user = null;
    this.token = '';
  };
}
export const profileModel = new ProfileModel();
