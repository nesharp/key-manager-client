import { Ubuntu } from 'next/font/google';
import styles from './register-form.module.scss';
import cn from 'classnames';
import { Button, Input } from 'antd';
const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin'],
});
interface Props {
  disabled: boolean;
  loginButtonClicked: () => void;
  classNames?: string;
}

export const RegisterForm = ({
  disabled,
  loginButtonClicked,
  classNames,
}: Props) => {
  return (
    <div className={cn(styles.wrapper, classNames)}>
      <h3 className={ubuntu.className}>Register</h3>
      <form
        className={cn(styles.form, ubuntu.className)}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <div>
          <p>First name:</p>
          <Input placeholder="John" />
        </div>
        <div>
          <p>Last name:</p>
          <Input placeholder="Doe" />
        </div>
        <div>
          <p>Name:</p>
          <Input placeholder="example@example.com" />
        </div>
        <div>
          <p>Phone:</p>
          <Input placeholder="+380960000000" />
        </div>
        <div>
          <p>Password</p>
          <Input placeholder="12345678" />
        </div>
        <Button className={styles.registerButton} disabled={disabled}>
          Register
        </Button>
      </form>
      <Button
        type="link"
        className={styles.loginLink}
        onClick={loginButtonClicked}
      >
        Hanv`t account? Register
      </Button>
    </div>
  );
};
