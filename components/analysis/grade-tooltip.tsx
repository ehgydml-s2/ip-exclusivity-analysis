"use client"

import { useState } from "react"
import { HelpCircle, X } from "lucide-react"

const gradeDescriptions = {
  tech_effect: {
    label: "기술효과",
    description: "해당 기술이 Device에 미치는 기술 효과에 대한 중요도",
    levels: [
      {
        grade: "1",
        title: "1등급: 대체 기술 없어 Integration 불가",
        details: [
          "Integration 기여: 재무성과 기준(연간) 200억 이상 / 설비 가격 10배 이상",
        ],
      },
      {
        grade: "2",
        title: "2등급: 해당 기술 없이 Integration에 다소 영향 있음 (대체 기술 있지만, 활용 시 효과 있음)",
        details: [
          "Integration 기여: 재무성과 기준(연간) 50억~200억 / 설비 가격 2배~10배",
        ],
      },
      {
        grade: "3",
        title: "3등급: Integration 영향력 적음",
        details: [
          "Integration 기여: 재무성과 기준(연간) 50억 이하 / 설비 가격 2배 이하",
        ],
      },
    ],
  },
  competitor_applicability: {
    label: "경쟁사 적용 가능성",
    description: "해당 설비 기술의 경쟁사 적용 가능성",
    levels: [
      {
        grade: "고",
        title: "가능성 고 (타사에 노출된 경우 적용 용이하여 기술격차 위해 보호 필요)",
        details: [
          "당사 Integration/구조/공정과 유사하여 적용 시 바로 효과",
          "같은 기종의 설비를 사용하고 있어 쉽게 conversion 가능",
          "기존 설비와 투자 중복 문제가 없어 쉽게 양산에 도입 가능",
        ],
      },
      {
        grade: "저",
        title: "가능성 저 (S사 특화 기술)",
        details: [
          "당사 Integration/구조/공정과 달라 직접 채용 어려움",
          "적용은 가능하나 상당기간의 시행착오가 필요",
          "신규 설비 도입 & 기존 투자 설비 연장 불가로 투자 급증",
        ],
      },
    ],
  },
  tech_gap: {
    label: "기술 격차",
    description: "대체 기술, 동일 설비사 이전 기술, 또는 타 설비사 동종 설비 기술 대비 격차",
    levels: [
      {
        grade: "대",
        title: "2년 이상 기술 격차",
        details: [],
      },
      {
        grade: "중",
        title: "1년~2년 미만 기술 격차",
        details: [],
      },
      {
        grade: "소",
        title: "1년 미만 기술 격차",
        details: [],
      },
    ],
    comparison: [
      "a) 해당 기술 vs 대체 기술 비교 (기존 기술 연장 or Option 기술과의 격차)",
      "b) 동일 설비사 기술 간 비교 (차세대 version과의 기술 격차)",
      "c) 해당 설비사 vs 타 설비사 비교 (유사 설비의 설비사 간 기술 격차)",
    ],
  },
}

function GradeTooltip({ type, value }: { type: keyof typeof gradeDescriptions; value: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const config = gradeDescriptions[type]

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-0.5"
      >
        <HelpCircle className="size-3.5 text-muted-foreground hover:text-primary transition-colors" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="fixed left-1/2 top-1/2 z-50 max-h-[80vh] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-2xl">
            {/* Header with Close Button */}
            <div className="mb-4 flex items-start justify-between border-b border-border/50 pb-4">
              <div className="flex-1">
                <p className="text-lg font-bold text-primary">{config.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{config.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="ml-4 shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* All Level Details */}
            <div className="space-y-4">
              {config.levels.map((lvl) => (
                <div
                  key={lvl.grade}
                  className={`rounded-lg border p-3.5 transition-colors ${
                    lvl.grade === value
                      ? "border-primary/50 bg-primary/5"
                      : "border-border/30 bg-secondary/20"
                  }`}
                >
                  <p className="text-base font-semibold leading-snug text-foreground">{lvl.title}</p>
                  {lvl.details.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5 pl-1">
                      {lvl.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="text-sm leading-relaxed text-muted-foreground">
                          <span className="text-primary font-semibold">&gt;</span> <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Tech Gap Comparison */}
            {type === "tech_gap" && config.comparison && (
              <div className="border-t border-border/50 pt-4 mt-4">
                <p className="mb-3 text-base font-semibold text-foreground">기술 격차 비교 방법:</p>
                <ul className="space-y-2 pl-1">
                  {config.comparison.map((item, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export { GradeTooltip }
