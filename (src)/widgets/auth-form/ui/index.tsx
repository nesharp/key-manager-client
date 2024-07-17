'use client';
import { Montserrat } from 'next/font/google';
import styles from './auth-form.module.scss';
import { LoginForm } from './LoginForm';
import { useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { getBannerMove } from '../animations';
import { Tabs } from '../types';
import { RegisterForm } from './RegisterForm';
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});
export const AuthWidget = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Login);
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
