import { FC } from 'react';
import styles from './header.module.scss';
import { Logo } from '@/src/shared/logo';
import { ThemeSwitch } from '@/src/features/theme-swith';
import { ProfileAvatar } from '@/src/features/profile-avatar';

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.rightGroup}>
        <div className={styles.themeSwitchWrapper}>
          <ThemeSwitch />
        </div>
        <ProfileAvatar/>
      </div>
    </div>
  );
};
