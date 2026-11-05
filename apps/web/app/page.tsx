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
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@pathixo/ui';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function SmokeTestPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="brand">Platform Foundation v2.0</Badge>
          <StatusBadge status="success" label="All Systems Operational" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          Pathixo Flow Foundation Test
        </h1>
        <p className="text-base text-text-secondary leading-relaxed">
          Validating monorepo packaging, strict TypeScript compilation, dual-theme
          design tokens, and accessible Radix UI primitives.
        </p>
      </header>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-lg font-medium text-text-primary">
          Component Primitives Verification
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Action Components</CardTitle>
              <CardDescription>
                CVA buttons with 4px radii scale and accessible focus rings.
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
              <CardTitle>Status & Security Badges</CardTitle>
              <CardDescription>
                WCAG 2.2 AA compliant status badges with required icons/indicators.
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

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-text-primary">
          High-Density Data Table
        </h2>
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Latency</TableHead>
                <TableHead>Attributed Client</TableHead>
                <TableHead className="text-right">Unit Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">WhatsApp Cloud API</TableCell>
                <TableCell>
                  <StatusBadge status="success" label="Delivered" />
                </TableCell>
                <TableCell>18ms</TableCell>
                <TableCell>Acme Corp</TableCell>
                <TableCell className="text-right">₹0.8631</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Amazon SES</TableCell>
                <TableCell>
                  <StatusBadge status="success" label="Sent" />
                </TableCell>
                <TableCell>42ms</TableCell>
                <TableCell>Starlight Inc</TableCell>
                <TableCell className="text-right">₹0.0083</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}

