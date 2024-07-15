import { Tabs } from '../types';

export const getBannerMove = (tab: Tabs) => {
  return {
    [tab === Tabs.Login ? 'right' : 'left']: 10,
    transition: {
      duration: 0.8,
      type: 'tween',
    },
  };
};
