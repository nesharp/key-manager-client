'use client';
import { User } from '@/(src)/shared/services/auth';
import styles from './profile-avatar.module.scss';
import { useEffect, useState } from 'react';
import { User as UserIcon } from 'lucide-react';
import { Avatar, Dropdown } from 'antd';
import { profileMenuItems } from '../constants';

interface Props {
  user: User | null;
}
export const ProfileAvatar = ({ user }: Props) => {
  const [userState, setUserState] = useState<User | null>();

  useEffect(() => {
    setUserState(user);
  }, [user]);
  if (!userState) {
    return <div>Authorize</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        {userState.firstName} {userState.lastName}
      </div>
      <Dropdown menu={{ items: profileMenuItems }}>
        <Avatar
          src={userState.avatarUrl}
          icon={<UserIcon />}
          className={styles.image}
        />
      </Dropdown>
    </div>
  );
};
