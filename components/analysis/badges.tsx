import { Info } from "lucide-react"
import type { Confidence, ExclusivityHolder } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ConfidenceBadge({ value }: { value: Confidence }) {
  const style =
    value === "High"
      ? "bg-chart-3/15 text-chart-3 ring-chart-3/30"
      : value === "Medium"
        ? "bg-chart-4/20 text-chart-4 ring-chart-4/30"
        : "bg-muted text-muted-foreground ring-border"
  
  const tooltipText =
    value === "High"
      ? "명확한 증거와 일관된 Timeline"
      : value === "Medium"
        ? "일부 증거는 있으나 반대 증거도 존재"
        : "증거 부족 또는 상충되는 증거"

  return (
    <div className="inline-flex items-center gap-1.5">
      <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1", style)}>
        {value}
      </span>
      <div className="group relative inline-flex">
        <Info className="size-3.5 text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100 cursor-help" aria-hidden="true" />
        <div className="pointer-events-none fixed bottom-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 rounded-lg border border-border bg-popover p-2.5 text-xs leading-relaxed text-popover-foreground shadow-lg opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 z-50">
          <div className="font-semibold text-primary mb-1.5">[신뢰도 분류]</div>
          <ul className="space-y-1">
            <li><strong>High:</strong> 명확한 증거와 일관된 Timeline</li>
            <li><strong>Medium:</strong> 일부 증거는 있으나 반대 증거도 존재</li>
            <li><strong>Low:</strong> 증거 부족 또는 상충되는 증거</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const holderLabel: Record<ExclusivityHolder, string> = {
  "Company S": "Company S",
  "Company P": "Company P",
  Joint: "Joint",
  Unclear: "Unclear",
}

export function HolderBadge({ value }: { value: ExclusivityHolder }) {
  const style =
    value === "Company S"
      ? "bg-primary/10 text-primary ring-primary/20"
      : value === "Company P"
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


