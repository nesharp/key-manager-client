import { FC } from 'react';
import styles from './header.module.scss';
import { Logo } from '@/src/shared/logo';
import { ThemeSwitch } from '@/src/features/theme-swith';

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
};
