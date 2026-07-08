"use client"

import {
  Sparkles,
  Download,
  Clock,
  FolderKanban,
  Tag,
  ShieldCheck,
  ListChecks,
  CheckSquare,
  Scale,
  AlertTriangle,
  ClipboardList,
} from "lucide-react"
import type { AnalysisResult } from "@/lib/data"
import { ConfidenceBadge } from "./badges"
import { JudgementCard } from "./judgement-card"
import { buildReportText } from "./report"

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
  activeFactId,
  onFactClick,
}: {
  result: AnalysisResult
  projectName?: string
  activeFactId: string | null
  onFactClick: (id: string) => void
}) {
  const { conclusion, legal_perspective: legal } = result
  const activeFact = activeFactId ? result.facts.find((f) => f.id === activeFactId) : undefined

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
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          <SummaryStat icon={FolderKanban} label="과제코드">
            {result.project_code}
          </SummaryStat>
          <SummaryStat icon={Tag} label="과제유형">
            {result.project_type}
          </SummaryStat>
          <SummaryStat icon={ShieldCheck} label="전체 배타성 판단">
            {conclusion.overall_exclusivity_status}
          </SummaryStat>
          <SummaryStat icon={ShieldCheck} label="전체 신뢰도">
            <ConfidenceBadge value={conclusion.confidence_level} />
          </SummaryStat>
          <SummaryStat icon={Clock} label="분석 소요시간">
            {result.elapsed_time.toFixed(1)}초
          </SummaryStat>
        </div>

        {/* Active fact highlight banner */}
        {activeFact && (
          <div
            className="flex items-start gap-2.5 rounded-xl border border-primary/30 bg-primary/5 p-3.5"
            role="status"
          >
            <span className="shrink-0 rounded-md bg-primary px-2 py-1 font-mono text-xs font-bold text-primary-foreground">
              {activeFact.id}
            </span>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-foreground">{activeFact.text}</p>
              {activeFact.meetingId && (
                <p className="mt-1 text-xs text-primary">아래 회의록 {activeFact.meetingId} 항목이 강조되었습니다.</p>
              )}
            </div>
          </div>
        )}

        {/* 2. Overall Conclusion Card */}
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-5">
          <SectionHeading icon={ShieldCheck} title="종합 결론" />
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">
              {conclusion.overall_exclusivity_status}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              전체 신뢰도 <ConfidenceBadge value={conclusion.confidence_level} />
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <ListChecks className="size-3.5 text-primary" aria-hidden="true" />
                핵심 Findings
              </h4>
              <ul className="space-y-1.5">
                {conclusion.key_findings.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <CheckSquare className="size-3.5 text-primary" aria-hidden="true" />
                Action Items
              </h4>
              <ul className="space-y-1.5">
                {conclusion.action_items.map((a, i) => (
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

        {/* 3. Judgement Group Cards */}
        <div>
          <SectionHeading icon={ClipboardList} title={`판단 그룹 (${result.judgements.length})`} />
          <div className="space-y-3">
            {result.judgements.map((j) => (
              <JudgementCard
                key={j.group_id}
                judgement={j}
                activeFactId={activeFactId}
                onFactClick={onFactClick}
              />
            ))}
          </div>
        </div>

        {/* 4. Legal Perspective Summary */}
        <div className="rounded-2xl border border-border bg-secondary/30 p-5">
          <SectionHeading icon={Scale} title="법률 관점 종합" />
          <p className="mb-4 text-sm leading-relaxed text-foreground">{legal.overall_analysis}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                공통 법률 이슈
              </h4>
              <ul className="space-y-1.5">
                {legal.common_legal_issues.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-chart-5" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <AlertTriangle className="size-3.5 text-destructive" aria-hidden="true" />
                Risk Assessment
              </h4>
              <div className="mb-2 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-muted-foreground">High Risk:</span>
                {legal.risk_assessment.high_risk_groups.map((g) => (
                  <span
                    key={g}
                    className="rounded-md bg-destructive/10 px-2 py-0.5 font-mono text-xs font-semibold text-destructive ring-1 ring-destructive/20"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <p className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm leading-relaxed text-foreground">
                {legal.risk_assessment.risk_summary}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Strategic Recommendations
            </h4>
            <ol className="space-y-2">
              {legal.strategic_recommendations.map((s, i) => (
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
    </section>
  )
}
