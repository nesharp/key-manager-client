import { profileService } from '@/(src)/shared/services/profile';
import { useCallback, useEffect } from 'react';
import { profileModel } from '../models/ProfileModel';

export const useProfileUpdate = () => {
  const { token, setProfile, clearProfile } = profileModel;
  const updateProfile = useCallback(() => {
    if (!token) {
      return;
    }
    profileService.GetProfile({ token }).then((res) => {
      if (!res) {
        clearProfile();
        return;
      }
      setProfile(res.profile, res.token);
    });
  }, [token, setProfile, clearProfile]);
  useEffect(updateProfile, [updateProfile]);
};
