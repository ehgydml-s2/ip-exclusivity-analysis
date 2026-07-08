"use client"

import { useState } from "react"
import {
  ChevronDown,
  Scale,
  Gavel,
  Award,
  AlertTriangle,
  CheckSquare,
  MessageSquareWarning,
  Lightbulb,
  FileText,
} from "lucide-react"
import type { Judgement } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ConfidenceBadge, HolderBadge, GradeBadge } from "./badges"

type Tab = "reasoning" | "legal" | "grade"

function SectionTitle({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      <Icon className="size-3.5 text-primary" aria-hidden="true" />
      {children}
    </h4>
  )
}

function LawChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((law) => (
        <span
          key={law}
          className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
        >
          {law}
        </span>
      ))}
    </div>
  )
}

function KeyValueRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 rounded-lg border border-border bg-secondary/40 p-3">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  )
}

export function JudgementCard({
  judgement,
  activeFactId,
  onFactClick,
}: {
  judgement: Judgement
  activeFactId: string | null
  onFactClick: (id: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>("reasoning")
  const panelId = `judgement-${judgement.group_id}`
  const { legal_basis: legal, evaluation_grade: grade } = judgement
  const contract = legal.contract_analysis

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Header */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-3 p-4 text-left outline-none transition-colors hover:bg-accent/40 focus-visible:ring-3 focus-visible:ring-ring/40"
      >
        <span className="mt-0.5 shrink-0 rounded-md bg-primary/10 px-2 py-1 font-mono text-xs font-bold text-primary">
          {judgement.group_id}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">{judgement.topic}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{judgement.issue}</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              권리 귀속 <HolderBadge value={judgement.exclusivity_holder} />
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              신뢰도 <ConfidenceBadge value={judgement.confidence} />
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              등급 <GradeBadge value={grade.final_grade} />
            </span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div id={panelId} className="border-t border-border">
          {/* Tabs */}
          <div className="flex gap-1 border-b border-border bg-secondary/30 px-2 pt-2">
            {(
              [
                { id: "reasoning", label: "판단 근거", icon: Scale },
                { id: "legal", label: "법적 근거", icon: Gavel },
                { id: "grade", label: "평가 등급", icon: Award },
              ] as const
            ).map((t) => {
              const active = tab === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-t-lg px-3.5 py-2 text-xs font-medium transition-colors",
                    active
                      ? "bg-card text-primary shadow-[inset_0_-2px_0_0_var(--color-primary)]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <t.icon className="size-3.5" aria-hidden="true" />
                  {t.label}
                </button>
              )
            })}
          </div>

          <div className="p-5">
            {/* Tab: 판단 근거 */}
            {tab === "reasoning" && (
              <div className="space-y-5">
                <div>
                  <SectionTitle icon={Scale}>판단 근거</SectionTitle>
                  <p className="text-sm leading-relaxed text-foreground">{judgement.reasoning}</p>
                </div>

                <div>
                  <SectionTitle icon={FileText}>Supporting Facts</SectionTitle>
                  <div className="flex flex-wrap gap-1.5">
                    {judgement.supporting_facts.map((fid) => {
                      const active = activeFactId === fid
                      return (
                        <button
                          key={fid}
                          type="button"
                          onClick={() => onFactClick(fid)}
                          className={cn(
                            "rounded-md border px-2 py-1 font-mono text-xs font-semibold transition-colors",
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10",
                          )}
                        >
                          [{fid}]
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <SectionTitle icon={MessageSquareWarning}>반론 가능성</SectionTitle>
                  <p className="rounded-lg border border-chart-4/30 bg-chart-4/5 p-3 text-sm leading-relaxed text-foreground">
                    {judgement.counter_arguments}
                  </p>
                </div>

                <div>
                  <SectionTitle icon={Lightbulb}>추천 대응</SectionTitle>
                  <p className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-foreground">
                    {judgement.recommendation}
                  </p>
                </div>
              </div>
            )}

            {/* Tab: 법적 근거 */}
            {tab === "legal" && (
              <div className="space-y-5">
                <div>
                  <SectionTitle icon={Gavel}>적용 법령</SectionTitle>
                  <LawChips items={legal.applicable_laws} />
                </div>

                <div>
                  <SectionTitle icon={FileText}>계약 분석</SectionTitle>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div className="flex flex-col gap-0.5 rounded-lg border border-border bg-secondary/40 p-3">
                      <span className="text-xs text-muted-foreground">배타 조항 유무</span>
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          contract.has_exclusivity_clause ? "text-chart-3" : "text-chart-5",
                        )}
                      >
                        {contract.has_exclusivity_clause ? "있음" : "없음"}
                      </span>
                    </div>
                    <KeyValueRow label="유효 기간" value={contract.validity_period} />
                    <KeyValueRow label="집행 리스크" value={contract.enforcement_risk} />
                    <div className="flex flex-col gap-0.5 rounded-lg border border-border bg-secondary/40 p-3 sm:col-span-1">
                      <span className="text-xs text-muted-foreground">조항 요약</span>
                      <span className="text-sm leading-relaxed text-foreground">{contract.clause_summary}</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-card p-3">
                    <SectionTitle icon={Scale}>발명자 판단</SectionTitle>
                    <p className="text-sm leading-relaxed text-foreground">{legal.inventorship_analysis}</p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-3">
                    <SectionTitle icon={Award}>기여도 분석</SectionTitle>
                    <p className="text-sm leading-relaxed text-foreground">{legal.contribution_analysis}</p>
                  </div>
                </div>

                <div>
                  <SectionTitle icon={AlertTriangle}>Risk Factors</SectionTitle>
                  <ul className="space-y-1.5">
                    {legal.risk_factors.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-2.5 text-sm text-foreground"
                      >
                        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionTitle icon={CheckSquare}>Recommended Legal Actions</SectionTitle>
                  <ul className="space-y-1.5">
                    {legal.recommended_legal_actions.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckSquare className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab: 평가 등급 */}
            {tab === "grade" && (
              <div className="space-y-5">
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-start gap-1.5 rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <span className="text-xs text-muted-foreground">최종 등급</span>
                    <GradeBadge value={grade.final_grade} />
                  </div>
                  <KeyValueRow label="기술 효과 등급" value={grade.tech_effect_grade} />
                  <KeyValueRow label="경쟁사 적용 가능성" value={grade.competitor_applicability} />
                  <KeyValueRow label="기술 격차" value={grade.tech_gap} />
                </div>

                <dl className="space-y-3">
                  {[
                    { label: "기술 효과", value: grade.tech_effect_reasoning },
                    { label: "경쟁사 적용", value: grade.competitor_reasoning },
                    { label: "기술 격차", value: grade.tech_gap_reasoning },
                    { label: "종합 등급", value: grade.grade_reasoning },
                  ].map((row) => (
                    <div key={row.label} className="rounded-lg border border-border bg-secondary/40 p-3">
                      <dt className="mb-1 text-xs font-semibold text-primary">{row.label} 근거</dt>
                      <dd className="text-sm leading-relaxed text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
