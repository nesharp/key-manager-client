import type { Metadata } from 'next';
import './reset.css';
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
      <body>{children}</body>
    </html>
  );
}
