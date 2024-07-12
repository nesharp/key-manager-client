'use client';
import { ConfigProvider, theme } from 'antd';

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
