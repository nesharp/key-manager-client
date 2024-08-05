import { Profile } from '@/(src)/shared/services/profile';
import { profileModel } from '../models/ProfileModel';
interface ProfileReturn {
  user: Profile;
  token: string;
}
export const useProfile = (): ProfileReturn | null => {
  const { user, token } = profileModel;
  if (!token || !user) return null;
  return {
    user,
    token,
  };
};
