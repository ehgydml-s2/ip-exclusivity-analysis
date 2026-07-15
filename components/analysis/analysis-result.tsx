"use client"

import { useState } from "react"
import {
  Sparkles,
  Download,
  Clock,
  FolderKanban,
  Tag,
  ShieldCheck,
  CheckSquare,
  AlertTriangle,
  ClipboardList,
  ChevronDown,
} from "lucide-react"
import type { AnalysisResult } from "@/lib/data"
import { ConfidenceBadge } from "./badges"
import { JudgementCard } from "./judgement-card"
import { KeyContributionsView } from "./key-contributions"
import { GroupJudgementsView } from "./group-judgements"
import { buildReportText } from "./report"
import { FactMapProvider, FactText } from "./fact-ref"

function SummaryStat({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-card/70 p-3.5">
      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="size-3.5" aria-hidden="true" />
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">{children}</span>
    </div>
  )
}

function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <Icon className="size-4 text-primary" aria-hidden="true" />
      <h3 className="text-sm font-semibold tracking-tight text-foreground">{title}</h3>
    </div>
  )
}

export function AnalysisResultView({
  result,
  projectName,
}: {
  result: AnalysisResult
  projectName?: string
}) {
  const [conclusionExpanded, setConclusionExpanded] = useState(true)
  const [judgementsExpanded, setJudgementsExpanded] = useState(true)
  const { overall_conclusion: conclusion } = result

  function handleExport() {
    const text = buildReportText(result, projectName)
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    const stamp = new Date().toISOString().slice(0, 10)
    a.href = url
    a.download = `배타성분석_${result.project_code}_${stamp}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <FactMapProvider facts={result.facts}>
      <section
        aria-label="AI 배타성 분석 결과"
        className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-lg ring-1 ring-primary/5"
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-primary/15 bg-primary/5 px-6 py-4">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-5" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold text-foreground">AI 배타성 분석 결과</h2>
            <p className="text-xs text-muted-foreground">회의록 기반 자동 분석 · AI-generated</p>
          </div>
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/30 bg-card px-3 py-2 text-xs font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Download className="size-4" aria-hidden="true" />
            파일로 추출
          </button>
        </div>

        <div className="space-y-8 p-6">
          {/* 1. Project Summary Header */}
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            <SummaryStat icon={Tag} label="과제유형">
              {result.project_type}
            </SummaryStat>
            <SummaryStat icon={FolderKanban} label="과제코드">
              <span className="font-bold">{result.project_code}</span>
            </SummaryStat>
            <SummaryStat icon={Clock} label="분석 소요시간">
              {result.elapsed_time.toFixed(1)}초
            </SummaryStat>
          </div>

          {/* 2. Overall Conclusion Card */}
          <div className="rounded-2xl border border-border bg-secondary/30 p-5">
            <button
              type="button"
              onClick={() => setConclusionExpanded(!conclusionExpanded)}
              className="mb-4 flex w-full items-center justify-between gap-2 hover:opacity-70"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                <h2 className="text-base font-semibold text-foreground">종합 판단 (전체 배타성 판단)</h2>
              </div>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 ${conclusionExpanded ? "rotate-180" : ""
                  }`}
                aria-hidden="true"
              />
            </button>

            {conclusionExpanded && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">
                    {conclusion.overall_exclusivity_assessment}
                  </span>
                </div>

                <p className="rounded-xl border border-primary/15 bg-card p-4 text-sm leading-relaxed text-foreground">
                  {conclusion.summary}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <AlertTriangle className="size-3.5 text-destructive" aria-hidden="true" />
                      POINT
                    </h4>
                    <ul className="space-y-1.5">
                      {conclusion.key_risks.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-2.5 text-sm leading-relaxed text-foreground"
                        >
                          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <CheckSquare className="size-3.5 text-primary" aria-hidden="true" />
                      ACTION ITEM
                    </h4>
                    <ul className="space-y-1.5">
                      {conclusion.recommendations.map((a, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 rounded-lg border border-border bg-card p-2.5 text-sm leading-relaxed text-foreground"
                        >
                          <CheckSquare className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Key Contributions */}
          {result.key_contributions && (
            <KeyContributionsView contributions={result.key_contributions} />
          )}

          {/* 4. Group Judgements */}
          <GroupJudgementsView judgements={result.judgements} />

        </div>
      </section>
    </FactMapProvider>
  )
}
