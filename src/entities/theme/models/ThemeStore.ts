import { makeAutoObservable } from 'mobx';
import { Themes } from '../types';

export class ThemeStore {
  _theme: Themes = Themes.Dark;
  constructor() {
    makeAutoObservable(this);
  }
  get theme() {
    return this._theme;
  }
  toggleTheme = () => {
    this._theme = this._theme === Themes.Light ? Themes.Dark : Themes.Light;
  };
}

export const themeStore = new ThemeStore();
