import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
const formSchema = z
  .object({
    firstName: z.string().min(2, { message: 'First name is too short' }),
    lastName: z.string().min(2, { message: 'Last name is too short' }),
    email: z.string().email({ message: 'Invalid email' }),
    phoneNumber: z.string().min(10, { message: 'Phone number is too short' }),
    avatarUrl: z.string(),
    password: z.string().min(8, { message: 'Password is too short' }),
    passwordRepeat: z.string().min(8, { message: 'Password is too short' }),
  })
  .superRefine(({ password, passwordRepeat }, ctx) => {
    if (passwordRepeat !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['passwordRepeat'],
      });
    }
  });
export type RegisterFormType = z.infer<typeof formSchema>;
export const useRegisterForm = () => {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatarUrl: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordRepeat: '',
      phoneNumber: '',
    },
  });
  return form;
};
