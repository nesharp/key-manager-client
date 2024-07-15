import { makeAutoObservable } from 'mobx';
import { Themes } from '../types';
import { makePersistable } from 'mobx-persist-store';

export class ThemeStore {
  theme: Themes = Themes.Dark;
  constructor() {
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      makePersistable(this, {
        name: 'ThemeStore',
        properties: ['theme'],
        storage: window?.localStorage,
      });
    }
  }

  toggleTheme = () => {
    this.theme = this.theme === Themes.Light ? Themes.Dark : Themes.Light;
  };
}

export const themeStore = new ThemeStore();