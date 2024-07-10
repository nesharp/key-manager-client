import { FC } from 'react';
import styles from './header.module.scss';
import { Logo } from '@/src/shared';
import { ThemeSwith } from '@/src/features';

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div>
        <ThemeSwith />
      </div>
    </div>
  );
};
