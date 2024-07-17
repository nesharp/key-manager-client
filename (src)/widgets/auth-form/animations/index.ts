import { Tabs } from '../types';

export const getBannerMove = (tab: Tabs) => {
  return {
    [tab === Tabs.Register ? 'left' : '']: 10,
    [tab === Tabs.Login ? 'right' : '']: 10,

    transition: {
      duration: 0.8,
      type: 'spring',
    },
  };
};
