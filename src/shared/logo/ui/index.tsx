import { Key } from 'lucide-react';
import styles from './logo.module.scss';
import { Caveat } from 'next/font/google';
import cn from 'classnames';
const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const Logo = () => {
  return (
    <div className={cn(caveat.className, styles.wrapper)}>
      <span>sharp.</span>
      <Key className={styles.icon} />
    </div>
  );
};
