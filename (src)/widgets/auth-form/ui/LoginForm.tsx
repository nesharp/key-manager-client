'use client';
import { Ubuntu } from 'next/font/google';
import styles from './login-form.module.scss';
import { Button, Input } from 'antd';
import cn from 'classnames';
import { Controller } from 'react-hook-form';
import { useLoginForm } from '../hooks/useLoginForm';
import { onLogin } from '../handlers';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin'],
});
interface Props {
  disabled: boolean;
  registerButtonClicked: () => void;
  classNames?: string;
}

export const LoginForm = ({
  disabled,
  registerButtonClicked,
  classNames,
}: Props) => {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useLoginForm();
  return (
    <div className={cn(styles.wrapper, classNames)}>
      <h3 className={ubuntu.className}>Login</h3>
      <form
        className={cn(styles.form, ubuntu.className)}
        onSubmit={handleSubmit((data) => onLogin(data, setIsLoading, router))}
      >
        <div>
          <p>Login</p>

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                placeholder="example@example.com"
                onChange={field.onChange}
                value={field.value}
                status={errors.email && 'error'}
              />
            )}
          />
        </div>
        <div>
          <p>Password</p>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                placeholder="12345678"
                type="password"
                onChange={field.onChange}
                value={field.value}
                status={errors.password && 'error'}
              />
            )}
          />
        </div>
        <Button
          className={styles.loginButton}
          disabled={disabled}
          htmlType="submit"
          loading={isLoading}
        >
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
