'use client';
import { Ubuntu } from 'next/font/google';
import styles from './register-form.module.scss';
import cn from 'classnames';
import { Button, Input } from 'antd';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { useEffect, useState } from 'react';
import { onRegister } from '../handlers';
import { Controller } from 'react-hook-form';
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
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useRegisterForm();

  return (
    <div className={cn(styles.wrapper, classNames)}>
      <h3 className={ubuntu.className}>Register</h3>
      <form
        className={cn(styles.form, ubuntu.className)}
        onSubmit={handleSubmit((data) => onRegister(data, setIsLoading))}
      >
        <div>
          <p>First name:</p>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <Input
                placeholder="John"
                onChange={field.onChange}
                value={field.value}
                status={errors.firstName && 'error'}
              />
            )}
          />
        </div>
        <div>
          <p>Last name:</p>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <Input
                placeholder="Doe"
                status={errors.lastName && 'error'}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div>
          <p>Email:</p>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                placeholder="example@example.com"
                status={errors.email && 'error'}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div>
          <p>Phone:</p>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <Input
                placeholder="+380900000000"
                value={field.value}
                onChange={field.onChange}
                status={errors.phoneNumber && 'error'}
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
                value={field.value}
                onChange={field.onChange}
                status={errors.password && 'error'}
              />
            )}
          />
        </div>
        <div>
          <p>Confirm password</p>
          <Controller
            control={control}
            name="passwordRepeat"
            render={({ field }) => (
              <Input
                placeholder="12345678"
                type="password"
                value={field.value}
                onChange={field.onChange}
                status={errors.passwordRepeat && 'error'}
              />
            )}
          />
        </div>
        <Button
          className={styles.registerButton}
          htmlType="submit"
          disabled={disabled}
          loading={isLoading}
        >
          Register
        </Button>
      </form>
      <Button
        type="link"
        className={styles.loginLink}
        onClick={loginButtonClicked}
      >
        Already have an account? Login
      </Button>
    </div>
  );
};
