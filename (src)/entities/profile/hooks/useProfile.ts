import { profileModel } from '../models/ProfileModel';
import { Profile } from '@/(src)/shared/services/profile';

export const useProfile = (): Profile | null => {
  const { user, token } = profileModel;
  if (!token || !user) return null;

  return {
    user,
    token,
  };
};
