'use client';
import styles from './main-layout.module.scss';
import cn from 'classnames';
import { ubuntu } from '../models/fonts/ubuntu';
import { Header } from '@/(src)/widgets/header';
import { themeStore } from '@/(src)/entities/theme';
import { observer } from 'mobx-react-lite';
import { useThemeVariablesComplete } from '../hooks/useThemeVariablesComplete';
import { useAuthRedirect, useProfileUpdate } from '@/(src)/entities/profile';
import { Sidebar } from '@/(src)/widgets/sidebar';
export const MainLayout = observer(
  ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { theme } = themeStore;
    useThemeVariablesComplete(theme);
    useProfileUpdate();
    useAuthRedirect({
      redirectTo: '/auth',
      redirectWhen: 'notAuthorized',
    });
    return (
      <div className={cn(styles.wrapper, ubuntu.className)}>
        <Header />
        <div className={styles.pageWrapper}>
          <Sidebar />
          {children}
        </div>
      </div>
    );
  }
);
