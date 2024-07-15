import { AuthWidget } from '@/(src)/widgets/auth-form';
import styles from './authPage.module.scss';

export const AuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <AuthWidget />
    </div>
  );
};
