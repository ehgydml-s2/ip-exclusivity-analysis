"use client"

import { useState } from "react"
import { Lightbulb, ChevronDown } from "lucide-react"
import type { KeyContributions, KeyContribution } from "@/lib/data"
import { FactText, FactRef } from "./fact-ref"

function ContributionCard({ contribution }: { contribution: KeyContribution }) {
  const getSignificanceColor = (significance: string) => {
    switch (significance) {
      case "High":
        return "border-primary/30 bg-primary/5"
      case "Medium":
        return "border-amber-500/30 bg-amber-500/5"
      case "Low":
        return "border-destructive/30 bg-destructive/5"
      default:
        return "border-secondary/30 bg-secondary/5"
    }
  }

  const significanceColor = getSignificanceColor(contribution.significance)

  return (
    <div className={`rounded-xl border p-4 ${significanceColor}`}>
      <div className="flex items-start justify-between gap-2">
        <h4 className="flex-1 text-sm font-semibold leading-snug text-foreground">
          {contribution.idea}
        </h4>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
            contribution.significance === "High"
              ? "bg-primary/10 text-primary"
              : contribution.significance === "Medium"
                ? "bg-amber-500/10 text-amber-600"
                : "bg-destructive/10 text-destructive"
          }`}
        >
          {contribution.significance}
        </span>
      </div>
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
        <div className="space-y-6">
          {/* Ideas Grid */}
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
                {contributions.company_s_ideas.length === 0 && (
                  <p className="text-xs text-muted-foreground">없음</p>
                )}
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
                {contributions.company_p_ideas.length === 0 && (
                  <p className="text-xs text-muted-foreground">없음</p>
                )}
              </div>
            </div>
          </div>

          {/* Joint Ideas Section */}
          {contributions.joint_ideas && contributions.joint_ideas.length > 0 && (
            <div className="space-y-2">
              <div className="bg-green-700 px-3 py-2">
                <h3 className="text-xs font-bold text-white">공동 아이디어</h3>
              </div>
              <div className="space-y-2">
                {contributions.joint_ideas.map((idea, idx) => (
                  <div key={`joint-${idx}`} className="bg-green-700 px-4 py-3 text-xs text-white">
                    {idea.idea}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
