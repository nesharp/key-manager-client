'use client';
import { useRouter } from 'next/navigation';
import { useProfile } from './useProfile';
import { useEffect } from 'react';
interface Props {
  redirectWhen: 'authorized' | 'notAuthorized';
  redirectTo: string;
}
export const useAuthRedirect = ({ redirectTo, redirectWhen }: Props) => {
  const profile = useProfile();
  const router = useRouter();
  useEffect(() => {
    if (
      (profile && redirectWhen === 'authorized') ||
      (!profile && redirectWhen === 'notAuthorized')
    ) {
      router.push(redirectTo);
    }
  });
};
