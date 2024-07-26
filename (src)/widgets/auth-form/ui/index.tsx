'use client';
import { Montserrat } from 'next/font/google';
import styles from './auth-form.module.scss';
import { LoginForm } from './LoginForm';
import classNames from 'classnames';
import { Tabs } from '../types';
import { RegisterForm } from './RegisterForm';
import { useAuthTab } from '../hooks/useAuthTab';
import { useAuthRedirect } from '@/(src)/entities/profile';
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});
export const AuthWidget = () => {
  const { tab, setTab } = useAuthTab();

  useAuthRedirect({
    redirectTo: '/home',
    redirectWhen: 'authorized',
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
