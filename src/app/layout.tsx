import type { Metadata, Viewport } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'SVS Windows & Doors | MANUFACTURER';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Home' },
  description:
    'Upgrade Your Home with Premium Quality Windows and Doors - Experience Unmatched Durability and Elegance!',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://svs-windows.vercel.app/',
    title: 'SVS Windows & Doors',
    description:
      'Upgrade Your Home with Premium Quality Windows and Doors - Experience Unmatched Durability and Elegance!',
    images: {
      url: 'https://svs-windows.vercel.app/meta-image.png',
      alt: 'svs windows og-image',
    },
  },
  twitter: {
    creator: '@nameson',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
