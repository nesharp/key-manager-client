'use client';
import { Montserrat } from 'next/font/google';
import styles from './auth-form.module.scss';
import { LoginForm } from './LoginForm';
import classNames from 'classnames';
import { Tabs } from '../types';
import { RegisterForm } from './RegisterForm';
import { useAuthTab } from '../hooks/useAuthTab';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { profileModel } from '@/(src)/entities/profile/models/ProfileModel';
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});
export const AuthWidget = () => {
  const { tab, setTab } = useAuthTab();
  const router = useRouter();
  useEffect(() => {
    //TODO;rework it to useProfile custom hook
    const { token } = profileModel;
    if (token) {
      router.push('/');
    }
  });

  return (
    <div className={styles.authForm}>
      <LoginForm
        disabled={tab !== Tabs.Login}
        registerButtonClicked={() => {
          setTab(Tabs.Register);
        }}
        classNames={tab !== Tabs.Login ? styles.disabled : ''}
      />
      <RegisterForm
        disabled={tab !== Tabs.Register}
        loginButtonClicked={() => {
          setTab(Tabs.Login);
        }}
        setTab={setTab}
        classNames={tab !== Tabs.Register ? styles.disabled : ''}
      />
      <div
        className={classNames(
          styles.movable,
          tab === Tabs.Login && styles.right
        )}
      >
        <p className={montserrat.className}>Move it to next level</p>
      </div>
    </div>
  );
};
