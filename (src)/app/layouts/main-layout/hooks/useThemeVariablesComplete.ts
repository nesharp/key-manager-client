import { Themes } from '@/(src)/entities/theme';
import { useEffect } from 'react';

export const useThemeVariablesComplete = (theme: Themes) => {
  useEffect(() => {
    const bgColor = `var(--${theme}-bg)`;
    const secondaryBgColor = `var(--${theme}-secondary-bg)`;
    const textColor = `var(--${theme}-text-color)`;
    const secondaryTextColor = `var(--${theme}-secondary-text-color)`;
    const borderColor = `var(--${theme}-border-color)`;
    document.body.style.setProperty('--bg-color', bgColor);
    document.body.style.setProperty('--secondary-bg-color', secondaryBgColor);
    document.body.style.setProperty('--text-color', textColor);
    document.body.style.setProperty(
      '--secondary-text-color',
      secondaryTextColor
    );
    document.body.style.setProperty('--border-color', borderColor);
  }, [theme]);
};
