'use client';
import { Ubuntu } from 'next/font/google';
import styles from './login-form.module.scss';
import { Button, Input } from 'antd';
import cn from 'classnames';
const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin'],
});
interface Props {
  disabled: boolean;
  registerButtonClicked: () => void;
}
export const LoginForm = ({ disabled, registerButtonClicked }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={ubuntu.className}>Login</h3>
      <form
        className={cn(styles.form, ubuntu.className)}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <div>
          <p>Login</p>
          <Input placeholder="example@example.com" />
        </div>
        <div>
          <p>Password</p>
          <Input placeholder="12345678" />
        </div>
        <Button className={styles.loginButton} disabled={disabled}>
          Login
        </Button>
      </form>
      <Button
        type="link"
        className={styles.registerLink}
        onClick={registerButtonClicked}
      >
        Hanv`t account? Register
      </Button>
    </div>
  );
};
