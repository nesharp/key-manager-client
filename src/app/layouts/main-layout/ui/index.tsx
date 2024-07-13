'use client';
import styles from './main-layout.module.scss';
import cn from 'classnames';
import { ubuntu } from '../models/fonts/ubuntu';
import { Header } from '@/src/widgets/header';
import {themeStore } from '@/src/entities/theme';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
export const MainLayout = observer(
  ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { theme } = themeStore;
    useEffect(() => {
      const bgColor = `var(--${theme}-bg)`;
      const secondaryBgColor = `var(--${theme}-secondary-bg)`;
      const textColor = `var(--${theme}-text-color)`;
      const secondaryTextColor = `var(--${theme}-secondary-text-color)`;
      const borderColor = `var(--${theme}-border-color)`;
      document.body.style.setProperty('--bg-color', bgColor)
      document.body.style.setProperty('--secondary-bg-color', secondaryBgColor)
      document.body.style.setProperty('--text-color', textColor)
      document.body.style.setProperty('--secondary-text-color', secondaryTextColor)
      document.body.style.setProperty('--border-color', borderColor)
    }, [theme]);
    return (
      <div
        className={cn(
          styles.wrapper,
          ubuntu.className,
        )}
      >
        <Header />
        {children}
      </div>
    );
  }
);
