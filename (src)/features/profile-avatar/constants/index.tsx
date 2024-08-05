import { profileModel } from '@/(src)/entities/profile';
import { authService } from '@/(src)/shared/services/auth';
import { MenuProps } from 'antd';
import { LogOut, User } from 'lucide-react';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];
export const profileMenuItems: MenuItem[] = [
  {
    key: 'profile',
    icon: <User />,
    label: <Link href={'/profile'}>Profile</Link>,
  },
  {
    key: 'logout',
    icon: <LogOut />,
    label: 'Logout',
    onClick: () => {
      const { clearProfile, token } = profileModel;
      if (!token) {
        clearProfile();
        return;
      }
      authService.Logout({ token: token }).then(() => {
        clearProfile();
      });
    },
  },
];
