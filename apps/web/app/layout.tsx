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
    default: 'Pathixo Flow — High-Reliability WhatsApp & Email Automation',
  },
  description:
    'Internal engineering platform and reusable automation delivery suite built for high-reliability WhatsApp and Email automations with P0 financial metering.',
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

