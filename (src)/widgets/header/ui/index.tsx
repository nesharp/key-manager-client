'use client';
import { FC } from 'react';
import styles from './header.module.scss';
import { Logo } from '@/(src)/shared/logo';
import { ThemeSwitch } from '@/(src)/features/theme-swith';
import { ProfileAvatar } from '@/(src)/features/profile-avatar';
import { useProfile, useProfileUpdate } from '@/(src)/entities/profile';
import { observer } from 'mobx-react-lite';

export const Header: FC = observer(() => {
  const profile = useProfile();
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.rightGroup}>
        <div className={styles.themeSwitchWrapper}>
          <ThemeSwitch />
        </div>
        <ProfileAvatar user={profile?.user || null} />
      </div>
    </div>
  );
});
