"use client"

import { Sparkles, ShieldCheck, Target, ListChecks, GitBranch, ChevronRight, Download } from "lucide-react"
import type { AnalysisResult, EvidenceItem, ExclusivityLikelihood, Attribution } from "@/lib/data"
import { cn } from "@/lib/utils"

function likelihoodStyle(v: ExclusivityLikelihood) {
  switch (v) {
    case "High":
      return "bg-primary text-primary-foreground"
    case "Medium":
      return "bg-chart-4/20 text-chart-4 ring-1 ring-chart-4/30"
    case "Low":
      return "bg-muted text-muted-foreground ring-1 ring-border"
  }
}

function attributionStyle(v: Attribution) {
  switch (v) {
    case "삼성":
      return "bg-primary/10 text-primary ring-1 ring-primary/20"
    case "협력사":
      return "bg-chart-5/10 text-chart-5 ring-1 ring-chart-5/20"
    case "공동 기여":
      return "bg-chart-3/15 text-chart-3 ring-1 ring-chart-3/25"
    case "판단 보류":
      return "bg-muted text-muted-foreground ring-1 ring-border"
  }
}

function actorDot(actor: EvidenceItem["actor"]) {
  switch (actor) {
    case "삼성":
      return "bg-primary"
    case "협력사":
      return "bg-chart-5"
    case "공동":
      return "bg-chart-3"
    default:
      return "bg-muted-foreground"
  }
}

function BlockHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <Icon className="size-4 text-primary" aria-hidden="true" />
      <h3 className="text-sm font-semibold tracking-tight text-foreground">{title}</h3>
    </div>
  )
}

function buildReportText(result: AnalysisResult, projectCode?: string, projectName?: string) {
  const line = "=".repeat(52)
  const parts: string[] = []
  parts.push(line)
  parts.push("AI 배타성 분석 요약 보고서")
  parts.push("회의록 기반 자동 분석 결과 · AI-generated")
  parts.push(line)
  parts.push("")
  if (projectCode) parts.push(`과제코드 : ${projectCode}`)
  if (projectName) parts.push(`과제명   : ${projectName}`)
  parts.push(`추출일시 : ${new Date().toLocaleString("ko-KR")}`)
  parts.push("")
  parts.push("[ 종합 판단 ]")
  parts.push(`- 배타권 주장 가능성 : ${result.likelihood}`)
  parts.push(`- 예상 귀속 주체     : ${result.attribution}`)
  parts.push("")
  parts.push(result.summary)
  parts.push("")
  parts.push("[ 핵심 근거 ]")
  result.evidence.forEach((ev, i) => {
    parts.push(`${i + 1}. (${ev.actor}) ${ev.text}`)
  })
  parts.push("")
  parts.push("[ 타임라인 요약 ]")
  result.timeline.forEach((step, i) => {
    parts.push(`STEP ${i + 1}. ${step.label} — ${step.detail}`)
  })
  parts.push("")
  parts.push(line)
  return parts.join("\n")
}

export function AnalysisSummary({
  result,
  projectCode,
  projectName,
}: {
  result: AnalysisResult
  projectCode?: string
  projectName?: string
}) {
  function handleExport() {
    const text = buildReportText(result, projectCode, projectName)
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    const stamp = new Date().toISOString().slice(0, 10)
    a.href = url
    a.download = `배타성분석_${projectCode ?? "결과"}_${stamp}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section
      aria-label="AI 분석 요약"
      className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-lg ring-1 ring-primary/5"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-primary/15 bg-primary/5 px-6 py-4">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold text-foreground">AI 배타성 분석 요약</h2>
          <p className="text-xs text-muted-foreground">회의록 기반 자동 분석 결과 · AI-generated</p>
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
        {/* 1. Overall Result */}
        <div>
          <BlockHeader icon={ShieldCheck} title="종합 판단" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-secondary/40 p-4">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="size-3.5" aria-hidden="true" /> 배타권 주장 가능성
              </p>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
                  likelihoodStyle(result.likelihood),
                )}
              >
                {result.likelihood}
              </span>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-4">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <Target className="size-3.5" aria-hidden="true" /> 예상 귀속 주체
              </p>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
                  attributionStyle(result.attribution),
                )}
              >
                {result.attribution}
              </span>
            </div>
          </div>
          <p className="mt-4 rounded-lg bg-accent/40 p-4 text-sm leading-relaxed text-foreground">
            {result.summary}
          </p>
        </div>

        {/* 2. Key Evidence */}
        <div>
          <BlockHeader icon={ListChecks} title="핵심 근거" />
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {result.evidence.map((ev, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5 shadow-sm"
              >
                <span className={cn("mt-1.5 size-2 shrink-0 rounded-full", actorDot(ev.actor))} aria-hidden="true" />
                <span className="text-sm leading-relaxed text-foreground">{ev.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Timeline */}
        <div>
          <BlockHeader icon={GitBranch} title="타임라인 요약" />
          <ol className="flex flex-col gap-2 md:flex-row md:items-center">
            {result.timeline.map((step, i) => (
              <li key={i} className="flex flex-col items-center gap-2 md:flex-1 md:flex-row">
                <div className="w-full flex-1 rounded-xl border border-border bg-secondary/40 p-3.5 text-center">
                  <span className="mb-1 block text-[0.7rem] font-medium text-primary">STEP {i + 1}</span>
                  <span className="block text-sm font-semibold text-foreground">{step.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{step.detail}</span>
                </div>
                {i < result.timeline.length - 1 && (
                  <ChevronRight
                    className="size-5 shrink-0 rotate-90 text-primary/50 md:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
