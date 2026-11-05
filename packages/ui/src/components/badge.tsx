import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center px-2 py-0.5 text-[11px] font-medium tracking-wide transition-colors rounded-sm select-none',
  {
    variants: {
      variant: {
        default: 'bg-surface-subtle text-text-primary border border-border',
        secondary: 'bg-surface text-text-secondary border border-border-subtle',
        brand: 'bg-brand/10 text-brand border border-brand/20',
        outline: 'bg-transparent text-text-secondary border border-border',
        destructive: 'bg-danger/10 text-danger border border-danger/20',
        success: 'bg-success/10 text-success border border-success/20',
        warning: 'bg-warning/10 text-warning border border-warning/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: 'success' | 'warning' | 'danger' | 'neutral' | 'brand';
  label: string;
  icon?: React.ReactNode;
}

const statusDotColors: Record<StatusBadgeProps['status'], string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  neutral: 'bg-text-muted',
  brand: 'bg-brand',
};

const statusBadgeStyles: Record<StatusBadgeProps['status'], string> = {
  success: 'bg-success/10 text-success border-success/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
  danger: 'bg-danger/10 text-danger border-danger/20',
  neutral: 'bg-surface-subtle text-text-secondary border-border',
  brand: 'bg-brand/10 text-brand border-brand/20',
};

export function StatusBadge({
  status,
  label,
  icon,
  className,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium tracking-wide border rounded-sm select-none',
        statusBadgeStyles[status],
        className
      )}
      {...props}
    >
      {icon ? (
        <span className="shrink-0">{icon}</span>
      ) : (
        <span
          className={cn('h-1.5 w-1.5 rounded-full shrink-0', statusDotColors[status])}
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
    </span>
  );
}
