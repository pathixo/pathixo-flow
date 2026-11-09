import * as React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from './_components/hero-section';
import { CapabilitiesSection } from './_components/capabilities-section';
import { ChannelShowcase } from './_components/channel-showcase';
import { WorkflowPipeline } from './_components/workflow-pipeline';
import { IntegrationsSecurity } from './_components/integrations-security';
import { FinalCta } from './_components/final-cta';

export const metadata: Metadata = {
  title: 'Flow by Pathixo — Modern Automation Platform',
  description:
    'Internal engineering platform and automation delivery toolkit for WhatsApp and email workflows. Scoped, configured, and operated by Pathixo engineers per client.',
};

export default function MarketingLandingPage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <ChannelShowcase />
      <WorkflowPipeline />
      <IntegrationsSecurity />
      <FinalCta />
    </>
  );
}
