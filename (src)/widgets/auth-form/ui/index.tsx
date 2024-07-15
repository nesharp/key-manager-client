'use client';
import { Montserrat } from 'next/font/google';
import styles from './auth-form.module.scss';
import { LoginForm } from './LoginForm';
import { useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { getBannerMove } from '../animations';
import { Tabs } from '../types';
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});
export const AuthWidget = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Login);
  return (
    <div className={styles.authForm}>
      <LoginForm
        disabled={tab !== 'login'}
        registerButtonClicked={() => {
          setTab(Tabs.Register);
        }}
      />
      <motion.div
        className={classNames(styles.movable)}
        animate={getBannerMove(tab)}
      >
        <p className={montserrat.className}>Move it to next level</p>
      </motion.div>
    </div>
  );
};
