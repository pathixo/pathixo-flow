import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#08090A' },
    { media: '(prefers-color-scheme: light)', color: '#F7F7F4' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://flow.pathixo.com'),
  title: {
    template: '%s | Pathixo Flow',
    default: 'Flow by Pathixo — Modern Automation Platform',
  },
  description:
    'Internal engineering platform and automation delivery toolkit for WhatsApp and email workflows. Scoped, configured, and operated by Pathixo engineers per client.',
  openGraph: {
    title: 'Flow by Pathixo — Modern Automation Platform',
    description:
      'Internal engineering platform and automation delivery toolkit for WhatsApp and email workflows. Scoped, configured, and operated by Pathixo engineers per client.',
    url: 'https://flow.pathixo.com',
    siteName: 'Pathixo Flow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'Pathixo Flow brand mark',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`} data-theme="dark">
      <body className="font-sans antialiased bg-[#08090A] text-[#F5F5F5] min-h-screen">
        {children}
      </body>
    </html>
  );
}

