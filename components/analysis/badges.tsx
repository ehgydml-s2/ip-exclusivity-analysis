import type { Confidence, ExclusivityHolder, FinalGrade } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ConfidenceBadge({ value }: { value: Confidence }) {
  const style =
    value === "High"
      ? "bg-chart-3/15 text-chart-3 ring-chart-3/30"
      : value === "Medium"
        ? "bg-chart-4/20 text-chart-4 ring-chart-4/30"
        : "bg-muted text-muted-foreground ring-border"
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1", style)}>
      {value}
    </span>
  )
}

const holderLabel: Record<ExclusivityHolder, string> = {
  "Company S": "Company S",
  Partner: "Partner",
  Joint: "Joint",
  Unclear: "Unclear",
}

export function HolderBadge({ value }: { value: ExclusivityHolder }) {
  const style =
    value === "Company S"
      ? "bg-primary/10 text-primary ring-primary/20"
      : value === "Partner"
        ? "bg-chart-5/10 text-chart-5 ring-chart-5/20"
        : value === "Joint"
          ? "bg-chart-2/15 text-chart-2 ring-chart-2/25"
          : "bg-muted text-muted-foreground ring-border"
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1", style)}>
      {holderLabel[value]}
    </span>
  )
}

export function GradeBadge({ value }: { value: FinalGrade }) {
  const style =
    value === "A2"
      ? "bg-primary text-primary-foreground ring-primary"
      : value === "B"
        ? "bg-chart-4/20 text-chart-4 ring-chart-4/30"
        : value === "C/D"
          ? "bg-chart-5/10 text-chart-5 ring-chart-5/20"
          : "bg-muted text-muted-foreground ring-border"
  return (
    <span
      className={cn(
        "inline-flex min-w-9 items-center justify-center rounded-md px-2 py-0.5 text-xs font-bold ring-1",
        style,
      )}
    >
      {value}
    </span>
  )
}
