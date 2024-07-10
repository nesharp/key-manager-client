import styles from './main-layout.module.scss';
import cn from 'classnames';
import { ubuntu } from '../models/fonts/ubuntu';
import { Header } from '@/src/widgets';
export const MainLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={cn(styles.wrapper, ubuntu.className)}>
      <Header />
      {children}
    </div>
  );
};
