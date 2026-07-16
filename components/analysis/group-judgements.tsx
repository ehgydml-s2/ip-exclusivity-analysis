"use client"

import { useState } from "react"
import { Lightbulb, ChevronDown } from "lucide-react"
import type { Judgement } from "@/lib/data"
import { FactText, FactRef } from "./fact-ref"

function JudgementGroupCard({ judgement }: { judgement: Judgement }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getClaimedHolderColor = (holder: string) => {
    switch (holder) {
      case "Company S":
        return "border-primary/30 bg-primary/5"
      case "Partner":
        return "border-amber-500/30 bg-amber-500/5"
      default:
        return "border-secondary/30 bg-secondary/5"
    }
  }

  const holderColor = getClaimedHolderColor(judgement.claimed_holder)

  return (
    <div className={`rounded-xl border p-4 ${holderColor} cursor-pointer transition-all`}>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="mb-3 flex items-start justify-between gap-2">
          <h4 className="flex-1 text-sm font-semibold leading-snug text-foreground">
            {judgement.topic}
          </h4>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
              judgement.claimed_holder === "Company S"
                ? "bg-primary/10 text-primary"
                : judgement.claimed_holder === "Partner"
                  ? "bg-amber-500/10 text-amber-600"
                  : "bg-secondary/10 text-secondary-foreground"
            }`}
          >
            {judgement.claimed_holder}
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="space-y-3 border-t border-border/30 pt-3">
          <div>
            <p className="mb-1.5 text-xs font-semibold text-primary">이슈</p>
            <p className="text-xs leading-relaxed text-foreground">{judgement.issue}</p>
          </div>

          <div>
            <p className="mb-1.5 text-xs font-semibold text-primary">영향</p>
            <FactText className="block text-xs leading-relaxed text-foreground">
              {judgement.impact}
            </FactText>
          </div>

          <div>
            <p className="mb-1.5 text-xs font-semibold text-primary">판단 근거</p>
            <FactText className="block rounded-lg border border-primary/15 bg-card/40 p-2.5 text-xs leading-relaxed text-foreground">
              {judgement.reasoning}
            </FactText>
          </div>

          {judgement.counter_arguments && (
            <div>
              <p className="mb-1.5 text-xs font-semibold text-primary">상대방 주장</p>
              <p className="text-xs leading-relaxed italic text-muted-foreground">
                {judgement.counter_arguments}
              </p>
            </div>
          )}

          {judgement.recommendation && (
            <div>
              <p className="mb-1.5 text-xs font-semibold text-primary">법률 검토 의견</p>
              <p className="text-xs leading-relaxed text-foreground">
                {judgement.recommendation}
              </p>
            </div>
          )}

          {judgement.supporting_facts.length > 0 && (
            <div className="flex flex-wrap gap-0.5">
              {judgement.supporting_facts.map((fact) => (
                <FactRef key={fact} id={fact} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function GroupJudgementsView({ judgements }: { judgements: Judgement[] }) {
  const [isExpanded, setIsExpanded] = useState(true)

  const companySJudgements = judgements.filter((j) => j.claimed_holder === "Company S")
  const partnerJudgements = judgements.filter((j) => j.claimed_holder === "Partner")
  const unclearJudgements = judgements.filter(
    (j) => j.claimed_holder === "Unclear" || j.claimed_holder === "No Data"
  )

  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-5">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-4 flex w-full items-center justify-between gap-2 hover:opacity-70"
      >
        <div className="flex items-center gap-2">
          <Lightbulb className="size-4 text-primary" aria-hidden="true" />
          <h2 className="text-base font-semibold text-foreground">아이디어</h2>
        </div>
        <ChevronDown
          className={`size-4 text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isExpanded && (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* S사 아이디어 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">S사 아이디어</h3>
            <div className="space-y-3">
              {companySJudgements.map((j) => (
                <JudgementGroupCard key={j.group_id} judgement={j} />
              ))}
              {unclearJudgements.map((j) => (
                <JudgementGroupCard key={j.group_id} judgement={j} />
              ))}
              {companySJudgements.length === 0 && unclearJudgements.length === 0 && (
                <p className="text-xs text-muted-foreground">없음</p>
              )}
            </div>
          </div>

          {/* 협력사 아이디어 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">협력사 아이디어</h3>
            <div className="space-y-3">
              {partnerJudgements.map((j) => (
                <JudgementGroupCard key={j.group_id} judgement={j} />
              ))}
              {partnerJudgements.length === 0 && (
                <p className="text-xs text-muted-foreground">없음</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
