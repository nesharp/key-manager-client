import { authService } from '@/(src)/shared/services/auth';
import { notification } from 'antd';
import { LoginFormType } from '../hooks/useLoginForm';
import { profileModel } from '@/(src)/entities/profile';
import { Dispatch, SetStateAction } from 'react';
import { RegisterFormType } from '../hooks/useRegisterForm';
import { Tabs } from '../types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
export const onLogin = async (
  data: LoginFormType,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  router: AppRouterInstance
): Promise<void> => {
  setIsLoading(true);
  const response = await authService.Login(data);
  setIsLoading(false);
  const { setProfile, clearProfile } = profileModel;
  if (!response) {
    notification.open({
      type: 'error',
      message: 'Oops!',
      description: 'Something went wrong',
    });
    clearProfile();
    return;
  }
  setProfile(response.user, response.token);
  notification.open({
    message: 'Success',
    description: 'You are logged in.',
    type: 'success',
  });
  router.push('/');
};

export const onRegister = async (
  data: RegisterFormType,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setTab: Dispatch<SetStateAction<Tabs>>
): Promise<void> => {
  setIsLoading(true);
  const response = await authService.Register(data);
  setIsLoading(false);
  if (!response) {
    notification.open({
      type: 'error',
      message: 'Oops!',
      description: 'Something went wrong',
    });
    return;
  }
  setTab(Tabs.Login);
  notification.open({
    message: 'Success',
    description: 'You are registered.',
    type: 'success',
  });
};
