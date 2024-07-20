import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginFormType = z.infer<typeof formSchema>;
export const useLoginForm = () => {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return form;
};
