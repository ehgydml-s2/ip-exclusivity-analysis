"use client"

import { useState } from "react"
import { Lightbulb, ChevronDown } from "lucide-react"
import type { KeyContributions, KeyContribution } from "@/lib/data"
import { FactText } from "./fact-ref"

function ContributionCard({ contribution }: { contribution: KeyContribution }) {
  const significanceColor =
    contribution.significance === "High"
      ? "border-primary/30 bg-primary/5"
      : "border-secondary/30 bg-secondary/5"

  return (
    <div className={`rounded-xl border p-4 ${significanceColor}`}>
      <div className="mb-3 flex items-start justify-between gap-2">
        <h4 className="flex-1 text-sm font-semibold leading-snug text-foreground">
          {contribution.idea}
        </h4>
        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
          {contribution.significance}
        </span>
      </div>

      <FactText className="mb-3 block text-xs leading-relaxed text-muted-foreground">
        {contribution.description}
      </FactText>

      <div className="mb-3 rounded-lg border border-primary/15 bg-card/40 p-2.5">
        <p className="text-xs font-semibold text-primary mb-1">Impact</p>
        <p className="text-xs leading-relaxed text-foreground">{contribution.impact}</p>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground italic">
        {contribution.reasoning}
      </p>

      {contribution.supporting_facts.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {contribution.supporting_facts.slice(0, 5).map((fact) => (
            <span
              key={fact}
              className="inline-block rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground"
            >
              {fact}
            </span>
          ))}
          {contribution.supporting_facts.length > 5 && (
            <span className="inline-block px-2 py-0.5 text-xs text-muted-foreground">
              +{contribution.supporting_facts.length - 5}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export function KeyContributionsView({ contributions }: { contributions: KeyContributions }) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-5">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-4 flex w-full items-center justify-between gap-2 hover:opacity-70"
      >
        <div className="flex items-center gap-2">
          <Lightbulb className="size-4 text-primary" aria-hidden="true" />
          <h2 className="text-base font-semibold text-foreground">핵심 아이디어</h2>
        </div>
        <ChevronDown
          className={`size-4 text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isExpanded && (
        <div className="grid gap-6 lg:grid-cols-2">
        {/* Company S Column */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-lg bg-blue-500/10">
              <span className="text-xs font-bold text-blue-600">S</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              S사의 아이디어
            </h3>
          </div>
          <div className="space-y-3">
            {contributions.company_s_ideas.map((idea, idx) => (
              <ContributionCard key={`s-${idx}`} contribution={idea} />
            ))}
          </div>
        </div>

        {/* Company P Column */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-lg bg-amber-500/10">
              <span className="text-xs font-bold text-amber-600">P</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              협력사의 아이디어
            </h3>
          </div>
          <div className="space-y-3">
            {contributions.company_p_ideas.map((idea, idx) => (
              <ContributionCard key={`p-${idx}`} contribution={idea} />
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
