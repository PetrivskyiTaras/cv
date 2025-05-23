import { type Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Libre_Baskerville } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/relativeTime';

import Providers from '@/core/components/Providers';

dayjs.extend(duration);

const geistSans = Libre_Baskerville({
  variable: '--font-libre',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Taras Petrivskyi - Senior Software Engineer',
  description: 'Taras Petrivskyi - Senior Software Engineer / Front-End Lead (JavaScript/TypeScript + ReactJS)',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <main>
          <AppRouterCacheProvider options={{ key: 'css', prepend: true, enableCssLayer: true }}>
            <Providers>
              { children }
            </Providers>
          </AppRouterCacheProvider>
        </main>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
