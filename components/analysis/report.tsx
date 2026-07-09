import type { AnalysisResult } from "@/lib/data"

export function buildReportText(result: AnalysisResult, projectName?: string) {
  const line = "=".repeat(60)
  const sub = "-".repeat(60)
  const p: string[] = []

  p.push(line)
  p.push("AI 배타성 분석 보고서")
  p.push("회의록 기반 자동 분석 결과 · AI-generated")
  p.push(line)
  p.push("")
  p.push(`과제코드   : ${result.project_code}`)
  if (projectName) p.push(`과제명     : ${projectName}`)
  p.push(`과제유형   : ${result.project_type}`)
  p.push(`분석 소요  : ${result.elapsed_time.toFixed(1)}초`)
  p.push(`추출일시   : ${new Date().toLocaleString("ko-KR")}`)
  p.push("")

  p.push("[ 종합 판단 (전체 배타성 판단) ]")
  p.push(`- 전체 배타성 판단 : ${result.overall_conclusion.overall_exclusivity_assessment}`)
  p.push(`- 신뢰도           : ${result.overall_conclusion.confidence_level}`)
  p.push("")
  p.push(result.overall_conclusion.summary)
  p.push("")
  p.push("POINT")
  result.overall_conclusion.key_risks.forEach((f) => p.push(`  · ${f}`))
  p.push("")
  p.push("ACTION ITEM")
  result.overall_conclusion.recommendations.forEach((a, i) => p.push(`  [${i + 1}] ${a}`))
  p.push("")

  if (result.key_contributions) {
    p.push("[ 핵심 아이디어 ]")
    p.push("")
    p.push("< S사의 아이디어 >")
    result.key_contributions.company_s_ideas.forEach((idea, idx) => {
      p.push(`${idx + 1}. ${idea.idea}`)
      p.push(`   설명   : ${idea.description}`)
      p.push(`   영향   : ${idea.impact}`)
      p.push(`   중요도 : ${idea.significance}`)
      p.push(`   사실   : ${idea.supporting_facts.join(", ")}`)
      p.push(`   평가   : ${idea.reasoning}`)
      p.push("")
    })
    p.push("< 협력사의 아이디어 >")
    result.key_contributions.company_p_ideas.forEach((idea, idx) => {
      p.push(`${idx + 1}. ${idea.idea}`)
      p.push(`   설명   : ${idea.description}`)
      p.push(`   영향   : ${idea.impact}`)
      p.push(`   중요도 : ${idea.significance}`)
      p.push(`   사실   : ${idea.supporting_facts.join(", ")}`)
      p.push(`   평가   : ${idea.reasoning}`)
      p.push("")
    })
  }

  p.push("[ 청구 범위(그룹별 판단) ]")
  result.judgements.forEach((j) => {
    p.push(sub)
    p.push(`${j.group_id} ${j.topic}`)
    p.push(`이슈       : ${j.issue}`)
    p.push(`권리 귀속  : ${j.exclusivity_holder} | 신뢰도: ${j.confidence} | 등급: ${j.evaluation_grade.final_grade}`)
    p.push("")
    p.push(`판단 근거  : ${j.reasoning}`)
    p.push(`근거 사실  : ${j.supporting_facts.join(", ")}`)
    p.push(`반론 가능성: ${j.counter_arguments}`)
    p.push(`추천 대응  : ${j.recommendation}`)
    p.push("")
    p.push("  < 법적 근거 >")
    p.push(`  적용 법령 : ${j.legal_basis.applicable_laws.join(", ")}`)
    p.push(
      `  배타 조항 : ${j.legal_basis.contract_analysis.has_exclusivity_clause ? "있음" : "없음"} — ${j.legal_basis.contract_analysis.clause_summary}`,
    )
    p.push(`  유효 기간 : ${j.legal_basis.contract_analysis.validity_period}`)
    p.push(`  집행 리스크: ${j.legal_basis.contract_analysis.enforcement_risk}`)
    p.push(`  발명자    : ${j.legal_basis.inventorship_analysis}`)
    p.push(`  기여도    : ${j.legal_basis.contribution_analysis}`)
    p.push(`  Risk      : ${j.legal_basis.risk_factors.join(" / ")}`)
    p.push(`  법적 조치 : ${j.legal_basis.recommended_legal_actions.join(" / ")}`)
    p.push("")
    p.push("  < 평가 등급 >")
    p.push(
      `  최종 ${j.evaluation_grade.final_grade} | 기술효과 ${j.evaluation_grade.tech_effect_grade} | 경쟁사적용 ${j.evaluation_grade.competitor_applicability} | 기술격차 ${j.evaluation_grade.tech_gap}`,
    )
    p.push(`  등급 근거 : ${j.evaluation_grade.grade_reasoning}`)
    p.push("")
  })

  p.push(line)

  return p.join("\n")
}
