'use client';
import styles from './main-layout.module.scss';
import cn from 'classnames';
import { ubuntu } from '../models/fonts/ubuntu';
import { Header } from '@/src/widgets/header';
import { Themes, themeStore } from '@/src/entities/theme';
import { observer } from 'mobx-react-lite';
export const MainLayout = observer(
  ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { theme } = themeStore;
    return (
      <div
        className={cn(
          styles.wrapper,
          ubuntu.className,
          theme === Themes.Light ? styles.light : styles.dark
        )}
      >
        <Header />
        {children}
      </div>
    );
  }
);
