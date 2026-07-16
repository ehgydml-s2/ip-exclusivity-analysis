"use client"

import { useState } from "react"
import { Lightbulb, ChevronDown } from "lucide-react"
import type { KeyContributions, KeyContribution } from "@/lib/data"
import { FactText, FactRef } from "./fact-ref"

interface Judgement {
  group_id: string
  topic: string
  issue: string
  impact: string
  claimed_holder: string
  [key: string]: any
}

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

function JudgementIdeaCard({ judgement }: { judgement: Judgement }) {
  const factCount = judgement.supporting_facts?.length || 0
  const grade = judgement.evaluation_grade

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="shrink-0 rounded-md bg-primary/10 px-2 py-1 font-mono text-xs font-bold text-primary">
              {judgement.group_id}
            </span>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap ${
                judgement.claimed_holder === "Company S"
                  ? "bg-blue-500/10 text-blue-600"
                  : judgement.claimed_holder === "Partner"
                    ? "bg-amber-500/10 text-amber-600"
                    : judgement.claimed_holder === "Joint"
                      ? "bg-green-500/10 text-green-600"
                      : judgement.claimed_holder === "Unclear"
                        ? "bg-gray-500/10 text-gray-600"
                        : "bg-red-500/10 text-red-600"
              }`}
            >
              {judgement.claimed_holder}
            </span>
          </div>
          <h5 className="text-sm font-semibold leading-snug text-foreground">
            {judgement.topic}
          </h5>
          <p className="mt-1 text-xs text-muted-foreground">{judgement.issue}</p>
          {judgement.impact && (
            <p className="mt-2 text-xs leading-relaxed text-foreground line-clamp-2">
              {judgement.impact}
            </p>
          )}
        </div>
      </div>
      
      {/* Footer with stats */}
      <div className="border-t border-border bg-secondary/30 px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="font-semibold text-foreground">{factCount}</span>
            <span>팩트</span>
          </span>
          {grade && grade.final_grade && (
            <span className="flex items-center gap-1">
              <span className="font-semibold text-foreground">{grade.final_grade}</span>
              <span>등급</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

interface KeyContributionsViewProps {
  contributions?: KeyContributions
  judgements?: Judgement[]
}

export function KeyContributionsView({ contributions, judgements }: KeyContributionsViewProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  // Group judgements by claimed_holder
  const groupedJudgements = {
    "Company S": (judgements || []).filter(j => j.claimed_holder === "Company S"),
    "Partner": (judgements || []).filter(j => j.claimed_holder === "Partner"),
    "Joint": (judgements || []).filter(j => j.claimed_holder === "Joint"),
    "Unclear": (judgements || []).filter(j => j.claimed_holder === "Unclear"),
    "No Data": (judgements || []).filter(j => j.claimed_holder === "No Data"),
  }

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
          {/* Company S Ideas */}
          {groupedJudgements["Company S"].length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-lg bg-blue-500/10">
                  <span className="text-xs font-bold text-blue-600">S</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  S사의 아이디어
                </h3>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {groupedJudgements["Company S"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            </div>
          )}

          {/* Partner Ideas */}
          {groupedJudgements["Partner"].length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-lg bg-amber-500/10">
                  <span className="text-xs font-bold text-amber-600">P</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  협력사의 아이디어
                </h3>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {groupedJudgements["Partner"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            </div>
          )}

          {/* Joint Ideas */}
          {groupedJudgements["Joint"].length > 0 && (
            <div>
              <div className="mb-4">
                <div className="bg-green-700 px-3 py-2 rounded-t-lg">
                  <h3 className="text-xs font-bold text-white">공동 아이디어</h3>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {groupedJudgements["Joint"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            </div>
          )}

          {/* Unclear Ideas */}
          {groupedJudgements["Unclear"].length > 0 && (
            <div>
              <div className="mb-4 font-semibold text-gray-600">분류 미정</div>
              <div className="grid gap-4 lg:grid-cols-2">
                {groupedJudgements["Unclear"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            </div>
          )}

          {/* No Data Ideas */}
          {groupedJudgements["No Data"].length > 0 && (
            <div>
              <div className="mb-4 font-semibold text-gray-600">데이터 부족</div>
              <div className="grid gap-4 lg:grid-cols-2">
                {groupedJudgements["No Data"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
