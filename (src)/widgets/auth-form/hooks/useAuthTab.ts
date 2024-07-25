import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs } from '../types';
import { useEffect, useState } from 'react';

export const useAuthTab = () => {
  const params = useSearchParams();
  const router = useRouter();
  const tabFromParams: Tabs =
    params.get('tab') === Tabs.Register ? Tabs.Register : Tabs.Login;
  const [tab, setTab] = useState<Tabs>(tabFromParams);
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    router.replace(url.toString());
  }, [tab, router]);
  return { tab, setTab };
};
