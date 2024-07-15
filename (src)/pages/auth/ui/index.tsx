import { Montserrat } from 'next/font/google';
import styles from './authPage.module.scss';
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});
export const AuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.authForm}>
        <div className={styles.movable}>
          <p className={montserrat.className}>Move it to next level</p>
        </div>
      </div>
    </div>
  );
};
