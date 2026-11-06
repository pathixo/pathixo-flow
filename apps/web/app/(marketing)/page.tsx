import * as React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from './_components/hero-section';
import { TrustBar } from './_components/trust-bar';
import { CapabilitiesSection } from './_components/capabilities-section';
import { ChannelShowcase } from './_components/channel-showcase';
import { WorkflowPipeline } from './_components/workflow-pipeline';
import { IntegrationsSecurity } from './_components/integrations-security';
import { FinalCta } from './_components/final-cta';

export const metadata: Metadata = {
  title: 'Pathixo Flow — High-Reliability Automation Platform',
  description:
    'A unified automation engine for managing WhatsApp, email, and intelligent business workflows with persistent idempotency and financial usage metering.',
};

export default function MarketingLandingPage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CapabilitiesSection />
      <ChannelShowcase />
      <WorkflowPipeline />
      <IntegrationsSecurity />
      <FinalCta />
    </>
  );
}
