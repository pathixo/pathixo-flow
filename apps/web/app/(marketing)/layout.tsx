import * as React from 'react';
import { MarketingHeader } from './_components/marketing-header';
import { MarketingFooter } from './_components/marketing-footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="dark"
      className="dark min-h-screen bg-[#08090A] text-[#F5F5F5] flex flex-col selection:bg-white selection:text-black antialiased"
    >
      <MarketingHeader />
      <main className="flex-1 flex flex-col">{children}</main>
      <MarketingFooter />
    </div>
  );
}
