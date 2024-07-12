'use client';
import { Themes, themeStore } from '@/src/entities/theme';
import { SwithWithIcons } from '@/src/shared/swith-with-icons';
import { Moon, Sun } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

export const ThemeSwitch: FC = observer(() => {
  return (
    <div>
      <SwithWithIcons
        leftSideIcon={<Sun />}
        rightSideIcon={<Moon />}
        checked={themeStore.theme === Themes.Light}
        setChecked={() => {
          themeStore.toggleTheme();
        }}
      />
    </div>
  );
});
