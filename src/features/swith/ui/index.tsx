'use client';
import { SwithWithIcons } from '@/src/shared';
import { Moon, Sun } from 'lucide-react';
import { FC, useState } from 'react';

export const ThemeSwith: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div>
      <SwithWithIcons
        leftSideIcon={<Sun />}
        rightSideIcon={<Moon />}
        checked={checked}
        setChecked={() => {
          setChecked(!checked);
        }}
      />
    </div>
  );
};
