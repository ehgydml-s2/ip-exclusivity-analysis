"use client"

import { useState } from "react"
import { HelpCircle } from "lucide-react"

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
  const [showTooltip, setShowTooltip] = useState(false)
  const config = gradeDescriptions[type]
  const level = config.levels.find((l) => l.grade === value)

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="inline-flex items-center gap-0.5"
      >
        <HelpCircle className="size-3.5 text-muted-foreground hover:text-primary transition-colors" />
      </button>

      {showTooltip && (
        <div className="absolute bottom-full right-0 z-50 mb-3 w-96 rounded-xl border border-border bg-card p-4 shadow-xl">
          {/* Header */}
          <div className="mb-3 border-b border-border/50 pb-3">
            <p className="text-sm font-bold text-primary">{config.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{config.description}</p>
          </div>

          {/* Level Details */}
          {level && (
            <div className="mb-3 space-y-2.5">
              <p className="text-sm font-semibold leading-snug text-foreground">{level.title}</p>
              {level.details.length > 0 && (
                <ul className="space-y-1.5 pl-1">
                  {level.details.map((detail, idx) => (
                    <li key={idx} className="text-xs leading-relaxed text-muted-foreground">
                      <span className="text-primary">•</span> <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Tech Gap Comparison */}
          {type === "tech_gap" && config.comparison && (
            <div className="border-t border-border/50 pt-3">
              <p className="mb-2 text-xs font-semibold text-foreground">기술 격차 비교 방법:</p>
              <ul className="space-y-1 pl-1">
                {config.comparison.map((item, idx) => (
                  <li key={idx} className="text-xs leading-relaxed text-muted-foreground">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export { GradeTooltip }
