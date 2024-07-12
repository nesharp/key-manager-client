import type { Metadata } from 'next';
import './reset.css';
import { AntdProvider } from '@/src/app/providers/antd-provider';
export const metadata: Metadata = {
  title: 'sharp.keys',
  description: 'Key management for the modern web developer',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdProvider>
        <body>{children}</body>
      </AntdProvider>
    </html>
  );
}
