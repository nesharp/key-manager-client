'use client';
import { Themes, themeStore } from '@/src/entities/theme';
import { SwithWithIcons } from '@/src/shared/swith-with-icons';
import { Moon, Sun } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

export const ThemeSwitch: FC = observer(() => {
  const { theme, toggleTheme } = themeStore;
  return (
    <div>
      {theme === Themes.Light ? 'Light' : 'Dark'}
      <SwithWithIcons
        leftSideIcon={<Sun />}
        rightSideIcon={<Moon />}
        checked={theme === Themes.Light}
        setChecked={() => {
          toggleTheme();
        }}
      />
    </div>
  );
});
