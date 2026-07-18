"use client"

import { useState } from "react"
import { Lightbulb, ChevronDown, AlertTriangle, CheckSquare, FileText, Scale } from "lucide-react"
import { FactText, FactRef } from "./fact-ref"
import { cn } from "@/lib/utils"

interface Judgement {
  group_id: string
  topic: string
  issue: string
  impact: string
  claimed_holder: string
  [key: string]: any
}

function JudgementIdeaCard({ judgement }: { judgement: Judgement }) {
  const factCount = judgement.supporting_facts?.length || 0
  const grade = judgement.evaluation_grade
  const [open, setOpen] = useState(false)
  const [activeDetailTab, setActiveDetailTab] = useState("impact")
  const panelId = `idea-${judgement.group_id}`

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Header - Clickable */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-3 p-4 text-left outline-none transition-colors hover:bg-accent/40 focus-visible:ring-3 focus-visible:ring-ring/40"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
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
            <span className="shrink-0 rounded-md bg-secondary/50 px-2 py-1 font-mono text-xs font-bold text-muted-foreground">
              Fact {factCount}
            </span>
          </div>
          <h5 className="text-sm font-semibold leading-snug text-foreground">
            {judgement.topic}
          </h5>
          <p className="mt-1 text-xs text-muted-foreground">{judgement.issue}</p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {/* Expanded Content */}
      {open && (
        <div id={panelId} className="border-t border-border p-4 space-y-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-3">
            <button
              type="button"
              onClick={() => setActiveDetailTab("impact")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors border-b-2 ${
                activeDetailTab === "impact"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              영향도
            </button>
            <button
              type="button"
              onClick={() => setActiveDetailTab("legal")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors border-b-2 ${
                activeDetailTab === "legal"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              법적 근거
            </button>
            <button
              type="button"
              onClick={() => setActiveDetailTab("grade")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors border-b-2 ${
                activeDetailTab === "grade"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              평가 등급
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-3">
            {/* Impact Tab */}
            {activeDetailTab === "impact" && (
              <>
                {judgement.impact && (
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <FileText className="size-3.5 text-primary" aria-hidden="true" />
                      영향도
                    </h4>
                    <FactText className="text-sm leading-relaxed text-foreground">{judgement.impact}</FactText>
                  </div>
                )}

                {judgement.reasoning && (
                  <div className="border-t border-border pt-3 mt-3">
                    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <Scale className="size-3.5 text-primary" aria-hidden="true" />
                      판단 근거
                    </h4>
                    <FactText className="text-sm leading-relaxed text-foreground">{judgement.reasoning}</FactText>
                  </div>
                )}

                {judgement.supporting_facts && judgement.supporting_facts.length > 0 && (
                  <div className="border-t border-border pt-3 mt-3">
                    <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <FileText className="size-3.5 text-primary" aria-hidden="true" />
                      Supporting Facts
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {judgement.supporting_facts.map((fact) => (
                        <FactRef key={fact} id={fact} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Legal Basis Tab */}
            {activeDetailTab === "legal" && judgement.legal_basis && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Scale className="size-3.5 text-primary" aria-hidden="true" />
                  법적 근거
                </h4>

                {judgement.legal_basis.applicable_laws && judgement.legal_basis.applicable_laws.length > 0 && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">적용 법령</p>
                    <div className="flex flex-wrap gap-1.5">
                      {judgement.legal_basis.applicable_laws.map((law) => (
                        <span
                          key={law}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {law}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {judgement.legal_basis.overall_legal_analysis && (
                  <div className="rounded-lg border border-border bg-secondary/40 p-3">
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">분석 내용</p>
                    <FactText className="text-sm leading-relaxed text-foreground">
                      {judgement.legal_basis.overall_legal_analysis}
                    </FactText>
                  </div>
                )}

                {judgement.legal_basis.risk_factors && judgement.legal_basis.risk_factors.length > 0 && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">Risk Factors</p>
                    <ul className="space-y-1.5">
                      {judgement.legal_basis.risk_factors.map((r, i) => (
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
                )}
              </div>
            )}

            {/* Evaluation Grade Tab */}
            {activeDetailTab === "grade" && grade && (
              <div className="space-y-5">
                <dl className="space-y-3">
                  {[
                    { label: "기술 효과", value: grade.tech_effect_reasoning, grade: grade.tech_effect_grade },
                    { label: "경쟁사 적용", value: grade.competitor_reasoning, grade: grade.competitor_applicability },
                    { label: "기술 격차", value: grade.tech_gap_reasoning, grade: grade.tech_gap },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-2.5">
                      <div className="flex-1 rounded-lg border border-border bg-secondary/40 p-3">
                        <dt className="mb-1 text-xs font-semibold text-primary">{row.label} 근거</dt>
                        <dd className="text-sm leading-relaxed text-foreground">{row.value}</dd>
                      </div>
                      {row.grade && (
                        <div className="w-24 shrink-0 rounded-lg border border-border bg-secondary/40 p-3">
                          <dt className="mb-1 text-xs font-semibold text-primary">등급</dt>
                          <dd className="text-sm font-medium text-foreground">{row.grade}</dd>
                        </div>
                      )}
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

interface KeyContributionsViewProps {
  contributions?: KeyContributions
  judgements?: Judgement[]
}

interface TabConfig {
  id: string
  label: string
  icon?: string
  holder: string
}

export function KeyContributionsView({ contributions, judgements }: KeyContributionsViewProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [activeTab, setActiveTab] = useState("company-s")

  // Group judgements by claimed_holder
  const groupedJudgements = {
    "Company S": (judgements || []).filter(j => j.claimed_holder === "Company S"),
    "Partner": (judgements || []).filter(j => j.claimed_holder === "Partner"),
    "Joint": (judgements || []).filter(j => j.claimed_holder === "Joint"),
    "Unclear": (judgements || []).filter(j => j.claimed_holder === "Unclear"),
    "No Data": (judgements || []).filter(j => j.claimed_holder === "No Data"),
  }

  const tabs: TabConfig[] = [
    { id: "company-s", label: "S사의 아이디어", icon: "S", holder: "Company S" },
    { id: "partner", label: "협력사의 아이디어", icon: "P", holder: "Partner" },
    { id: "unclear", label: "분류 미정", holder: "Unclear" },
    { id: "no-data", label: "데이터 부족", holder: "No Data" },
  ]

  const tabsWithCounts = tabs.filter(tab => groupedJudgements[tab.holder].length > 0)

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
        <div className="space-y-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-border">
            {tabsWithCounts.map((tab) => {
              const count = groupedJudgements[tab.holder].length
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label} ({count})
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {/* Company S Tab */}
            {activeTab === "company-s" && groupedJudgements["Company S"].length > 0 && (
              <div className="space-y-4">
                {groupedJudgements["Company S"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            )}

            {/* Partner Tab */}
            {activeTab === "partner" && groupedJudgements["Partner"].length > 0 && (
              <div className="space-y-4">
                {groupedJudgements["Partner"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            )}

            {/* Unclear Tab */}
            {activeTab === "unclear" && groupedJudgements["Unclear"].length > 0 && (
              <div className="space-y-4">
                {groupedJudgements["Unclear"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            )}

            {/* No Data Tab */}
            {activeTab === "no-data" && groupedJudgements["No Data"].length > 0 && (
              <div className="space-y-4">
                {groupedJudgements["No Data"].map((judgement) => (
                  <JudgementIdeaCard key={judgement.group_id} judgement={judgement} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
