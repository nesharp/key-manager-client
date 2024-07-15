import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class ProfileModel {
  profile: any;
  token: string = '';
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'token',
      properties: ['token'],
    });
  }
}
