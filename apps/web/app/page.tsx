import {
  Button,
  StatusBadge,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
} from '@pathixo/ui';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ProductPreviewSimulator } from '../components/preview';

export default function SmokeTestPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-12">
      {/* Editorial Header */}
      <header className="space-y-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <Badge variant="brand">Platform Architecture v2.0</Badge>
          <StatusBadge status="success" label="All Systems Nominal" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
          Automate the work. Stay in control.
        </h1>
        <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
          A unified automation engine for managing WhatsApp, email, and high-reliability
          workflows. Engineered with persistent idempotency and P0 financial usage metering.
        </p>
      </header>

      {/* Primary Deliverable: Live Synthetic React Product Preview */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-text-muted flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Live Pipeline Architecture Simulator
          </h2>
          <span className="text-xs font-mono text-text-muted">Zero Raster Images &bull; 100% SVG/DOM</span>
        </div>
        <ProductPreviewSimulator />
      </section>

      <Separator />

      {/* Primitives Smoke Test Section */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium text-text-primary">
          Foundational Design Primitives & Quality Gates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>CVA Action Components</CardTitle>
              <CardDescription>
                Restrained 4px radii scale, accessible focus rings, and high typographic contrast.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">
                  Primary Action <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>WCAG 2.2 AA Status Indicators</CardTitle>
              <CardDescription>
                Mandates 6px indicator dots or icons alongside text labels to eliminate color-only communication.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2.5">
                <StatusBadge status="success" label="Verified Webhook" icon={<CheckCircle2 className="h-3 w-3" />} />
                <StatusBadge status="warning" label="Prepaid Balance Low" />
                <StatusBadge status="danger" label="Permanent Dead-Letter" />
                <StatusBadge status="neutral" label="Queued in BullMQ" />
                <StatusBadge status="brand" label="Attributed Ledger" icon={<ShieldCheck className="h-3 w-3" />} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
