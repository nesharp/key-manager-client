import { MenuProps } from 'antd';
import { User } from 'lucide-react';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];
export const profileMenuItems: MenuItem[] = [
  {
    key: 'profile',
    icon: <User />,
    label: <Link href={'/profile'}>Profile</Link>,
  },
];
