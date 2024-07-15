'use client';
import { Themes, themeStore } from '@/(src)/entities/theme';
import { ConfigProvider, theme as antTheme } from 'antd';
import { observer } from 'mobx-react-lite';

export const AntdProvider = observer(
  ({ children }: { children: React.ReactNode }) => {
    const { theme } = themeStore;
    return (
      <ConfigProvider
        theme={{
          algorithm:
            theme === Themes.Light
              ? antTheme.defaultAlgorithm
              : antTheme.darkAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    );
  }
);
