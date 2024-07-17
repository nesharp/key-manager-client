'use client';
import { Ubuntu } from 'next/font/google';
import styles from './login-form.module.scss';
import { Button, Input } from 'antd';
import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin'],
});
interface Props {
  disabled: boolean;
  registerButtonClicked: () => void;
  classNames?: string;
}
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
const onSubmit = (data: any) => {
  console.log(data);
};

export const LoginForm = ({
  disabled,
  registerButtonClicked,
  classNames,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <div className={cn(styles.wrapper, classNames)}>
      <h3 className={ubuntu.className}>Login</h3>
      <form
        className={cn(styles.form, ubuntu.className)}
        onSubmit={handleSubmit(onSubmit)}
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
