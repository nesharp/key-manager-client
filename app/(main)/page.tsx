'use client';
import { useAuthRedirect } from '@/(src)/entities/profile';

export default function HomePage() {
  useAuthRedirect({
    redirectWhen: 'authorized',
    redirectTo: '/home',
  });
  return <div></div>;
}
