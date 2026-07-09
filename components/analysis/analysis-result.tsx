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
  Scale,
  AlertTriangle,
  ClipboardList,
  ChevronDown,
} from "lucide-react"
import type { AnalysisResult } from "@/lib/data"
import { ConfidenceBadge } from "./badges"
import { JudgementCard } from "./judgement-card"
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
  const [legalExpanded, setLegalExpanded] = useState(true)
  const { overall_conclusion: conclusion, legal_perspective: legal } = result

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
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryStat icon={Tag} label="과제유형">
              {result.project_type}
            </SummaryStat>
            <SummaryStat icon={FolderKanban} label="과제코드">
              <span className="font-bold">{result.project_code}</span>
            </SummaryStat>
            <SummaryStat icon={ShieldCheck} label="신뢰도">
              <ConfidenceBadge value={conclusion.confidence_level} />
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
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    신뢰도 <ConfidenceBadge value={conclusion.confidence_level} />
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
                      권고 사항
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

          {/* 3. Judgement Group Cards */}
          <div className="rounded-2xl border border-border bg-secondary/30 p-5">
            <button
              type="button"
              onClick={() => setJudgementsExpanded(!judgementsExpanded)}
              className="mb-4 flex w-full items-center justify-between gap-2 hover:opacity-70"
            >
              <div className="flex items-center gap-2">
                <ClipboardList className="size-4 text-primary" aria-hidden="true" />
                <h2 className="text-base font-semibold text-foreground">
                  판단 그룹 ({result.judgements.length})
                </h2>
              </div>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 ${judgementsExpanded ? "rotate-180" : ""
                  }`}
                aria-hidden="true"
              />
            </button>

            {judgementsExpanded && (
              <div className="space-y-3">
                {result.judgements.map((j) => (
                  <JudgementCard key={j.group_id} judgement={j} />
                ))}
              </div>
            )}
          </div>

          {/* 4. Legal Perspective Summary */}
          <div className="rounded-2xl border border-border bg-secondary/30 p-5">
            <button
              type="button"
              onClick={() => setLegalExpanded(!legalExpanded)}
              className="mb-4 flex w-full items-center justify-between gap-2 hover:opacity-70"
            >
              <div className="flex items-center gap-2">
                <Scale className="size-4 text-primary" aria-hidden="true" />
                <h2 className="text-base font-semibold text-foreground">법률 관점 종합</h2>
              </div>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 ${legalExpanded ? "rotate-180" : ""
                  }`}
                aria-hidden="true"
              />
            </button>

            {legalExpanded && (
              <div className="space-y-5">
                <FactText className="block text-sm leading-relaxed text-foreground">
                  {legal.overall_legal_analysis}
                </FactText>

                <div>
                  <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <Scale className="size-3.5 text-primary" aria-hidden="true" />
                    적용 법령
                  </h4>
                  <div className="space-y-2.5">
                    {legal.applicable_laws.map((law) => (
                      <div key={law.law_id} className="rounded-lg border border-border bg-card p-3.5">
                        <div className="mb-1.5 flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-bold text-primary">
                            {law.law_id}
                          </span>
                          <span className="text-sm font-semibold text-foreground">{law.law_name}</span>
                        </div>
                        <p className="mb-1.5 text-xs leading-relaxed text-muted-foreground">{law.relevance}</p>
                        <FactText className="block rounded-md border-l-2 border-primary/30 bg-secondary/40 py-1.5 pl-3 pr-2 text-sm leading-relaxed text-foreground">
                          {law.application_to_project}
                        </FactText>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <AlertTriangle className="size-3.5 text-destructive" aria-hidden="true" />
                      Risk Factors
                    </h4>
                    <ul className="space-y-1.5">
                      {legal.risk_factors.map((r, i) => (
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
                      <ClipboardList className="size-3.5 text-primary" aria-hidden="true" />
                      권고 조치
                    </h4>
                    <ol className="space-y-2">
                      {legal.recommended_actions.map((s, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 text-sm leading-relaxed text-foreground"
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {i + 1}
                          </span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </FactMapProvider>
  )
}
