'use client';
import styles from './main-layout.module.scss';
import cn from 'classnames';
import { ubuntu } from '../models/fonts/ubuntu';
import { Header } from '@/(src)/widgets/header';
import { themeStore } from '@/(src)/entities/theme';
import { observer } from 'mobx-react-lite';
import { useThemeVariablesComplete } from '../hooks/useThemeVariablesComplete';
import { useAuthRedirect } from '@/(src)/entities/profile';
export const MainLayout = observer(
  ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { theme } = themeStore;
    useThemeVariablesComplete(theme);
    useAuthRedirect({
      redirectTo: '/auth',
      redirectWhen: 'notAuthorized',
    });
    return (
      <div className={cn(styles.wrapper, ubuntu.className)}>
        <Header />
        {children}
      </div>
    );
  }
);
