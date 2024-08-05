'use client';
import { useAuthRedirect } from '@/(src)/entities/profile';

const Page = () => {
  useAuthRedirect({
    redirectTo: '/home',
    redirectWhen: 'authorized',
  });
  return <div></div>;
};
export default Page;
