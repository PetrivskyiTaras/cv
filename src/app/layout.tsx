import { type Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Geist } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My CV',
  description: 'My CV',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <AppRouterCacheProvider options={{ key: 'css', prepend: true, enableCssLayer: true }}>
          { children }
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
