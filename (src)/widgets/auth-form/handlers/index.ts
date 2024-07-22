import { authService } from '@/(src)/shared/services/auth';
import { notification } from 'antd';
import { LoginFormType } from '../hooks/useLoginForm';
import { profileModel } from '@/(src)/entities/profile/models/ProfileModel';
import { Dispatch, SetStateAction } from 'react';
import { RegisterFormType } from '../hooks/useRegisterForm';
export const onLogin = async (
  data: LoginFormType,
  setIsLoading: Dispatch<SetStateAction<boolean>>
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
  setProfile({
    user: response.user,
    token: response.session.sessionToken,
  });
  notification.open({
    message: 'Success',
    description: 'You are logged in.',
    type: 'success',
  });
};

export const onRegister = async (
  data: RegisterFormType,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
  console.log(data);
  // setIsLoading(true);
  // const response = await authService.Register(data);
  // setIsLoading(false);
  // if (!response) {
  //   notification.open({
  //     type: 'error',
  //     message: 'Oops!',
  //     description: 'Something went wrong',
  //   });
  //   return;
  // }
  // notification.open({
  //   message: 'Success',
  //   description: 'You are registered.',
  //   type: 'success',
  // });
};
