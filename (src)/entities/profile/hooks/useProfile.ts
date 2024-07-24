import { profileModel } from '../models/ProfileModel';
import { useEffect, useState } from 'react';
import { User } from '@/(src)/shared/services/auth';
import { Profile } from '@/(src)/shared/services/profile/types';

export const useProfile = (): Profile | null => {
  const { user, token } = profileModel;
  if (!token || !user) return null;

  const [userState, setUserState] = useState<User>(user);
  const [tokenState, setTokenState] = useState<string>(token);
  useEffect(() => {
    setUserState(user);
    setTokenState(token);
  }, [user, token]);

  return {
    user: userState,
    token: tokenState,
  };
};
