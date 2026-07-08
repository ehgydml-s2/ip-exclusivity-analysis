import hkmg25e1FactRecords from "./hkmg25e1-facts.json"
import hbm20c01FactRecords from "./hbm20c01-facts.json"
import hsp20e1FactRecords from "./hsp20e1-facts.json"
import scmp26e1FactRecords from "./scmp26e1-facts.json"

export type MeetingMinute = {
  id: string
  numId: number
  projectCode: string
  projectType: ProjectCategory
  title: string
  date: string
  companyS: string
  companyP: string
  articleUrl: string
  scenarioNote: string
}

export type ProjectCategory = "소재" | "설비"

export type Project = {
  code: string
  name: string
  category: ProjectCategory
}

export type Confidence = "High" | "Medium" | "Low"
export type ExclusivityHolder = "Company S" | "Company P" | "Joint" | "Unclear"
export type FinalGrade = "A1" | "A2" | "B" | "C/D" | "N/A"

export type FactSpeaker = "Company S" | "Company P" | "기타"
export type ClaimDirection = "S Favorable" | "P Favorable" | "Neutral"

export type Fact = {
  id: string
  text: string
  originalText: string
  speaker: FactSpeaker
  factType: string
  claimDirection: ClaimDirection
  reason: string
  meetingId?: string
  meetingTitle?: string
  meetingDate?: string
}

export type ContractAnalysis = {
  has_exclusivity_clause: boolean
  clause_summary: string
  validity_period: string
  enforcement_risk: string
}

export type LegalBasis = {
  applicable_laws: string[]
  contract_analysis: ContractAnalysis
  inventorship_analysis: string
  contribution_analysis: string
  risk_factors: string[]
  recommended_legal_actions: string[]
}

export type EvaluationGrade = {
  tech_effect_grade: string
  tech_effect_reasoning: string
  competitor_applicability: string
  competitor_reasoning: string
  tech_gap: string
  tech_gap_reasoning: string
  final_grade: FinalGrade
  grade_reasoning: string
}

export type Judgement = {
  group_id: string
  topic: string
  issue: string
  exclusivity_holder: ExclusivityHolder
  confidence: Confidence
  reasoning: string
  supporting_facts: string[]
  counter_arguments: string
  recommendation: string
  legal_basis: LegalBasis
  evaluation_grade: EvaluationGrade
}

export type OverallConclusion = {
  summary: string
  overall_exclusivity_assessment: string
  confidence_level: Confidence
  key_risks: string[]
  recommendations: string[]
}

export type ApplicableLaw = {
  law_id: string
  law_name: string
  relevance: string
  application_to_project: string
}

export type LegalPerspective = {
  applicable_laws: ApplicableLaw[]
  overall_legal_analysis: string
  risk_factors: string[]
  recommended_actions: string[]
}

export type AnalysisResult = {
  project_code: string
  project_type: string
  overall_conclusion: OverallConclusion
  judgements: Judgement[]
  legal_perspective: LegalPerspective
  elapsed_time: number
  facts: Fact[]
}

export const projects: Project[] = [
  { code: "HBM20C01", name: "HBM용 CMP 슬러리 국산화", category: "소재" },
  { code: "HBM426E1", name: "HBM4 베이스 다이 공동 개발", category: "설비" },
  { code: "HKMG25E1", name: "HKMG 공정용 첨단 세정 장비 개발", category: "설비" },
  { code: "HSP20E1", name: "3D NAND용 고선택비인산 수급 다변화", category: "소재" },
  { code: "HWM25E1", name: "하이브리드 웨이퍼 계측 장비 국산화", category: "설비" },
  { code: "SCMP26E1", name: "차세대 미세공정용 Cu CMP Slurry 공동 개발", category: "소재" },
  { code: "SNPR20E1", name: "차세대 EUV D램용 Sn 무기물 PR 개발", category: "소재" },
  { code: "WPC22E1", name: "웨이퍼 와피지 제어 장비 국산화", category: "설비" },
]

export const projectCodes = projects.map((p) => p.code)

export type ProjectTypeFilter = "전체" | ProjectCategory

export function findProjectsByType(type: ProjectTypeFilter): Project[] {
  if (type === "전체") return projects
  return projects.filter((p) => p.category === type)
}

export const meetingMinutes: MeetingMinute[] = [
  // ---- HBM20C01 (소재) ----
  {
    id: "HBM20C01_01",
    numId: 58,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "HBM용 CMP 슬러리 기술 소개 및 프로젝트 킥오프",
    date: "2020-02-14",
    companyS: `HBM TSV 공정에서 구리 층 제거를 위한 고순도 CMP 슬러리 기술 요구\n1000개 이상 TSV 구멍 가공 시 균일한 제거율(removal rate) 필요\n기존 A사 제품 대비 비용 절감 및 안정적 공급망 확보 목표\n국산화 성공 시 HBM 생산 경쟁력 강화 기대`,
    companyP: `A사 보유 CMP 슬러리 핵심 특허(구리 선택비 최적화 기술) 소개\nTSV 공정 특화 슬러리 조성에 대한 독점적 기술 노하우 보유 강조\n본 기술은 당사 R&D 10년 축적 결과로, 제3자 이전 및 역설계 방지 조항 필요\n초도 샘플 제공 일정 및 평가 협력 방안 제안`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },
  {
    id: "HBM20C01_02",
    numId: 59,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "CMP 슬러리 초도 샘플 평가 결과 검토",
    date: "2020-04-22",
    companyS: `제공받은 슬러리 샘플 A, B, C에 대한 TSV 공정 적용 결과 공유\n샘플 B의 구리 제거율이 목표치(분당 200nm) 대비 85% 수준으로 우수\n다만 표면 거칠기(Ra) 개선 필요 — 현재 1.2nm, 목표 0.8nm 이하\n차기 샘플에서 입자 크기 조정 및 pH 최적화 요청`,
    companyP: `샘플 B 기반 개선 버전 개발 착수 — 입자 분포 10% 축소 계획\npH 조정 시 당사 특허 범위 내에서만 가능하며, 조성 변경은 IP 재협의 필요\n개선 샘플 제공 시점: 6월 초 예정\n평가 데이터는 당사 기술 보호를 위해 외부 공유 금지 요청`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },
  {
    id: "HBM20C01_03",
    numId: 60,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "사양 조정 및 TSV 공정 최적화 논의",
    date: "2020-06-10",
    companyS: `개선 샘플 B-2의 표면 거칠기 0.75nm 달성 — 목표 충족\n구리 제거율 분당 195nm로 소폭 하락, 목표 범위 내 조정 필요\nHBM 12단 적층 공정에서의 안정성 추가 검증 요청\n양산 적용 전 최종 사양 확정을 위한 베이스라인 설정 제안`,
    companyP: `제거율 상향 조정 가능 — 분산제 농도 2% 증가로 200nm 달성 예상\n12단 적층 공정 대응을 위한 장기 안정성 데이터 제공 (3개월 에이징 테스트)\n베이스라인 확정 시 해당 조성에 대한 배타적 공급 계약 체결 희망\n경쟁사(S사 등) 공급 제한 조건 사전 협의 필요`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },
  {
    id: "HBM20C01_04",
    numId: 61,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "베이스라��� 확정 및 핵심 사양 최종 선택",
    date: "2020-08-18",
    companyS: `샘플 B-2 기반 최종 사양 확정 — 구리 제거율 200nm/분, Ra 0.75nm\nTSV 1000홀 이상 공정에서 균일도 ±5% 이내 검증 완료\n해당 사양을 HBM 양산 표준으로 채택, 월 공급량 500L 규모 예상\n배타적 공급 계약 협상 착수 제안 — 독점 기간 및 기술이전 범위 논의 필요`,
    companyP: `최종 사양 베이스라인 합의 — 당사 제품명 'SolvHBM-Cu200' 부여\n본 조성에 대한 특허는 당사 단독 소유이며, ���설계 방지 조항 필수\n독점 공급 기간 최소 3년 요청, 기간 내 경쟁사 공급 전면 금지\n기술이전은 제조 공정 일부만 가능, 핵심 배합비는 비공개 유지`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },
  {
    id: "HBM20C01_05",
    numId: 62,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "배타적 기술협력 1차 협상 — 독점 범위 및 특허 라이선스",
    date: "2020-09-25",
    companyS: `독점 공급 기간 3년 수용 가능, 단 경쟁사 제한 범위 명확화 필요\nS사 등 국내 경쟁사는 공급 금지, 해외 고객사는 별도 협의 제안\n기술이전 범위 확대 요청 — 긴급 상황 대응을 위한 백업 생산 능력 확보\n특허 라이선스 방식: 일시금 + 로열티 혼합 구조 제안`,
    companyP: `국내 경쟁사 공급 금지 동의, 해외는 지역별 검토 후 답변\n기술이전은 최종 혼합 공정만 가능 — 원료 배합비는 당사 기밀 유지\n특허 라이선스 조건: 일시금 50억 원 + 매출의 3% 로열티 제안\n계약 위반 시 즉시 공급 중단 및 손해배상 청구권 명시 요청`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },
  {
    id: "HBM20C01_06",
    numId: 63,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "양산 기준 수립 및 품질 관리 체계 확정",
    date: "2020-10-30",
    companyS: `양산 품질 기준 확정 — 구리 제거율 200±10nm/분, Ra 0.8nm 이하\n월 공급량 500L → 2021년 1000L 확대 계획, 공급 안정성 보증 요청\n불량률 0.1% 이하 유지, 분기별 품질 감사 실시\n긴급 공급 중단 시 72시간 내 대체 공급 방안 마련 의무화`,
    companyP: `품질 기준 준수 가능 — 자체 QC 시스템으로 Cpk 1.67 이상 유지\n공급 확대 대비 생산 설비 증설 착수 (2021년 Q1 완료 예정)\n긴급 공급 대응을 위한 안전재고 1개월분 상시 확보\n품질 감사 수용, 단 당사 핵심 공정은 외부 공개 불가 (NDA 체결)`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },
  {
    id: "HBM20C01_07",
    numId: 64,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "배타적 기술협력 2차 협상 — 계약 쟁점 해결",
    date: "2020-11-20",
    companyS: `특허 라이선스 조건 재협상 — 일시금 30억 원 + 로열티 2.5% 역제안\n경쟁사 제한 조항 완화 요청 — 미국/유럽 고객사는 제한 제외\n계약 해지 조건 명확화 — 품질 기준 미달 시 3개월 유예 후 해지 가능\n기술이전 범위 축소 수용 — 최종 혼합 공정만 이전, 원료 공급은 A사 독점`,
    companyP: `특허 라이선스 조건 합의 — 일시금 40억 원 + 로열티 2.7% 최종안\n미국/유럽 고객사 제한 제외 동의, 단 중국/대만은 사전 승인 필요\n품질 미달 시 개선 기간 3개월 부여 동의, 해지 시 위약금 면제\n최종 혼합 공정 이전 동의 — 2021년 Q2 기술 교육 프로그램 제공`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },
  {
    id: "HBM20C01_08",
    numId: 65,
    projectCode: "HBM20C01",
    projectType: "소재",
    title: "배타적 기술협력 계약(ETCA) 체결 및 향후 로드맵",
    date: "2020-12-15",
    companyS: `ETCA 최종 합의 — 독점 공급 3년, 일시금 40억 원 + 로열티 2.7%\n2021년 HBM 양산 본격화에 따른 공급 확대 일정 확정\n차세대 HBM(16단 이상) 대응 슬러리 공동 개발 제안\n본 계약을 통해 K반도체 소재 경쟁력 강화 및 공급망 안정성 확보 기대`,
    companyP: `ETCA 체결 완료 — 당사 CMP 슬러리 기술의 독점적 지위 확보\n2021년 공급 확대 준비 완료, 설비 증설 12월 말 완료 예정\n차세대 HBM 대응 기술 공동 개발 동의 — 2021년 Q1 킥오프 예정\n본 협력을 통해 A사의 글로벌 CMP 슬러리 시장 리더십 강화 목표`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 기술 제안형]\n목적: Company S의 독자적 기술 아이디어가 명확한 케이스\n- Company S: 분지형 부틸 리간드 구조 독자 제안 (회의록 02)\n- Company A: Company S 제안 기반 합성 및 구현\n→ 명확한 배타권 근거 존재\n→ Agent가 "배타권 귀속: Company S" 판정 기대`,
  },

  // ---- HBM426E1 (설비) ----
  {
    id: "HBM426E1_01",
    numId: 66,
    projectCode: "HBM426E1",
    projectType: "설비",
    title: "HBM4 베이스 다이 공동 개발 MOU 체결",
    date: "2024-04-20",
    companyS: `S사와 A사는 차세대 HBM4 베이스 다이 개선을 위한 전략적 협력 MOU 체결\n기존 HBM3E 대비 제한된 공간에 추가 기능 탑재 필요 - 베이스 다이 고도화 필수\nA사의 첨단 로직 공정 기술과 S사 HBM 메모리 기술 결합 목표\n2026년 HBM4 양산 목표, 경쟁사 대비 기술 우위 확보 전략`,
    companyP: `A사는 CoWoS 2.5D 패키징 기술 및 첨단 로직 공정으로 HBM 베이스 다이 개선 협력 의향\nS사의 HBM 메모리 기술과 당사 로직 공정 기술 시너지 기대\n공동 기술개발을 통한 차세대 AI 칩 시장 선도 목표\n초기 기술 로드맵 및 역할 분담 논의 시작`,
    articleUrl: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202404190012",
    scenarioNote: `[모호한 기여도 판단 시나리오 - 공동 기술 통합형]\n목적: 양사가 각자 핵심 기술을 보유하고 공동���� 통합 개발, 기여도 경계 불명확\n- Company S (SK하이닉스): HBM 메모리 기���, 일부 베이스 다이 구조 제안\n- Company A (TSMC): 로직 공정 기술, 일부 베이스 다이 기능 제��\n→ 양측이 모두 핵심 아이디어 제시, 최종 성과는 통합 결과\n→ 누가 더 큰 기여를 했는지 불명확\n→ Agent가 "기여도 ���명확, 공동 개발 성과, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "HBM426E1_02",
    numId: 67,
    projectCode: "HBM426E1",
    projectType: "설비",
    title: "HBM4 베이스 다�� ���선 방안 기술 논의",
    date: "2024-07-15",
    companyS: `베이스 다이에 전력 관리 기능 통합 제안 - HBM 스택 전체 효율성 향상\nTSV 배치 최적화 필요성 제기 - 당�� HBM 구조 경험 바탕으로 레이아웃 가이드 제공\nA사 로직 공정 적용 시 신호 무결성 확보 방안 공동 검토 필요\n양사 기술 통합 시 예상되는 인터페이스 이슈 사전 논의`,
    companyP: `베이스 다이에 신호 처리 로직 추가 제안 - GPU 연결 성능 향상\n당사 첨단 로직 공정(N3/N2급)으로 베이스 다이 집적도 향상 가능\nS사 제안 전력 관리 기능과 당사 신호 처리 로직 통합 검토 필요\nTSV 배치는 양사 공동으로 최적화 - 당사 CoWoS 경험도 반영`,
    articleUrl: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202404190012",
    scenarioNote: `[모호한 기여도 판단 시나리오 - 공동 기술 통합형]\n목적: 양사가 각자 핵심 기술을 보유하고 공동으로 통합 개발, 기여도 경계 불명확\n- Company S (SK하이닉스): HBM 메모리 기술, 일부 베이스 다이 구조 제안\n- Company A (TSMC): 로직 공정 기술, 일부 베이스 다이 기능 제안\n→ 양측이 모두 핵심 아이디어 제시, 최종 성과는 통합 결과\n→ 누가 더 큰 기여를 했는지 불명확\n→ Agent가 "기여도 불명확, 공동 개발 성과, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "HBM426E1_03",
    numId: 68,
    projectCode: "HBM426E1",
    projectType: "설비",
    title: "1차 프로토타입 베이스 다이 평가",
    date: "2024-10-22",
    companyS: `양사 공동 설계한 1차 프로토타입 베이스 다이 테스트 완료\n전력 효율 10% 향상 확인 - S사 제안 전력 관리 회로 기여로 판단\n신호 지연 15% 감소 확인 - A사 로직 공정 기여로 판단\n공동 개선 필요 TSV 밀도 증가 시 신호 간섭 발생 - 양사 공동 해결 방안 필요`,
    companyP: `1차 프로토타입 성능 개선 확인 - 양사 기술 통합 효과 검증\nS사 전력 관리 설계와 당사 로직 공정이 상호 보완적으로 작동\n공동 개선 제안 TSV 간섭 문제 해결을 위해 당사 패키징 기술과 S사 메모리 인터페이스 설계 동시 조정 필요\n2차 프로토타입에서 양사 아이디어 통합 적용 예정`,
    articleUrl: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202404190012",
    scenarioNote: `[모호한 기여도 판단 시나리오 - 공동 기술 통합형]\n목적: 양사가 각자 핵심 기술을 보유하고 공동으로 통합 개발, 기여도 경계 불명확\n- Company S (SK하이닉스): HBM 메모리 기술, 일부 베이스 다이 구조 제안\n- Company A (TSMC): 로직 공정 기술, 일부 베이스 다이 기능 제안\n→ 양측이 모두 핵심 아이디어 제시, 최종 성과는 통합 결과\n→ 누가 더 큰 기여를 했는지 불명확\n→ Agent가 "기여도 불명확, 공동 개발 성과, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "HBM426E1_04",
    numId: 69,
    projectCode: "HBM426E1",
    projectType: "설비",
    title: "개선 베이스 다이 통합 검증",
    date: "2025-02-18",
    companyS: `양사 공동 개선 TSV 간섭 문제 해결 - S사의 인터페이스 재설계 + A사의 차폐 구조 적용\n전력 효율 추가 5% 향상 - 양사 공동 최적화 결과\nHBM4 전체 스택 통합 테스트 완료 - 목표 대역폭 1.5TB/s 달성\nS사 추가 제안 베이스 다이에 온도 센서 통합 검토 - 열 관리 강화`,
    companyP: `TSV 간섭 해결은 양사 기술 통합의 성과 - 단독으로는 해결 불가능했던 이슈\nA사 추가 제안 베이스 다이에 오류 정정 로직 추가 검토 - 신뢰성 향상\nS사 제안 온도 센서와 당사 제안 오류 정정 로직 통합 가능성 검토\n최종 사양 확정 전 양사 아이디어 통합 방안 수립 필요`,
    articleUrl: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202404190012",
    scenarioNote: `[모호한 기여도 판단 시나리오 - 공동 기술 통합형]\n목적: 양사가 각자 핵심 기술을 보유하고 공동으로 통합 개발, 기여도 경계 불명확\n- Company S (SK하이닉스): HBM 메모리 기술, 일부 베이스 다이 구조 제안\n- Company A (TSMC): 로직 공정 기술, 일부 베이스 다이 기능 제안\n→ 양측이 모두 핵심 아이디어 제시, 최종 성과는 통합 결과\n→ 누가 더 큰 기여를 했는지 불명확\n→ Agent가 "기여도 불명확, 공동 개발 성과, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "HBM426E1_05",
    numId: 70,
    projectCode: "HBM426E1",
    projectType: "설비",
    title: "HBM4 베이스 다이 양산 준비 검증",
    date: "2025-06-25",
    companyS: `최종 베이스 다이 설계 완료 - 전력 관리, 신호 처리, 온도 센서, 오류 정정 모두 통합\n공동 성과 인정 최종 설계는 양사 기술 아이디어가 복합적으로 결합된 결과\nS사는 HBM 스택 통합 및 메모리 인터페이스 담당\nA사는 로직 공정 및 CoWoS 패키징 담당`,
    companyP: `양산 준비 검증 완료 - 목표 성능 및 수율 기준 충족\n공동 성과 인정 베이스 다이 핵심 기능들은 양사가 각각 제안하고 공동 통합한 결과\nA사는 로직 다이 제조 및 패키징 담당\nS사는 메모리 스택 제조 및 최종 조립 담당`,
    articleUrl: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202404190012",
    scenarioNote: `[모호한 기여도 판단 시나리오 - 공동 기술 통합형]\n목적: 양사가 각자 핵심 기술을 보유하고 공동으로 통합 개발, 기여도 경계 불명확\n- Company S (SK하이닉스): HBM 메모리 기술, 일부 베이스 다이 구조 제안\n- Company A (TSMC): 로직 공정 기술, 일부 베이스 다이 기능 제안\n→ 양측이 모두 핵심 아이디어 제시, 최종 성과는 통합 결과\n→ 누가 더 큰 기여를 했는지 불명확\n→ Agent가 "기여도 불명확, 공동 개발 성과, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "HBM426E1_06",
    numId: 71,
    projectCode: "HBM426E1",
    projectType: "설비",
    title: "HBM4 최종 사양 확정 및 권리 관계 논의",
    date: "2025-11-20",
    companyS: `HBM4 베이스 다이 최종 사양 확정 - 양사 공동 개발 성과물로 정의\n권리 관계 협의 베이스 다이 기술은 양사 공동 소유, 개별 핵심 기술은 각사 소유 유지\nS사: HBM 메모리 스택 및 인터페이스 설계 독자 소유\n제3자 공급 시 양사 사전 협의 필요 - 공동 개발 성과물 보호`,
    companyP: `최종 사양 확정 동의 - 베이스 다이는 양사 공동 개발 성과물\n권리 관계 협의 A사: 로직 공정 기술 및 CoWoS 패키징 독자 소유\n베이스 다이 통합 기술은 양사 공동 소유 - 단독 사용 불가\n제3자 공급 시 양사 협의 조항 수용 - 공동 개발 성과 보호`,
    articleUrl: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202404190012",
    scenarioNote: `[모호한 기여도 판단 시나리오 - 공동 기술 통합형]\n목적: 양사가 각자 핵심 기술을 보유하고 공동으로 통합 개발, 기여도 경계 불명확\n- Company S (SK하이닉스): HBM 메모리 기술, 일부 베이스 다이 구조 제안\n- Company A (TSMC): 로직 공정 기술, 일부 베이스 다이 기능 제안\n→ 양측이 모두 핵심 아이디어 제시, 최종 성과는 통합 결과\n→ 누가 더 큰 기여를 했는지 불명확\n→ Agent가 "기여도 불명확, 공동 개발 성과, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "HBM426E1_07",
    numId: 72,
    projectCode: "HBM426E1",
    projectType: "설비",
    title: "HBM4 양산 개시 및 협력 성과 공유",
    date: "2026-03-15",
    companyS: `HBM4 양산 공식 개시 - S사+A사 공동 개발 베이스 다이 적용\n경쟁사 대비 전력 효율 20%, 대역폭 30% 향상 달성\n공동 성과 평가 베이스 다이 핵심 기능은 양사가 각각 기여���고 통합한 결과로 평가\n향후 차세대 제품(HBM5) 공동 개발 지속 협력 합의`,
    companyP: `HBM4 양산 성공 - A사+S사 전략적 협력의 성과\nAI 칩 시장에서 경쟁 우위 확보 - Nvidia 등 주요 고객사 긍정 평가\n공동 성과 평가 베이스 다이 기술은 양사 기술 시너지의 결과\n장기 파트너십 강화 - 차세대 제품 공동 개발 지속`,
    articleUrl: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202404190012",
    scenarioNote: `[모호한 기여도 판단 시나리오 - 공동 기술 통합형]\n목적: 양사가 각자 핵심 기술을 보유하고 공동으로 통합 개발, 기여도 경계 불명확\n- Company S (SK하이닉스): HBM 메모리 기술, 일부 베이스 다이 구조 제안\n- Company A (TSMC): 로직 공정 기술, 일부 베이스 다이 기능 제안\n→ 양측이 모두 핵심 아이디어 제시, 최종 성과는 통합 결과\n→ 누가 더 큰 기여를 했는지 불명확\n→ Agent가 "기여도 불명확, 공동 개발 성과, 추가 증거 필요" 판정 기대`,
  },

  // ---- HKMG25E1 (설비) ----
  {
    id: "HKMG25E1_01",
    numId: 73,
    projectCode: "HKMG25E1",
    projectType: "설비",
    title: "HKMG 공정용 첨단 세정 장비 공동 개발 킥오프",
    date: "2024-02-15",
    companyS: `S사 차세대 HKMG(High-K Metal Gate) 공정 도입에 따른 전용 세정 장비 개발 필요\n당사가 독자 개발한 세정 레시피 및 HKMG 공정 핵심 기술을 기반으로 협력업체와 장비 개발 협력\n세정 레시피는 당사 영업비밀로 엄격히 관리되며, 협력업체는 장비 구현만 담당\n반도체 성능과 직결되는 핵심 공정 정보이므로 비밀 유지 계약 필수`,
    companyP: `S사의 HKMG 공정용 세정 장비 개발 제안에 협력 의향 확인\n당사는 S사가 제공하는 세정 레시피 및 공정 사양에 따라 장비 설계 및 제조 담당\nS사 핵심 기술�� 대한 비밀 유지 및 제3자 공유 금지 서약\n장비 도면 및 사양 정보도 S사 승인 없이 외부 공개 불가`,
    articleUrl: "https://www.daeryunlaw.com/trend/10746",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 레시피 제공형]\n목적: Company S가 핵심 레시피/공정 기술을 독자 개발하여 제공, Company A는 구현만 담당\n- Company S (SK하이닉스): 세정 레시피 독자 개발, HKMG 공정 기술 보유, 장비 사양 정의\n- Company A (협력업체): Company S 제공 사양대로 세정장비 설계 및 제조\n→ 핵심 기술은 Company S 소유, Company A는 제조 역할만\n→ 대법원 판례에서도 영업비밀로 인정 (비공지성, 경제적 가치, 비밀관리성 충족)\n→ Agent가 "배타권: Company S (세정 레시피 및 HKMG 공정 기술)" 판정 기대`,
  },
  {
    id: "HKMG25E1_02",
    numId: 74,
    projectCode: "HKMG25E1",
    projectType: "설비",
    title: "SK하이닉스 세정 레시피 제공 및 장비 사양 정의",
    date: "2024-04-20",
    companyS: `S사 핵심 기술 제공\n당사 독자 개발 세정 레시피 제공 - HKMG 공정 최적화된 화학약품 조성 및 공정 조건\n세정 온도, 압력, 시간, 약품 농도 등 핵심 파라미터 전달 (당사 영업비밀)\n협력업체는 당사 레시피에 정확히 부합하도록 장비 설계 필수\n본 레시피는 당사 10년 연구 개발 결과로, 외부 공개 시 경쟁사 기술 격차 해소에 직결`,
    companyP: `S사 제공 세정 레시피 확인 - 당사는 해당 레시피 구현을 위한 장비 설계\n제공받은 공정 파라미터는 당사 내부에서도 열람 제한 인원만 접근 가능하도록 관리\nS사 레시피 기반 장비 사양서 초안 작성 예정\n장비 설계 과정에서 S사 승인 없이 임의 변경 불가`,
    articleUrl: "https://www.daeryunlaw.com/trend/10746",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 레시피 제공형]\n목적: Company S가 핵심 레시피/공정 기술을 독자 개발하여 제공, Company A는 구현만 담당\n- Company S (SK하이닉스): 세정 레시피 독자 개발, HKMG 공정 기술 보유, 장비 사양 정의\n- Company A (협력업체): Company S 제공 사양대로 세정장비 설계 및 제조\n→ 핵심 기술은 Company S 소유, Company A는 제조 역할만\n→ 대법원 판례에서도 영업비밀로 인정 (비공지성, 경제적 가치, 비밀관리성 충족)\n→ Agent가 "배타권: Company S (세정 레시피 및 HKMG 공정 기술)" 판정 기대`,
  },
  {
    id: "HKMG25E1_03",
    numId: 75,
    projectCode: "HKMG25E1",
    projectType: "설비",
    title: "장비 설계 검토 및 SK하이닉스 사양 적합성 확인",
    date: "2024-07-18",
    companyS: `협력업체가 제출한 장비 설계안 검토 - 당사 세정 레시피 구현 가능성 확인\n세정 챔버 온도 제어 정밀도 ±0.5°C 이내 필수 - 당사 레시피 핵심 요구사항\n약품 주입 시스템도 당사 지정 농도 오차 범위(±2%) 충족 필요\n장비 도면은 당사 레시피 반영 산물이므로 당사 승인 없이 외부 공개 금지`,
    companyP: `S사 검토 의견 반영하여 온도 제어 시스템 정밀도 향상\n약품 주입 시스템 설계 개선 - S사 요구 오차 범위 충족\n장비 도면은 S사 세정 레시피 구현을 위한 것으로, 당사도 비밀로 관리\n프로토타입 제작 착수 - 2024년 10월 S사 평가 라인 투입 목표`,
    articleUrl: "https://www.daeryunlaw.com/trend/10746",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 레시피 제공형]\n목적: Company S가 핵심 레시피/공정 기술을 독자 개발하여 제공, Company A는 구현만 담당\n- Company S (SK하이닉스): 세정 레시피 독자 개발, HKMG 공정 기술 보유, 장비 사양 정의\n- Company A (협력업체): Company S 제공 사양대로 세정장비 설계 및 제조\n→ 핵심 기술은 Company S 소유, Company A는 제조 역할만\n→ 대법원 판례에서도 영업비밀로 인정 (비공지성, 경제적 가치, 비밀관리성 충족)\n→ Agent가 "배타권: Company S (세정 레시피 및 HKMG 공정 기술)" 판정 기대`,
  },
  {
    id: "HKMG25E1_04",
    numId: 76,
    projectCode: "HKMG25E1",
    projectType: "설비",
    title: "프로토타입 장비 평가 및 SK하이닉스 레시피 검증",
    date: "2024-10-25",
    companyS: `협력업체 프로토타입 장비로 당사 세정 레시피 적용 테스트 완료\nHKMG 공정 세정 효율 95% 달성 - 당사 독자 레시피의 우수성 검증\n다만 일부 웨이퍼에서 잔류물 발생 - 장비 린스 공정 개선 필요\n당사 레시피는 그대로 유지, 장비 측면 개선으로 해결 요청`,
    companyP: `S사 레시피 기반 세정 성능 우수함을 확인\n잔류물 문제는 당사 장비 린스 공정 미흡으로 판단 - 린스 노즐 배치 개선 예정\nS사 레시피 자체는 변경 없이, 장비만 개선하여 2025년 1월 재평가\n장비 개선 과정에서도 S사 레시피 보호 최우선`,
    articleUrl: "https://www.daeryunlaw.com/trend/10746",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 레시피 제공형]\n목적: Company S가 핵심 레시피/공정 기술을 독자 개발하여 제���, Company A는 구현만 담당\n- Company S (SK하이닉스): 세정 레시피 독자 개발, HKMG 공정 기술 보유, 장비 사양 정의\n- Company A (협력업체): Company S 제��� 사양대로 세정장비 설계 및 제조\n→ 핵심 기술은 Company S 소유, Company A는 제조 역할만\n→ 대법원 판례에서도 영업비밀로 인정 (비공지성, 경제적 ���치, ���밀관리성 충족)\n→ Agent가 "배타권: Company S (세정 레시피 및 HKMG 공정 기술)" 판정 기대`,
  },
  {
    id: "HKMG25E1_05",
    numId: 77,
    projectCode: "HKMG25E1",
    projectType: "설비",
    title: "개선 장비 검증 및 양산 레시피 최종 확정",
    date: "2025-01-22",
    companyS: `개선 장비로 당사 세정 레시피 재검증 - 잔류물 문제 완전 해결\nHKMG 공정 세정 효율 98% 달성 - 양산 기준 충족\n핵심 기술 확정 본 세정 레시피 및 HKMG 공정 기술은 당사 영업비밀로 최종 확정\n협력업체는 당사 레시피 기반 장비 제조만 담당, 레시피 자체는 당사 독점 소유`,
    companyP: `S사 세정 레시피 기반 장비 성능 검증 완료\n당사 장비는 S사 레시피 구현 전용이며, 타 용도 전용 불가\n양산 장비 제작 준비 완료 - 2025년 상반기 양산 공급 목표\nS사 레시피 및 장비 도면 비밀 관리 체계 재확인`,
    articleUrl: "https://www.daeryunlaw.com/trend/10746",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 레시피 제공형]\n목적: Company S가 핵심 레시피/공정 기술을 독자 개발하여 제공, Company A는 구현만 담당\n- Company S (SK하이닉스): 세정 레시피 독자 개발, HKMG 공정 기술 보유, 장비 사양 정의\n- Company A (협력업체): Company S 제공 사양대로 세정장비 설계 및 제조\n→ 핵심 기술은 Company S 소유, Company A는 제조 역할만\n→ 대법원 판례에서도 영업비밀로 인정 (비공지성, 경제적 가치, 비밀관리성 충족)\n→ Agent가 "배타권: Company S (세정 레시피 및 HKMG 공정 기술)" 판정 기대`,
  },
  {
    id: "HKMG25E1_06",
    numId: 78,
    projectCode: "HKMG25E1",
    projectType: "설비",
    title: "양산 장비 준비 완료 및 비밀 관리 체계 점검",
    date: "2025-04-18",
    companyS: `협력업체 양산 장비 최종 승인 - 당사 세정 레시피 완벽 구현 확인\n비밀 관리 강화 본 프로젝트 관련 모든 자료(레시피, 장비 도면, 공정 조건)는 당사 영업비밀\n협력업체는 당사 서면 동의 없이 제3자(특히 해외 경쟁사)에게 정보 제공 절대 금지\n위반 시 법적 책임 및 계약 해지 조항 재확인`,
    companyP: `양산 장비 준비 완료 - S사 레시피 전용 장비로 생산 라인 구축\n비밀 관리 서약 당사 임직원 전원 S사 기술 비밀 유지 서약서 작성\nS사 레시피 및 장비 정보는 당사 내부에서도 접근 제한 인원만 열람 가능\n제3자 공유 절대 금지 - 특히 해외 경쟁사 제안 시 즉시 S사에 보고`,
    articleUrl: "https://www.daeryunlaw.com/trend/10746",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 레시피 제공형]\n목적: Company S가 핵심 레시피/공정 기술을 독자 개발하여 제공, Company A는 구현만 담당\n- Company S (SK하이닉스): 세정 레시피 독자 개발, HKMG 공정 기술 보유, 장비 사양 정의\n- Company A (협력업체): Company S 제공 사양대로 세정장비 설계 및 제조\n→ 핵심 기술은 Company S 소유, Company A는 제조 역할만\n→ 대법원 판례에서도 영업비밀로 인정 (비공지성, 경제적 가치, 비밀관리성 충족)\n→ Agent가 "배타권: Company S (세정 레시피 및 HKMG 공정 기술)" 판정 기대`,
  },
  {
    id: "HKMG25E1_07",
    numId: 79,
    projectCode: "HKMG25E1",
    projectType: "설비",
    title: "HKMG 세정 장비 양산 공급 개시 및 영업비밀 관리 최종 합의",
    date: "2025-06-10",
    companyS: `협력업체 세정 장비 양산 공급 공식 개시 - 당사 HKMG 공정 적용\n영업비밀 최종 확정 세정 레시피, HKMG 공정 기술, 장비 사양은 당사 영업비밀로 법적 보호 대상\n본 기술들은 비공지성, 경제적 가치, 비밀관리성 모두 충족 - 영업비밀 3요건 만족\n협력업체는 당사 기술 보호 의무 지속 - 위반 시 민형사상 책임 추궁`,
    companyP: `S사향 세정 장비 양산 공급 시작 - 당사 최대 고객사\n영업비밀 관리 최종 서약 S사 제공 레시피 및 공정 기술은 당사도 영업비밀로 엄격 관리\n당사 장비는 S사 전용이며, 유사 기술을 타사에 제공하거나 응용 개발 금지\nS사와 장기 파트너십 유지 - 차세대 공정 장비도 지속 협력 희망`,
    articleUrl: "https://www.daeryunlaw.com/trend/10746",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 레시피 제공형]\n목적: Company S가 핵심 레시피/공정 기술을 독자 개발하여 제공, Company A는 구현만 담당\n- Company S (SK하이닉스): 세정 레시피 독자 개발, HKMG 공정 기술 보유, 장비 사양 정의\n- Company A (협력업체): Company S 제공 사양대로 세정장비 설계 및 제조\n→ 핵심 기술은 Company S 소유, Company A는 제조 역할만\n→ 대법원 판례에서도 영업비밀로 인정 (비공지성, 경제적 가치, 비밀관리성 충족)\n→ Agent가 "배타권: Company S (세정 레시피 및 HKMG 공정 기술)" 판정 기대`,
  },

  // ---- HSP20E1 (소재) ----
  {
    id: "HSP20E1_01",
    numId: 80,
    projectCode: "HSP20E1",
    projectType: "소재",
    title: "3D NAND용 고선택비인산 수급 다변화 및 협력 킥오프",
    date: "2020-02-20",
    companyS: `3D 낸드 적층 수 증가에 따른 고선택비인산 소재 수급 다변화 전략 추진 필요\n현재 A사 독점 공급 구조로 인한 리스크 존재 - 공급망 안정성 확보 목표\n엘티씨에이엠의 고선택비인산 개발 역량 확인 및 상용화 가능성 검토\nSK머티리얼즈의 투자 및 기술 지원을 통한 국내 소재 생태계 강화 기대`,
    companyP: `당사는 2004년 설립 이래 세정액, 식각액 등 습식 화학재료 전문 기업으로 성장\n2018년 10월 SK머티리얼즈와 전환사채 인수 및 사업협력 계약 체결 완료\n고선택비인산은 기술 장벽이 매우 높지만, SK그룹의 지원으로 상용화 가능성 확보\nS사의 평가 협력 요청에 적극 대응하며, 초도 샘플 제공 일정 제시`,
    articleUrl: "https://www.etnews.com/20200217000106",
    scenarioNote: `[수급 다변화 시나리오 - 기술 육성형]\n목적: Company S의 공급망 리스크 회피를 위한 협력사 육성 케이스\n- Company S: 기존 독점 공급(솔브레인) 구조 탈피 목표\n- Company A: 기술 보유, Company S 요구 ���양 충족\n→ Company A 독자 기술, Company S는 평가 및 피드백 역할\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HSP20E1_02",
    numId: 81,
    projectCode: "HSP20E1",
    projectType: "소재",
    title: "고선택비인산 초도 샘플 평가 결과 검토",
    date: "2020-04-15",
    companyS: `엘티씨에이엠 제공 초도 샘플 A, B, C에 대한 3D 낸드 식각 공정 적용 테스트 완료\n샘플 B의 선택비가 목표치 대비 75% 수준으로 가장 우수한 성능 확인\n다만 박막 제거 균일도(Uniformity)에서 편차 발생 - 웨이퍼 중심부와 가장자리 선택비 차이 10% 이상\n차기 샘플에서 인산 농도 및 첨가제 조성 최적화 요청`,
    companyP: `샘플 B를 기반으로 개선 버전 개발 착수 - 인산 농도 5% 증가 및 첨가제 비율 조정\n웨이퍼 균일도 개선을 위해 pH 안정화제 추가 배합 검토\n개선 샘플 제공 시점: 6월 초 ���정\n당사 보유 핵심 조성 기술은 SK머티리얼즈와의 계약에 따라 외부 공개 불가`,
    articleUrl: "https://www.etnews.com/20200217000106",
    scenarioNote: `[수급 다변화 시나리오 - 기술 육성형]\n목적: Company S의 공급망 리스크 회피를 위한 협력사 육성 케이스\n- Company S: 기존 독점 공급(솔브레인) 구조 탈피 목표\n- Company A: 기술 보유, Company S 요구 사양 충족\n→ Company A 독자 기술, Company S는 평가 및 피드백 역할\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HSP20E1_03",
    numId: 82,
    projectCode: "HSP20E1",
    projectType: "소재",
    title: "박막 선택비 개선 및 균일도 향상 방안",
    date: "2020-06-10",
    companyS: `개선 샘플 B-2의 선택비가 목표치 90% 달성 - 이전 대비 15% 향상\n웨이퍼 균일도도 중심부-가장자리 편차 5% 이내로 개선 확인\n96단 이상 고적층 3D 낸드 공정 적용 가능성 검증 필요\n최종 사양 확정을 위한 베이스라인 샘플 요청 - 선택비 95% 이상 목표`,
    companyP: `선택비 목표 95% 달성을 위해 인산 농도 추가 상향 조정 가능\n96단 고적층 공정 대응을 위한 장기 안정성(Shelf-life) 테스트 진행 중\n베이스라인 샘플은 8월 중 제공 예정\n본 조성 기술은 당사 독자 개발이며, S사 전용 공급 의향 있음`,
    articleUrl: "https://www.etnews.com/20200217000106",
    scenarioNote: `[수급 다변화 시나리오 - 기술 육성형]\n목적: Company S의 공급망 리스크 회피를 위한 협력사 육성 케이스\n- Company S: 기존 독점 공급(솔브레인) 구조 탈피 목표\n- Company A: 기술 보유, Company S 요구 사양 충족\n→ Company A 독자 기술, Company S는 평가 및 피드백 역할\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HSP20E1_04",
    numId: 83,
    projectCode: "HSP20E1",
    projectType: "소재",
    title: "양산 사양 확정 및 최종 조성 베이스라인 선정",
    date: "2020-08-20",
    companyS: `베이스라인 샘플 B-3의 선택비 97% 달성 - 양산 목표치 충족\n96단 3D 낸드 공정에서 박막 제거 균일도 ±3% 이내 검증 완료\n해당 사양을 엘티씨에이엠 고선택비인산 양산 표준으로 채택\n2021년 상반기 양산 적용 목표 - 월 공급량 및 납기 조건 협의 필요`,
    companyP: `최종 사양 베이스라인 합의 - 제품명 'LTCAM-HSP-97' 부여\n본 조성은 당사 독자 개발 기술이며, 역설계 방지 조항 계약 시 포함 요청\n2021년 양산 공급을 위한 생산 설비 증설 계획 수립 중\nS사 전용 공급 조건 협의 희망 - 경쟁사 공급 제한 논의 필요`,
    articleUrl: "https://www.etnews.com/20200217000106",
    scenarioNote: `[수급 다변화 시나리오 - 기술 육성형]\n목적: Company S의 공급망 리스크 회피를 위한 협력사 육성 케이스\n- Company S: 기존 독점 공급(솔브레인) 구조 탈피 목표\n- Company A: 기술 보유, Company S 요구 사양 충족\n→ Company A 독자 기술, Company S는 평가 및 피드백 역할\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HSP20E1_05",
    numId: 84,
    projectCode: "HSP20E1",
    projectType: "소재",
    title: "양산 공급 계약 1차 협상 - 물량 및 납기",
    date: "2020-09-25",
    companyS: `2021년 상반기 월 공급량 목표: 초기 100톤, 하반기 200톤 확대\n납기 안정성 확보를 위한 안전재고 1개월분 상시 유지 요청\n품질 기준: 선택비 95% 이상, 불순물 10ppm 이하\n경쟁사 공급 제한 조건은 별도 검토 후 2차 협상에서 논의`,
    companyP: `월 200톤 공급 체제 구축 가능 - 2021년 Q1 설비 증설 완료 예정\n안전재고 1개월분 확보 동의 - 긴급 수요 대응 체계 마련\n품질 기준 준수 가능 - 자체 QC 시스템으로 Cpk 1.67 이상 유지\n경쟁사 공급 제한 조건 수용 가능 - S사 전용 공급 우선 고려`,
    articleUrl: "https://www.etnews.com/20200217000106",
    scenarioNote: `[수급 다변화 시나리오 - 기술 육성형]\n목적: Company S의 공급망 리스크 회피를 위한 협력사 육성 케이스\n- Company S: 기존 독점 공급(솔브레인) 구조 탈피 목표\n- Company A: 기술 보유, Company S 요구 사양 충족\n→ Company A 독자 기술, Company S는 평가 및 피드백 역할\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HSP20E1_06",
    numId: 85,
    projectCode: "HSP20E1",
    projectType: "소재",
    title: "대량 생산 품질 검증 및 양산 준비 완료 확인",
    date: "2020-11-10",
    companyS: `파일럿 양산(월 50톤) 3개월 운영 결과 품질 안정성 확인\n선택비 평균 97.2%, 표준편차 0.8% - 양산 기준 충족\n납기 준수율 100% - 공급망 안정성 검증 완료\n2021년 본격 양산 공급 계약 체결 준비 완료`,
    companyP: `파일럿 양산 기간 동안 품질 이슈 Zero 달성\n생산 설비 증설 완료 - 월 300톤 생산 능력 확보\nS사 전용 공급 계약 체결 의향 재확인\nA사 독점 구도 변화에 따른 시장 선도 기대`,
    articleUrl: "https://www.etnews.com/20200217000106",
    scenarioNote: `[수급 다변화 시나리오 - 기술 육성형]\n목적: Company S의 공급망 리스크 회피를 위한 협력사 육성 케이스\n- Company S: 기존 독점 공급(솔브레인) 구조 탈피 목표\n- Company A: 기술 보유, Company S 요구 사양 충족\n→ Company A 독자 기술, Company S는 평가 및 피드백 역할\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HSP20E1_07",
    numId: 86,
    projectCode: "HSP20E1",
    projectType: "소재",
    title: "고선택비인산 양산 공급 계약 체결 및 2021년 로드맵",
    date: "2020-12-18",
    companyS: `엘티씨에이엠과의 고선택비인산 양산 공급 계약 최종 체결\n2021년 공급 물량: 상반기 월 100톤, 하반기 월 200톤\n수급 다변화 전략 성공 - A사 독점 구도 탈피\n국내 반도체 소재 생태계 강화 및 공급망 안정성 확보 달성`,
    companyP: `S사와의 양산 공급 계약 체결 완료 - 국내 고선택비인산 시장 진입 성공\n연간 2,000억원 규모 시장에서 점유율 확대 목표\nSK머티리얼즈의 투자 및 기술 지원에 감사하며, 장기 파트너십 강화\n차세대 3D 낸드(128단 이상) 대응 고선택비인산 공동 개발 제안`,
    articleUrl: "https://www.etnews.com/20200217000106",
    scenarioNote: `[수급 다변화 시나리오 - 기술 육성형]\n목적: Company S의 공급망 리스크 회피를 위한 협력사 육성 케이스\n- Company S: 기존 독점 공급(솔브레인) 구조 탈피 목표\n- Company A: 기술 보유, Company S 요구 사양 충족\n→ Company A 독자 기술, Company S는 평가 및 피드백 역할\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },

  // ---- HWM25E1 (설비) ----
  {
    id: "HWM25E1_01",
    numId: 87,
    projectCode: "HWM25E1",
    projectType: "설비",
    title: "기술혁신기업 7기 선정 및 하이브리드 웨이퍼 계측 장비 개발 킥오프",
    date: "2023-07-25",
    companyS: `S사 기술혁신기업 프로그램 7기 선정 - 코비스테크놀로지 하이브리드 웨이퍼 계측 장비 개발 과제 착수\n반도체 장비 국산화 전략의 일환으로 웨이퍼 계측 기술 자립화 필요\n최대 3년간 공동 기술개발, 무이자 자금 대출, 경영컨설팅 ��원 제공\n기술혁신기업 프로그램 통해 지난해 850억원 사회적 가치 창출 실적`,
    companyP: `코비스테크놀로지는 광학 및 전기식 계측 기술을 보유한 ���밀 계측 장비 전문 기업\n당사 독자 개발 하이브리드 계측 기술(광학+전기식 융합)로 국산화 목표 달성 자신\nS사 기술혁신기업 프로그램 선정에 ���사하며, 3��� 협력 기간 동안 최선\n초도 기술 사양 정의 회의 및 프로토타입 개발 일정 제시 예정`,
    articleUrl: "https://news.skhynix.co.kr/technology-innovation-7th-2/",
    scenarioNote: `[명확한 ���자 개발 시나리오 - 장비 국산화형]\n목적: Company A가 독자 기술로 장비 개발, Company S는 평가/피드백만 제공한 케이스\n- Company S: 사양 정의, 성능 평가, 피드백 제공 (���반적 수요자 역할)\n- Company A: 하이브리드 계측 기술 독자 개발 및 구현 (완전 독자 기술)\n→ Company A 독자 기술, Company S는 수요자 역할만\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HWM25E1_02",
    numId: 88,
    projectCode: "HWM25E1",
    projectType: "설비",
    title: "하이브리드 웨이퍼 계측 장비 기술 사양 정의",
    date: "2023-10-18",
    companyS: `계측 목표: 웨이퍼 두께 측정 정밀도 ±0.5μm, 표면 결함 검출 감도 0.1μm 이상\n광학식과 전기식 계측을 동시 수행하여 측정 시간 단축 필요 - 웨이퍼당 30초 이내\n300mm 웨이퍼 대응, 자동화 라인 연동 가능 구조 필수\n2024년 Q1 프로토타입 제작 완료 및 S사 평가 라인 투입 테스트 요청`,
    companyP: `측정 정밀도 및 검출 감도 목표 충족 가능 - 당사 보유 하이브리드 센서 기술 적용\n광학+전기식 동시 계측으로 웨이퍼당 25초 이내 처리 가능한 알고리즘 보유\n자동화 라인 연동 인터페이스는 당사 표준 프로토콜 적용 예정\n2024년 2월 프로토타입 제작 완료 및 S사 평가용 샘플 제공 예정`,
    articleUrl: "https://news.skhynix.co.kr/technology-innovation-7th-2/",
    scenarioNote: `[명확한 독자 개발 시나리오 - 장비 국산화형]\n목적: Company A가 독자 기술로 장비 개발, Company S는 평가/피드백만 제공한 케이스\n- Company S: 사양 정의, 성능 평가, 피드백 제공 (일반적 수요자 역할)\n- Company A: 하이브리드 계측 기술 독자 개발 및 구현 (완전 독자 기술)\n→ Company A 독자 기술, Company S는 수요자 역할만\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HWM25E1_03",
    numId: 89,
    projectCode: "HWM25E1",
    projectType: "설비",
    title: "프로토타입 장비 초도 성능 평가",
    date: "2024-02-20",
    companyS: `코비스테크놀로지 프로토타입 장비 S사 평가 라인 투입 테스트 완료\n두께 측정 정밀도: ±0.6μm - 목표 대비 80% 달성, 추가 개선 필요\n표면 결함 검출 감도: 0.12μm - 목표 근접, 광학 센서 해상도 향상 시 목표 달성 가능\n측정 시간 웨이퍼당 28초 - 목표 충족, 다만 자동화 라인 연동 시 통신 지연 현상 발견`,
    companyP: `프로토타입 평가 결과 피드백 감사 - 개선 방향 명확히 확인\n두께 측정 정밀도 향상을 위해 당사 독자 개발 광학 렌즈 시스템 업그레이드\n자동화 라인 통신 지연은 당사 프로토콜 최적화로 해결 가능\n개선 프로토타입 2024년 7월 제공 예정 - 목표 성능 100% 달성 목표`,
    articleUrl: "https://news.skhynix.co.kr/technology-innovation-7th-2/",
    scenarioNote: `[명확한 독자 개발 시나리오 - 장비 국산화형]\n목적: Company A가 독자 기술로 장비 개발, Company S는 평가/피드백만 제공한 케이스\n- Company S: 사양 정의, 성능 평가, 피드백 제공 (일반적 수요자 역할)\n- Company A: 하이브리드 계측 기술 독자 개발 및 구현 (완전 독자 기술)\n→ Company A 독자 기술, Company S는 수요자 역할만\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HWM25E1_04",
    numId: 90,
    projectCode: "HWM25E1",
    projectType: "설비",
    title: "개선 프로토타입 성능 검증 및 피드백 반영 확인",
    date: "2024-07-25",
    companyS: `개선 프로토타입 두께 측정 정밀�� ±0.48μm 달성 - 목표 초과 달성\n표면 결함 검출 감도 0.09μm - 목표 대비 110% 달성\n자동화 라인 통신 지연 ��상 해소 확인 - 안정적 연동 가능\n양산 라인 적합성 평가 단계 진입 가능 - 장기 안정성 및 재현성 검증 필요`,
    companyP: `개선 프로토타입 성능 목표 초과 달성 - 당사 독자 기술력으로 목표 달성\n광학 렌즈 시스템 업그레이드 및 통신 프로토콜 최적화 성공\n양산 라인 적합성 평가를 위한 장기 운영 테스트 준비 완료\n2025년 상반기 양산형 장비 제작 완료 목표`,
    articleUrl: "https://news.skhynix.co.kr/technology-innovation-7th-2/",
    scenarioNote: `[명확한 독자 개발 시나리오 - 장비 국산화형]\n목적: Company A가 독자 기술로 장비 개발, Company S는 평가/피드백만 제공한 케이스\n- Company S: 사양 정의, 성능 평가, 피드백 제공 (일반적 수요자 역할)\n- Company A: 하이브리드 계측 기술 독자 개발 및 구현 (완전 독자 기술)\n→ Company A 독자 기술, Company S는 수요자 역할만\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HWM25E1_05",
    numId: 91,
    projectCode: "HWM25E1",
    projectType: "설비",
    title: "양산 적합성 평가 및 대량 생산 환경 검증",
    date: "2025-01-22",
    companyS: `양산형 장비 6개월 장기 운영 테스트 완료 - 가동률 99%, 고장률 0.3% 이하\n측정 재현성 검증 완료 - 동일 웨이퍼 100회 반복 측정 시 표준편차 0.05μm 이내\n유지보수 편의성 우수 - 정기 점검 주기 1년, 부품 교체 시간 1시간 이내\n국산화 목표 달성 확인 - 해외 장비 대비 동등 이상 성능 및 30% 비용 절감`,
    companyP: `양산 적합성 평가 통과 - 코비스테크놀로지 하이브리드 계측 장비 국산화 성공\n당사 독자 개발 하이브리드 센서 기술 및 알고리즘으로 목표 달성\nS사 기술혁신기업 프로그램 3년 협력 기간 동안의 지원에 깊이 감사\n국산 장비 공급 계약 체결 준비 완료 - 2025년 하반기 본격 공급 개시`,
    articleUrl: "https://news.skhynix.co.kr/technology-innovation-7th-2/",
    scenarioNote: `[명확한 독자 개발 시나리오 - 장비 국산화형]\n목적: Company A가 독자 기술로 장비 개발, Company S는 평가/피드백만 제공한 케이스\n- Company S: 사양 정의, 성능 평가, 피드백 제공 (일반적 수요자 역할)\n- Company A: 하이브리드 계측 기술 독자 개발 및 구현 (완전 독자 기술)\n→ Company A 독자 기술, Company S는 수요자 역할만\n→ Agent가 "배타권 없음, 일반 공급 계약" 판정 기대`,
  },
  {
    id: "HWM25E1_06",
    numId: 92,
    projectCode: "HWM25E1",
    projectType: "설비",
    title: "하이브리드 웨이퍼 계측 장비 국산화 완료 및 공급 계약 체결",
    date: "2025-07-30",
    companyS: `코비스테크놀로지 하이브리드 웨이퍼 계측 장비 국산화 성공 선언 - 기술혁신기업 7기 성과 확정\n2025년 하반기부터 S사 이천·청주 라인에 본격 공급 개시\n반도체 장비 국산화 비중 확대 및 공급망 안정성 강화 달성\n기술혁신기업 프로그램 통해 1~4기 기업 매출 358% 증가 실적 - 지속 가능한 동반성장 모델 확립`,
    companyP: `S사와의 하이브리드 계측 장비 공급 계약 체결 완료\n당사 독자 개발 기술로 국산화 달성 - 기술혁신기업 프로그램의 자금/경영 지원이 큰 도움\n국내 반도체 장비 산업 경쟁력 강화에 기여하며, 해외 시장 진출 기반 마련\nS사와의 장기 협력 관계 지속 및 차세대 계측 기술 독자 개발 지속 추진`,
    articleUrl: "https://news.skhynix.co.kr/technology-innovation-7th-2/",
    scenarioNote: `[명확한 독자 개발 시나리오 - 장비 국산화형]\n목적: Company A가 독자 기술로 장비 개발, Company S는 평가/피드백만 제공한 케이스\n- Company S: 사양 정의, 성능 평가, 피드백 제공 (일반적 수요자 역할)\n- Company A: 하이브리드 계측 기술 독자 개발 및 구현 (완전 독자 기술)\n→ Company A 독자 기술, Company S는 수요자 역할만\n→ Agent가 "배타권 없음, 일반 공��� 계약" 판정 기대`,
  },

  // ---- SCMP26E1 (소재) ----
  {
    id: "SCMP26E1_01",
    numId: 93,
    projectCode: "SCMP26E1",
    projectType: "소재",
    title: "차세대 미세 공정용 Cu CMP Slurry 공동 개발 킥오프",
    date: "2025-05-12",
    companyS: `차세대 공정에서는 절연막 손상을 최소화하면서도 Cu 배선의 평탄화 속도를 극대화해야 함. A사의 Silica 원천 기술이 당사 라인 요구 규격에 부합하는지 1차 샘플(Ver 1.0) 입고 후 평가 진행 예정. 현 단계에서는 원천 기술 검증 위주로 진행함.`,
    companyP: `당사는 고순도 Silica 합성 및 입자 제어 기술에 대한 독자적인 원천 특허를 보유하고 있음. S사가 요구하는 고평탄화, 저결함(Low-Defect) 특성을 만족할 수 있도록 당사 기본 포뮬러 기반의 최적화 샘플을 2주 내로 공급하겠음.`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 첨가제 제안형]\n목적: Company S가 독자 개발한 첨가제로 원천 기술의 결함을 해결하여 배타권 확보\n- Company A: Silica 입자 원천 기술 보유 (하지만 성능 부족으로 양산 불가)\n- Company S: 독자 개발 첨가제(Additive-X) 제안 → 성능 결함 완전 해결\n→ Company S의 첨가제가 양산 성공의 핵심 기여\n→ Agent가 "배타권: Company S (Additive-X 적용 제품에 한정, 5년간 제3자 공급 금지)" 판정 기대`,
  },
  {
    id: "SCMP26E1_02",
    numId: 94,
    projectCode: "SCMP26E1",
    projectType: "소재",
    title: "1차 원천 샘플(Ver 1.0) 평가 결과 공유 및 문제점 분석",
    date: "2025-07-08",
    companyS: `현재의 A사 독자 포뮬러만으로는 양산 적용이 절대 불가함. 특히 Cu 막질 표면의 화학적 흡착력 부족으로 연마 효율이 떨어짐. A사의 원천 기술인 입자 자체의 한계라기보다는, 화학적 활성화를 유도하는 첨가제 배합의 문제로 판단됨. 당사 연구소에서 보유한 계면 제어 기술 기반의 솔루션 검토가 필요함.`,
    companyP: `당사 내부 실험실 데이터 대비 S사 실제 패턴 웨이퍼에서의 연마 속도가 급감한 것을 확인했음. 당사의 원천 Silica 입자 표면 개질 기술만으로는 미세 Cu 배선 공정 특유의 단차를 극복하기에 화학적 촉진력이 부족한 것으로 보임. 자체 촉진제 변경을 시도 중이나 단기간 내 개선이 어려운 상황임.`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 첨가제 제안형]\n목적: Company S가 독자 개발한 첨가제로 원천 기술의 결함을 해결하여 배타권 확보\n- Company A: Silica 입자 원천 기술 보유 (하지만 성능 부족으로 양산 불가)\n- Company S: 독자 개발 첨가제(Additive-X) 제안 → 성능 결함 완전 해결\n→ Company S의 첨가제가 양산 성공의 핵심 기여\n→ Agent가 "배타권: Company S (Additive-X 적용 제품에 한정, 5년간 제3자 공급 금지)" 판정 기대`,
  },
  {
    id: "SCMP26E1_03",
    numId: 95,
    projectCode: "SCMP26E1",
    projectType: "소재",
    title: "삼성전자 독자 첨가제(Additive-X) 기술 제안 및 적용 검토",
    date: "2025-09-15",
    companyS: `S사 독자 기술 제안\n당사가 제안하는 'Additive-X'는 Cu 표면에 미세 보호막을 형성함과 동시에 Silica 입자와의 정전기적 인력을 제어하여 스크래치를 방지하고 연마력을 증대시키는 당사 고유의 아이디어임. A사은 보안 유지를 위해 당사가 제공하는 마스터배치 형태로만 배합 테스트를 진행해야 하며, 구조식 및 메커니즘은 당사 보안 자산으로 관리함.`,
    companyP: `S사가 제안한 Additive-X를 당사 Silica 포뮬러에 투입할 경우, 기존에 발생하던 슬러리 겔화(Gellation) 현상 없이 안정한 분산 상태가 유지되는 것을 확인했음. S사의 아이디어를 반영하여 Additive-X가 포함된 2차 샘플(Ver 2.0)을 제작하여 양산성 평가용으로 공급하겠음.`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 첨가제 제안형]\n목적: Company S가 독자 개발한 첨가제로 원천 기술의 결함을 해결하여 배타권 확보\n- Company A: Silica 입자 원천 기술 보유 (하지만 성능 부족으로 양산 불가)\n- Company S: 독자 개발 첨가제(Additive-X) 제안 → 성능 결함 완전 해결\n→ Company S의 첨가제가 양산 성공의 핵심 기여\n→ Agent가 "배타권: Company S (Additive-X 적용 제품에 한정, 5년간 제3자 공급 금지)" 판정 기대`,
  },
  {
    id: "SCMP26E1_04",
    numId: 96,
    projectCode: "SCMP26E1",
    projectType: "소재",
    title: "2차 혼합 샘플(Ver 2.0) 평가 및 성능 개선 확인",
    date: "2025-11-04",
    companyS: `S사 첨가제로 결함 완전 해결\n당사의 Additive-X 도입을 통해 A사 Silica Slurry의 치명적 결함이 완전히 해결되었음이 증명됨. 이로써 'A사 Silica 입자 + S사 Additive-X' 조합이 차세대 공정의 표준 포뮬러 후보로 지정됨. 본 첨가제 기술 및 최적 배합비(0.15wt%)는 S사의 주도로 도출된 결과이므로, 향후 계약 시 당사의 독점적 권리가 보장되어야 함.`,
    companyP: `Additive-X 적용 후 연마 속도와 선택비(Selectivity)가 획기적으로 개선된 데이터에 동의함. 당사의 Silica 제조 원천 기술과 S사의 첨가제 기술이 시너지를 낸 결과임. 양산 신뢰성 확보를 위해 추가적인 대량 합성 및 장기 저장 안정성 테스트를 공동 진행할 것을 요청함.`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 첨가제 제안형]\n목적: Company S가 독자 개발한 첨가제로 원천 기술의 결함을 해결하여 배타권 확보\n- Company A: Silica 입자 원천 기술 보유 (하지만 성능 부족으로 양산 불가)\n- Company S: 독자 개발 첨가제(Additive-X) 제안 → 성능 결함 완전 해결\n→ Company S의 첨가제가 양산 성공의 핵심 기여\n→ Agent가 "배타권: Company S (Additive-X 적용 제품에 한정, 5년간 제3자 공급 금지)" 판정 기대`,
  },
  {
    id: "SCMP26E1_05",
    numId: 97,
    projectCode: "SCMP26E1",
    projectType: "소재",
    title: "공동 개발 기술의 권리 관계 설정 및 배타권 협의 완료",
    date: "2026-01-13",
    companyS: `배타권 계약 체결\n당사가 제공한 Additive-X의 메커니즘 및 'Silica + Additive-X'의 최적 조성비는 당사의 배타적 권리 자산임. 따라서 A사은 본 기술이 적용된 Slurry 완제품 또는 동일 메커니즘을 가진 제품을 S사의 사전 서면 동의 없이 글로벌 경쟁사를 포함한 제3자에게 판매, 양도, 또는 기술 이전할 수 없�� (배타권 ��정 기간: 양산 보급 후 최소 5년).`,
    companyP: `당사 고유의 Silica 입자 기술 자체를 타 제품에 활용하는 것은 제한이 없어야 한다는 전제하에, S사가 독자 개발하여 제공한 Additive-X 및 이를 통해 도출된 최종 혼합 Slurry 제품(Soul-S2)에 대한 S사 측의 배타적 사용 권리와 제3자 공급 금지 조항을 수용함. 상호 간 특허 유출 ��지를 위한 보안 서약서를 갱신하겠음.`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 첨가제 제안형]\n목적: Company S가 독자 개발한 첨��제로 원천 기술의 결함을 해결하여 배타권 확보\n- Company A: Silica 입자 원천 기술 보유 (하지만 성능 부족으로 양산 불가)\n- Company S: 독자 개발 첨가제(Additive-X) 제안 �� 성능 결함 완전 해결\n→ Company S의 첨가제가 양산 성공의 핵심 기여\n→ Agent가 "배타권: Company S (Additive-X 적용 제품에 한정, 5년간 제3자 공급 금지)" 판정 기대`,
  },
  {
    id: "SCMP26E1_06",
    numId: 98,
    projectCode: "SCMP26E1",
    projectType: "소재",
    title: "양산 보급화 테스트 및 Pilot 생산 라인 검증",
    date: "2026-03-04",
    companyS: `Pilot 롯트 평가 결과 품질 산포가 안정적이며 양산성 확보가 완료되었음을 확인하여 최종 기술 승인을 통보함. 본 제품은 기술 심의회를 거쳐 당사 내부 '배타권 자산 DB'에 정식 등록될 예정임. 구매팀 주도로 양산 공급 계약 및 배타권 위반 시 페널티 조항을 포함한 정식 계약 체결 절차를 진행하겠음.`,
    companyP: `당사 Pilot 설비에서도 S사의 Additive-X가 균일하게 혼합 및 분산되도록 양산 공정 설계를 완료했음. 당사는 계약서 상의 배타권 조항을 엄격히 준수할 것���며, 전용 생산 라인을 지정하여 S사향 공급 물량에 대한 보안 관리 및 품질 추적성을 확보하겠음.`,
    articleUrl: "https://www.sedaily.com/article/13774334",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 첨가제 제안형]\n목적: Company S가 독자 개발한 첨가제로 원천 기술의 결함을 해결하여 배타��� 확보\n- Company A: Silica 입자 원천 기술 보유 (하지만 성능 부족으로 양산 불가)\n- Company S: 독자 개발 첨가제(Additive-X) 제안 → 성능 결함 완전 해결\n→ Company S의 첨가제가 ���산 성공의 핵심 기여\n→ Agent가 "배타권: Company S (Additive-X 적용 제품에 한정, 5년간 제3자 공급 금지)" 판정 기대`,
  },

  // ---- SNPR20E1 (소재) ----
  {
    id: "SNPR20E1_01",
    numId: 99,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "차세대 EUV용 Sn 무기물 PR 도입 가능성 검토 및 협력 방향 수립",
    date: "2020-01-15",
    companyS: `차세대 고해상도 EUV 공정(D램 1a 노드 이하) 적용을 위해 인프리아의 주석 산화물(Sn Oxide) 기반 무기물 PR의 기본 물성 검토 필요\n유기물 PR 대비 높은 흡수율을 확인했으나, 현 스핀 코팅 공정에서의 균일도(Uniformity) 확보가 선결 과제\n인프리아의 Sn Oxide 클러스터 원천 기술은 우수하나, 현재의 분자량 분포로는 박막 도포 시 결함(Defect) 발생 우려\n코팅 균일도 개선을 위해 코어(Core)를 둘러싼 유기 리간드(Ligand)의 구조적 최적화가 필수적임`,
    companyP: `당사의 Sn 원천 기술 기반 1세대 샘플은 표준 리간드를 사용 중\n삼성의 공정 마진에 맞추기 위해 리간드 구조 변경의 필요성에 공감\n삼성 측이 제안하는 타깃 물성을 반영한 신규 합성 경로를 검토하겠음\n본 Sn 원천 기술은 인프리아 독점 특허이며 제3자 이전 불가`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_02",
    numId: 100,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "고해상도 구현을 위한 Sn 코어 주변 유기 리간드 후보군 선정",
    date: "2020-02-20",
    companyS: `삼성 독자 아이디어 제시\n베이킹 공정 중 리간드의 불규칙한 탈착을 막기 위해, 탄소 사슬이 짧은 직쇄형 구조 대신 부피가 큰 분지형(Branched) 부틸(Butyl) 계열 리간드 구조를 도입할 것을 제안\n이는 분자 간 응집을 막고 EUV 노광 시 해상력을 극대화할 수 있는 핵심 구조임\n분지형 리간드 구조가 적용된 신규 샘플 합성 요청\n본 구조는 삼성의 독자적 아이디어이므로 타사 공유 절대 불가`,
    companyP: `분지형 리간드는 당사에서 시도하지 않은 구조이나, 입체장해(Steric hindrance)를 이용해 클러스터의 크기를 일정하게 유지하는 데 효과적일 것으로 판단\nS사가 제안한 분지형 리간드가 적용된 Sn-Oxide 구조 유도체 샘플(코드명: IP-B20) 합성에 착수\n본 샘플은 삼성의 아이디어 기반으로 당사 원천 기술을 결합한 독점 제조물임\n철저한 보안 속에 삼성 내부 평가용으로만 공급할 것`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_03",
    numId: 101,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "삼성 제안 분지형 리간드 적용 Sn PR 1차 샘플(IP-B20) 입고 및 평가 세부 수립",
    date: "2020-04-02",
    companyS: `인프리아에서 S사의 분지형 리간드 제안을 반영하여 합성한 'IP-B20' 샘플이 S사 반도체연구소에 입고됨\n제안한 분지형 구조가 박막 균일도 향상에 기여했는지 우선 검증할 것\nA사-인프리아 측에 본 샘플의 합성 레시피와 리간드 치환율 데이터 공유를 요청\n본 구조는 삼성의 고유 제안에 기반하므로 타사 공유는 절대 불가함을 재확인`,
    companyP: `IP-B20 샘플은 삼성의 아이디어를 기반으로 당사의 Sn 원천 기술을 결합해 독점 제조한 것\n철저한 보안 속에 삼성 내부 평가용으로만 공급할 것이며, 타사 공급 계획 없음\n노광 후 잔막 특성에 대한 실측 데이터를 빠르게 피드백해 주기를 희망\n합성 레시피는 기밀 유지 조건 하에 공유 가능`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_04",
    numId: 102,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "IP-B20 샘플 평가 결과 공유 및 노광 감도(Sensitivity) 개선 방안 논의",
    date: "2020-05-18",
    companyS: `S사 내부 평가 결과, 분지형 리간드 도입으로 박막 균일도는 30% 이상 개선되었으나, EUV 노광 에너지가 기존 유기물 PR 대비 높게 요구되는 '감도 저하' 현상이 관찰됨\n분지형 리간드의 두께가 Sn 코어의 EUV 반응을 일부 차단하는 것으로 분석됨\n2차 구조 개선 제안 감도를 올리기 위해 리간드 말단에 전자 흡수성(Electron-withdrawing)이 강한 불소(F) 또는 할로겐 원소를 부분 치환하는 구조 변경 제안\n2차 제안 구조(코드명: IP-B21-F) 샘플 합성 요청`,
    companyP: `말단 할로겐 치환은 Sn-C ���합의 에너지를 약화시켜 EUV 광반응 속도를 획기적으로 올릴 수 있는 우수한 접근법\n삼성의 2차 제안 구조(코드명: IP-B21-F)에 대한 합성 가능성을 확인하고 6주 내로 샘플을 재공급하겠음\n본 구조 역시 삼성의 독자적 제안이므로 배타적 보호 필요함을 인정\nIP-B21-F는 삼성 전용 개발품으로 관리할 것`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_05",
    numId: 103,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "할로겐 말단 치환 분지형 Sn PR(IP-B21-F) 특성 평가",
    date: "2020-07-08",
    companyS: `삼성의 2차 제안인 말단 불소 치환 구조가 적용된 IP-B21-F 샘플의 노광 해상력 및 감도 특성을 1차 라인 테스트 결과를 바탕으로 검토\n평가 결과, 미세 패턴 구현 성���(LWR, Line Width Roughness)이 유기물 대비 40% 개선되었고 감도 문제도 해결됨을 확인\n다만, 현상(Develop) 공정 후 웨이퍼 가장자리에 미세 스컴(Scum, 잔류물)이 발생하는 현상 발견\n현상액과의 흡착력 조절 필요 — IP-B21-F에 최적화된 전용 현상액 개발 요청`,
    companyP: `할로겐 치환으로 인해 현상액(Organic Solvent)에 대한 용해도 특성이 변한 것으로 파악\nA사의 정밀 케미컬 배합 기술을 활용하여, 삼성의 IP-B21-F 구조에 최적화된 전용 유기 현상액(Developer) 조성물을 추가 개발하여 패키지로 제안\n전용 현상액도 IP-B21-F 구조에 특화되므로 삼성 배타적 공급 대상으로 관리\n개선 현상액 샘플은 2개월 내 공급 가능`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_06",
    numId: 104,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "Sn 무기물 PR(IP-B21-F)의 결함(Defect) 저감 및 패터닝 최적화",
    date: "2020-08-24",
    companyS: `전용 현상액 도입 후 스컴 문제는 해결되었으나, 대량 평가(Full-Map) 중 특정 패턴 붕괴(Pattern Collapse) 및 마이크로 브릿지 결함이 간헐적으로 발생\n린스(Rinse) 공정 시의 표면장력 불균형이 원인으로 보임\n린스액 변경과 더불어, 인프리아 측에 Sn Oxide 클러스터의 정제(Purification) 단계를 강화하여 유도체 내 미반응 단량체(Monomer) 함량을 0.1% 이하로 낮춰줄 것을 요구\n양산 규격 충족을 위한 고순도 정제 라인 구축 필요`,
    companyP: `당사의 기존 정제 공정으로는 0.1% 이하 관리가 까다롭지만, 삼성의 양산 규격을 맞추기 위해 칼럼 크로마토그래피 공정을 추가한 고순도 정제 라인을 신설하겠음\n개선된 고순도 샘플을 차월 내 공급 예정\n삼성 제안 구조(IP-B21-F)의 배타적 가치를 인정하여 정제 라인 투자 진행\n정제 공정 강화로 인한 비용 증가분은 별도 협의 필요`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_07",
    numId: 105,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "고순도 Sn 무기물 PR 파일럿 라인 투입 및 초기 수율 분석",
    date: "2020-09-28",
    companyS: `정제 공정이 개선된 최신 샘플을 S사 D램 파일럿 라인에 투입하여 12인치 웨이퍼 상에서의 두께 균일성, Defect 밀도, 노광 마진을 종합 평가\n고순도 정제 결과 마이크로 브릿지 결함이 90% 이상 제거됨을 확인\n이로써 삼성이 제안한 '분지형 할로겐 말단 치환 리간드 구조' 기반의 Sn PR이 파일럿 수율 기준을 만족함\n최종 양산화를 위한 안정성(Shelf-life) 검증 단계로 진입 가능`,
    companyP: `삼성과의 긴밀한 협력 덕분에 무기물 PR의 고질적 문제인 Defect를 해결할 수 있었음\nA사 본사 차원에서 양산 공급을 위한 원재료 공급망(SCM) 및 품질 보증(QA) 체계 구축을 시작\n삼성 제안 구조(IP-B21-F)의 배타적 권리를 인정하며, 양산 공급 계약 체결을 위한 법무 검토 착수\n2021년 양산 공급 체제 구축 목표`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_08",
    numId: 106,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "Sn 무기물 PR의 장기 보존 안정성 확보를 위한 케미컬 용기 및 첨가제 검토",
    date: "2020-11-05",
    companyS: `양산 적용을 위한 최종 관문인 3개월 이상 장기 보존 시 Sn 클러스터 간의 자발적 겔화(Gellation) 및 침전 현상을 억제하기 위한 방안 논의\n분지형 리간드가 안정성을 높이긴 하나, 금속 특성상 미량의 수분/산소 노출 시 겔화가 가속화됨\n인프리아는 재료 내에 미량의 항산화 안��제를 첨가하고, A사은 특수 차광 및 내벽 코팅이 적용된 전용 캔(Bottle)을 개발하여 공급해야 함\n보존 기간 6개�� 이상 보장 ��구`,
    companyP: `삼성의 지적대로 수분 차단이 핵심임\nA사이 보유한 특수 테프론 코팅 용기를 적용하고, 인프리아 연구소에서 겔화 억제제(Inhibitor) 최적 배합비를 도출\n최종 보존 기간을 6개월 이상으로 보장\n용기 및 안정제 개발 완료 시점: 2020년 12월 말 목표`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 ���타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_09",
    numId: 107,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "Sn 무기물 PR 양산 스펙 확정 및 공동 개발 기술에 대한 지식재산권(IP) 협의",
    date: "2020-12-03",
    companyS: `1년간의 개발을 통해 S사의 D램 양산 라인에 적용 가능한 Sn 무기물 PR(최종 버전)의 스펙을 확정하고, 본 양산화 기술의 핵심인 리간드 구조에 대한 배타적 사용 권리 범위를 논의\n인프리아의 Sn 코어 원천 특허는 존중하나, 양산 성공의 결정적 계기가 된 '분지형 할로겐 말단 치환 리간드 구조 및 이를 통한 Defect 제어 기술'은 S사의 독자적 아이디어와 피드백으로 완성됨\n따라서 이 특정 구조가 적용된 PR 제품에 대해 최소 5년간 경쟁사 공급 금지(��타적 사용권) 계약 체결을 요구\nIP-B21-F 구조체 및 유도체 일체는 삼성 배타권 DB에 등록되어 엄격히 관리될 ��정`,
    companyP: `S사의 기여도를 인정함\n전체 Sn PR 원천 기술이 아닌, S사가 제안하고 공동 최적화한 '특정 분지형 리간드 구조체(IP-B21-F 계열)'에 한해서는 S사에 독점적인 권리를 부여(타사 공급 제한)하는 방향으로 본사 법무팀과 계약서 초안을 검토하겠음\n5년간 경쟁사 공급 금지 조항 수용\n계약서는 2020년 12월 중 완료 목표`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },
  {
    id: "SNPR20E1_10",
    numId: 108,
    projectCode: "SNPR20E1",
    projectType: "소재",
    title: "차세대 EUV D램용 Sn 무기물 PR 개발 완료 및 배타적 공급 계약 체결 연계",
    date: "2020-12-22",
    companyS: `2020년 1월부터 시작된 A사-인프리아-S사의 Sn 무기물 PR 공동 개발 프로젝트의 최종 성공을 선언하고, 합의된 기술 스펙 및 지재권 조항을 바탕으로 정식 계약 문서 작성을 진행\n1년간 고생해 준 A사 및 인프리아 팀에 감사함\n본 회의를 끝으로 개발을 공식 완료하며, 합의된 '분지형 할로겐 말단 치환 구조'에 대한 배타권 조항이 포함된 구매 및 기술 협력 계약서 최종안을 발송\n본 기술은 당사 배타권 DB에 등록되어 엄격히 관리될 예정`,
    companyP: `무기물 PR의 세계 최초 양산 라인 적용이라는 기념비적인 성과를 거두었음\nS사가 발송할 계약서 내의 배타권 범위(IP-B21-F 구조체 및 유도체 일체)를 확인 후 서명하겠으며, 2021년부터 시작될 본격 양산 공급에 차질이 없도록 하겠음\nA사 본사 차원에서 S사와의 장기 파트너십 강화\n차세대 EUV 공정용 소재 공동 개발 지속 추진 의지`,
    articleUrl: "https://www.etnews.com/20251205000260",
    scenarioNote: `[명확한 배타권 근거 시나리오 - 구조 최적화형]\n목적: Company S의 단계적 기술 개선 제안이 핵심 성과로 이어진 케이스\n- Company S: 분지형 리간드 제안 (회의록 02) → 말단 할로겐 치환 제안 (회의록 04)\n- Company A: 원천 Sn 기술 보유, Company S 제안 구조 합성\n→ 양산 성공의 결정적 기여는 Company S의 구조 제안\n→ Agent가 "배타권 귀속: Company S, 특정 구조체(IP-B21-F)에 한정" 판정 기대`,
  },

  // ---- WPC22E1 (설비) ----
  {
    id: "WPC22E1_01",
    numId: 109,
    projectCode: "WPC22E1",
    projectType: "설비",
    title: "기술혁신기업 8기 선정 및 와피지 제어 장비 개발 킥오프",
    date: "2020-08-25",
    companyS: `S사 기술혁신기업 프로그램 8기 선정 - A사 웨이퍼 와피지 제어 장비 개발 과제 착수\n반도체 소재·부품·장비 국산화 전략의 일환으로 와피지 제어 기술 자립화 필요\n최대 3년간 공동 기술개발, 무이자 자금 대출, 경영컨설팅 지원 제공\n웨이퍼 휨 현상(Warpage) 제어를 통한 공정 품질 향상 및 해외 의존도 감소 목표`,
    companyP: `A사는 정밀 계측 및 제어 장비 전문 기업으로 웨이퍼 와피지 제어 기술 보유\nS사 기술혁신기업 프로그램 선정에 감사하며, 국산화 목표 달성에 최선\n3년 협력 기간 동안 S사의 기술 지원 및 자금 대출로 개발 가속화 기대\n초도 기술 사양 정의 회의 및 프로토타입 개발 일정 제시 예정`,
    articleUrl: "https://v.daum.net/v/6vJbh7TNCr",
    scenarioNote: `[모호한 기여도 판단 시나리오]\n목적: 계측 장비 국산화 과제에서 양측 기여도가 불명확한 경우 배타권 판별 테스트\n- Company S: 사양 정의 + 일부 구체적 기술 조언 (센서 배치, 알고리즘 로직 제안)\n- Company A: 기술 구현 + 독자 개발 부분 (예측 제어 로직)\n→ 공동 기여 vs 개별 기여 경계가 모호한 케이스\n→ Agent가 "기여도 불명확, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "WPC22E1_02",
    numId: 110,
    projectCode: "WPC22E1",
    projectType: "설비",
    title: "웨이퍼 와피지 제어 장비 기술 사양 정의",
    date: "2020-11-20",
    companyS: `와피지 제어 목표: 웨이퍼 휨 범위 ±50μm 이내 유지 (현 해외 장비 대비 동등 수준)\nS사 기술 조언 실시간 모니터링을 위해 열 센서를 웨이퍼 가장자리 3지점에 배치하는 방안 제안\n자동 보정 알고리즘�� PID 제어 방식 기반 권장 - S사 공정 노하우 반영\n300mm 웨이퍼 대응, 처리 속도 시간당 60매 이상`,
    companyP: `와피지 제어 목표 ±50μm 달성 가능 - 당사 보유 열제어 기술 적용\nS사 제안 수용 센서 3지점 배치 방안 적용, 당사 경험상 4지점 추가 검토\nPID 제어 기반 동의하나, 당사 독자 개발 적응형 알고리즘 병행 적용 제안\n2021년 3월 프로토타입 제작 완료 및 평가용 샘플 제공 예정`,
    articleUrl: "https://v.daum.net/v/6vJbh7TNCr",
    scenarioNote: `[모호한 기여도 판단 시나리오]\n목적: 계측 장비 국산화 과제에서 양측 기여도가 불명확한 경우 배타권 판별 테스트\n- Company S: 사양 정의 + 일부 구체적 기술 조언 (센서 배치, 알고리즘 로직 제안)\n- Company A: 기술 구현 + 독자 개발 부분 (예측 제어 로직)\n→ 공동 기여 vs 개별 기여 경계가 모호한 케이스\n→ Agent가 "기여도 불명확, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "WPC22E1_03",
    numId: 111,
    projectCode: "WPC22E1",
    projectType: "설비",
    title: "프로토타입 장비 초도 성능 평가",
    date: "2021-03-18",
    companyS: `A사 프로토타입 장비 S사 이천 라인 투입 테스트 완료\n와피지 제어 성능: ±55μm - 목표치 대비 90% 달성, 추가 개선 필요\nS사 개선 제안 온도 급변 시 제어 지연 해결을 위해 예측 제어(Predictive Control) 로직 도입 권장\nS사 유사 공정 경험 바탕으로 예측 모델 구조 조언 가능`,
    companyP: `프로토타입 평가 결과 피드백 감사 - 개선 방향 명확히 확인\nS사 제안 수용 예측 제어 로직 도입 동의, 다만 예측 모델은 당사 자체 개발 진행\nS사가 제안한 모델 구조를 참고하되, 당사 보유 머신러닝 기반 예측 알고리즘 적용\n개선 프로토타입 2021년 8월 제공 예정 - 목표 성능 100% 달성 목표`,
    articleUrl: "https://v.daum.net/v/6vJbh7TNCr",
    scenarioNote: `[모호한 기여도 판단 시나리오]\n목적: 계측 장비 국산화 과제에서 양측 기여도가 불명확한 경우 배타권 판별 테스트\n- Company S: 사양 정의 + 일부 구체적 기술 조언 (센서 배치, 알고리즘 로직 제안)\n- Company A: 기술 구현 + 독자 개발 부분 (예측 제어 로직)\n→ 공동 기여 vs 개별 기여 경계가 모호한 케이스\n→ Agent가 "기여도 불명확, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "WPC22E1_04",
    numId: 112,
    projectCode: "WPC22E1",
    projectType: "설비",
    title: "개선 프로토타입 성능 검증 및 피드백 반영 확인",
    date: "2021-08-25",
    companyS: `개선 프로토타입 와피지 제어 성능 ±48μm 달성 - 목표치 초과 달성\n공동 개발 성과 S사가 제안한 예측 제어 로직 구조와 A사 머신러닝 알고리즘이 결합되어 우수한 성능 도출\n처리 속도 시간당 62매 - 목표 대비 103% 달성\n양산 라인 적합성 평가 단계 진입 가능 - 장기 안정성 및 내구성 검증 필요`,
    companyP: `개선 프로토타입 성능 목표 초과 달성 - S사의 기술 조언에 감사\n기여도 언급 예측 제어 로직 아이디어는 S사 제안, 구현 알고리즘은 당사 독자 개발\n양산 라인 적합성 평가를 위한 장기 운영 테스트 준��� 완료\n2022년 상반기 양산형 장비 제작 완료 목표`,
    articleUrl: "https://v.daum.net/v/6vJbh7TNCr",
    scenarioNote: `[모호한 기여도 판단 시나리오]\n목적: 계측 장비 국산화 과제에서 양측 기여도가 불명확한 경우 배타권 판별 테스트\n- Company S: 사양 정의 + 일부 구체적 기술 조언 (센서 배치, 알고리즘 로직 제안)\n- Company A: 기술 구현 + 독자 개발 부분 (예측 제어 로직)\n→ 공동 기여 vs 개별 기여 경계가 모호한 케이스\n→ Agent가 "기여도 불명확, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "WPC22E1_05",
    numId: 113,
    projectCode: "WPC22E1",
    projectType: "설비",
    title: "양산 적합성 평가 및 대량 생산 환경 검증",
    date: "2022-02-22",
    companyS: `양산형 장비 6개월 장기 운영 테스트 완료 - 가동률 98%, 고장률 0.5% 이하\n와피지 제어 안정성 검증 완료 - 평균 ±45μm, 표준편차 2μm 이내\n유지보수 편의성 우수 - 정기 점검 주기 6개월, 부품 교체 시간 2시간 이내\n국산화 목표 달성 확인 - 해외 장비 대비 동등 이상 성능 및 20% 비용 절감`,
    companyP: `양산 적합성 평가 통과 - A사 와피지 제어 장비 국산화 성공\nS사 기술혁신기업 프로그램 3년 협력 기간 동안의 지원에 깊이 감사\n국산 장비 공급 계약 체결 준비 완료 - 2022년 하반기 본격 공급 개시\n향후 차세대 공정 대응 와피지 제어 기술 고도화 지속 협력 희망`,
    articleUrl: "https://v.daum.net/v/6vJbh7TNCr",
    scenarioNote: `[모호한 기여도 판단 시나리오]\n목적: 계측 장비 국산화 과제에서 양측 기여도가 불명확한 경우 배타권 판별 테스트\n- Company S: 사양 정의 + 일부 구체적 기술 조언 (센서 배치, 알고리즘 로직 제안)\n- Company A: 기술 구현 + 독자 개발 부분 (예측 제어 로직)\n→ 공동 기여 vs 개별 기여 경계가 모호한 케이스\n→ Agent가 "기여도 불명확, 추가 증거 필요" 판정 기대`,
  },
  {
    id: "WPC22E1_06",
    numId: 114,
    projectCode: "WPC22E1",
    projectType: "설비",
    title: "와피지 제어 장비 ���산화 완료 및 공급 계약 체결",
    date: "2022-08-30",
    companyS: `A사 웨이퍼 와피지 제어 장비 국산화 성공 선언 - 기술혁신기업 8기 성과 확정\n2022년 하반기부터 S사 이천·청주 라인에 본격 공급 개시\n반도체 장비 국산화 비중 확대 및 공급망 안정성 강화 달성\n14개 기술혁신기업과의 지속 협력 사례에 A사 추가 - 장기 파트너십 유지`,
    companyP: `S사와의 와피지 제어 장비 공급 계약 체결 완료\n기술혁신기업 프로그램을 통한 3년간의 공동 개발로 기술 자립 달성\n국내 반도체 장비 산업 경쟁력 강화에 기여하며, 해외 시장 진출 기반 마련\nS사와의 장기 협력 관계 지속 및 차세대 기술 공동 개발 지속 추진`,
    articleUrl: "https://v.daum.net/v/6vJbh7TNCr",
    scenarioNote: `[모호한 기여도 판단 시나리오]\n목적: 계측 장비 국산화 과제에서 양측 기여도가 불명확한 경우 배타권 판별 테스트\n- Company S: 사양 정의 + 일부 구체적 기술 조언 (센서 배치, 알고리즘 로직 제안)\n- Company A: 기술 구현 + 독자 개발 부분 (예측 제어 로직)\n→ 공동 기여 vs 개별 기여 경계가 모호한 케이스\n→ Agent가 "기여도 불명확, 추가 증거 필요" 판정 기대`,
  },
]

// 배타성 분석 결과는 신규 과제코드 기준으로 준비 중입니다.
type RawFactRecord = {
  MEETING_ID: string
  SPEAKER: string
  ORIGINAL_TEXT: string
  FACT: string
  FACT_ID: string
  FACT_TYPE: string
  CLAIM_DIRECTION: string
  MEETING_TITLE: string
  MEETING_DATE: string
  REASON: string
}

function normalizeSpeaker(raw: string): FactSpeaker {
  if (raw === "COMPANY_S") return "Company S"
  if (raw === "COMPANY_P") return "Company P"
  return "기타"
}

function normalizeClaim(raw: string): ClaimDirection {
  if (raw === "S Favorable") return "S Favorable"
  if (raw === "P Favorable") return "P Favorable"
  return "Neutral"
}

function buildHkmg25e1Facts(): Fact[] {
  return (hkmg25e1FactRecords as RawFactRecord[]).map((r) => ({
    id: r.FACT_ID,
    text: r.FACT,
    originalText: r.ORIGINAL_TEXT,
    speaker: normalizeSpeaker(r.SPEAKER),
    factType: r.FACT_TYPE,
    claimDirection: normalizeClaim(r.CLAIM_DIRECTION),
    reason: r.REASON,
    meetingId: r.MEETING_ID,
    meetingTitle: r.MEETING_TITLE,
    meetingDate: r.MEETING_DATE?.slice(0, 10),
  }))
}

function buildHbm20c01Facts(): Fact[] {
  return (hbm20c01FactRecords as RawFactRecord[]).map((r) => ({
    id: r.FACT_ID,
    text: r.FACT,
    originalText: r.ORIGINAL_TEXT,
    speaker: normalizeSpeaker(r.SPEAKER),
    factType: r.FACT_TYPE,
    claimDirection: normalizeClaim(r.CLAIM_DIRECTION),
    reason: r.REASON,
    meetingId: r.MEETING_ID,
    meetingTitle: r.MEETING_TITLE,
    meetingDate: r.MEETING_DATE?.slice(0, 10),
  }))
}

function buildHsp20e1Facts(): Fact[] {
  return (hsp20e1FactRecords as RawFactRecord[]).map((r) => ({
    id: r.FACT_ID,
    text: r.FACT,
    originalText: r.ORIGINAL_TEXT,
    speaker: normalizeSpeaker(r.SPEAKER),
    factType: r.FACT_TYPE,
    claimDirection: normalizeClaim(r.CLAIM_DIRECTION),
    reason: r.REASON,
    meetingId: r.MEETING_ID,
    meetingTitle: r.MEETING_TITLE,
    meetingDate: r.MEETING_DATE?.slice(0, 10),
  }))
}

function buildScmp26e1Facts(): Fact[] {
  return (scmp26e1FactRecords as RawFactRecord[]).map((r) => ({
    id: r.FACT_ID,
    text: r.FACT,
    originalText: r.ORIGINAL_TEXT,
    speaker: normalizeSpeaker(r.SPEAKER),
    factType: r.FACT_TYPE,
    claimDirection: normalizeClaim(r.CLAIM_DIRECTION),
    reason: r.REASON,
    meetingId: r.MEETING_ID,
    meetingTitle: r.MEETING_TITLE,
    meetingDate: r.MEETING_DATE?.slice(0, 10),
  }))
}

export const analysisResults: Record<string, AnalysisResult> = {
  HKMG25E1: {
    project_code: "HKMG25E1",
    project_type: "설비",
    overall_conclusion: {
      summary:
        "본 프로젝트에서 S사는 HKMG 공정용 세정 레시피 및 관련 공정 기술에 대한 독점적인 배타권을 강력하게 주장하고 있으며, 협력사는 S사의 지시와 통제 하에 해당 레시피를 구현하는 전용 장비의 설계 및 제조를 담당했습니다. 모든 핵심 기술 정보는 S사의 영업비밀로 지정되었고, 협력사는 이에 대한 엄격한 비밀 유지 및 제3자 제공 금지 의무를 수용했습니다. 따라서, 핵심 기술인 세정 레시피 및 공정 기술과 이를 구현하는 장비에 대한 배타권은 Company S에 귀속됩니다.",
      overall_exclusivity_assessment: "Company S",
      confidence_level: "Medium",
      key_risks: [
        "협력사�� 장비 설계 및 제조 과정에서 독자적으로 개발한 미세 기술 개선 사항에 대한 권리 주장 가능성",
        "계약서에 명시된 배타권 조항의 구��적인 범위 및 유효기간에 대한 불명확성 (회의록 상 명시적 계약서 조항은 없음)",
        "협력사 내부 인력의 이직 등으로 인한 기술 유출 위험",
      ],
      recommendations: [
        "협력사와의 계약서에 세정 레시피, 공정 기술, 장비 사양 및 도면 등 모든 개발 결과물의 권리 귀속 조항을 명확히 하고, 배타적 독점권 및 제3자 공급 금지 조항을 구체적으로 명시할 것.",
        "협력사가 장비 개선 과정에서 독자적으로 개발한 기술에 대한 기여도를 평가하고, 필요한 경우 해당 부분에 대한 권리 귀속 또는 전용 실시권 계약을 체결할 것.",
        "S사 핵심 기술에 대한 협력사의 비밀 유지 관리 체계를 정기적으로 점검하고, 위반 시 법적 조치를 위한 증거 확보 방안을 마련할 것.",
      ],
    },
    judgements: [
      {
        group_id: "G001",
        topic: "세정 레시피 및 공정 기술",
        issue: "배타권 주체",
        exclusivity_holder: "Company S",
        confidence: "High",
        reasoning:
          "S사는 HKMG 공정용 세정 레시피 및 핵심 공정 기술을 독자적으로 개발(F002, F012, F017)하고, 이를 협력사에 제공하여 장비 개발을 요청했습니다(F011, F013, F014). S사는 해당 레시피가 10년 연구 개발 결과이며 외부 공개 시 경쟁사 기술 격차 해소에 직결된다고 강조했고(F017, F018), 이를 영업비밀로 엄격히 관리하겠다고 명시했습니다(F015, F047, F055, F065). 협력사 또한 S사 레시피의 우수성을 인정하고(F039), 레시피 자체는 변경 없이 장비 ���선만 수행했으며(F037, F042), S사 레시피 보호를 최우선으로 하겠다고 약속했습니다(F044). 최종적으로 S사 레시피가 장비에서 완벽하게 구현되었음을 확인했습니다(F054).",
        supporting_facts: [
          "F002",
          "F011",
          "F012",
          "F013",
          "F014",
          "F015",
          "F017",
          "F018",
          "F034",
          "F037",
          "F042",
          "F044",
          "F047",
          "F054",
          "F055",
          "F065",
        ],
        counter_arguments:
          "협력사가 S사 레시피를 기반으로 장비 설계를 수행한 기여(F019)가 있으나, 이는 S사의 지시와 통제 하에 이루어진 구현 역할에 가깝습니다.",
        recommendation:
          "S사 레시피 및 공정 기술에 대한 영업비밀 관리 체계를 지속적으로 강화하고, 협력사와의 계약서에 해당 기술의 독점적 소유권 및 사용 제한을 명확히 명시할 것.",
        legal_basis: {
          applicable_laws: ["PL001", "CL002", "NDA"],
          contract_analysis: {
            has_exclusivity_clause: true,
            clause_summary:
              "S사는 세정 레시피 및 HKMG 공정 기술을 영업비밀로 최종 확정하고(F047, F065), 협력업체는 S사 레시피 기반 장비 제조만 담당하며 레시피 자체는 S사 독점 소유임을 명확히 함(F048). 협력사는 S사 기술 비밀 유지 서약(F009, F060, F069) 및 제3자 공유 금지(F056, F062, F063, F070)를 약속했으며, 위반 시 법적 책임 및 계약 해지 조항을 재확인함(F057, F067).",
            validity_period: "정보 부족 (회의록 상 명시적 유효기간 언급 없음)",
            enforcement_risk:
              "S사의 명시적인 의사 표현과 협력사의 수용이 다수 확인되어 법적 집행 가능성이 높음. 단, 계약서 상 명시적 조항 확인 필요.",
          },
          inventorship_analysis:
            "S사가 세정 레시피 및 HKMG 공정 핵심 기술 아이디어를 최초 제안하고 10년간 독자 개발했으므로(F002, F012, F017), 발명자는 S사로 인정될 가능성이 매우 높습니다.",
          contribution_analysis:
            "S사는 핵심 레시피 및 공정 기술 개발에 10년간의 연구 개발 자원을 투입했으며(F017), 협력사는 S사 레시피를 구현하는 역할에 집중했습니다. 따라서 S사의 기여 비중이 압도적으로 높습니다.",
          risk_factors: ["계약서에 명시된 권리 귀속 조항의 부재 또는 불명확성 (회의록 상 명시적 계약서 조항은 없음)"],
          recommended_legal_actions: [
            "협력사와의 정식 계약서에 영업비밀 보호 및 권리 귀속 조항을 명확히 포함했는지 법무팀 검토 필요.",
          ],
        },
        evaluation_grade: {
          tech_effect_grade: "1",
          tech_effect_reasoning:
            "S사 차세대 HKMG 공정 도입에 필수적인 전용 기술이며(F001), 반도체 성능과 직결되는 핵심 공정 정보(F006)로, 세정 효율 98% 달성으로 양산 기준을 충족(F046)하여 대체 기술이 없어 Integration 불가 수준의 기술 효과를 가집니다.",
          competitor_applicability: "고",
          competitor_reasoning:
            "S사 독자 레시피의 외부 공개 시 경쟁사 기술 격차 해소에 직결된다고 명시(F018)되었으며, 해외 경쟁사에게 정보 제공을 절대 금지하는 등(F056, F063, F070) 타사에 노출될 경우 적용 용이성이 높아 기술 격차 유지를 위해 보호가 필수적입니다.",
          tech_gap: "대",
          tech_gap_reasoning:
            "S사 레시피가 10년 연구 개발 결과(F017)이며, 외부 공개 시 경쟁사 ���술 격차 해소에 직결된다는 점(F018)을 고려할 때, 2년 이상의 기술 격차를 가집니다.",
          final_grade: "A1",
          grade_reasoning:
            "기술 효과 1등급, 경쟁사 적용 가능성 '고', 기술 격차 '대' 조합으로, 가이드라인에 따라 A1 등급으로 판단됩니다.",
        },
      },
      {
        group_id: "G002",
        topic: "세정 장비 개발 및 성능",
        issue: "배타권 주체",
        exclusivity_holder: "Company S",
        confidence: "High",
        reasoning:
          "S사는 HKMG 공정 도입을 위한 전용 세정 장비 개발의 필요성을 제기했고(F001), S사 독자 개발 세정 레시피를 기반으로 장비 개발을 협력했습니다(F003). 협력사는 S사가 제공하는 레시피 및 공정 사양에 따라 장비 설계 및 제조를 담당했으며(F008, F020, F022), S사는 레시피에 정확히 부합하는 설계를 필수적으로 요구하고(F016), 온도 제어 정밀도(F025) 및 약품 농도 오차 범위(F026) 등 핵심 기술 사양을 지정했습니다. 협력사는 S사의 요구사항을 반영하여 장비 설계를 개선하고(F028, F029), 프로토타입 및 양산 장비를 제작했습니다(F031, F051, F058). 최종적으로 S사가 양산 장비를 승인했으며(F053), 협력사는 장비가 S사 레시피 구현 전용이며 타 용도 전용 불가함을 확인했습니다(F050, F059, F070).",
        supporting_facts: [
          "F001",
          "F003",
          "F008",
          "F016",
          "F020",
          "F022",
          "F025",
          "F026",
          "F028",
          "F029",
          "F031",
          "F050",
          "F051",
          "F053",
          "F058",
          "F059",
          "F064",
          "F068",
          "F070",
        ],
        counter_arguments:
          "협력사가 장비 설계 및 제조, 프로토타입 제작, 양산 준비 등 실질적인 구현을 담당했으나(F008, F020, F022, F031, F051, F058, F059, F068), 이는 S사의 핵심 레시피와 엄격한 사양 요구사항을 충족시키기 위한 역할이었습니다. 장비의 핵심 가치는 S사의 레시피 구현에 있으므로, 장비 자체의 배타권은 S사에 귀속됩니다.",
        recommendation:
          "장비 자체에 대한 특허 출원 가능성을 검토하고, S사 레시피 구현 전용 장비임을 명시하는 계약 조항을 강화하여 협력사의 타사 공급을 원천적으로 차단할 것.",
        legal_basis: {
          applicable_laws: ["PL001", "CL001", "CL002"],
          contract_analysis: {
            has_exclusivity_clause: true,
            clause_summary:
              "S사는 전용 세정 장비 개발을 요청했고(F001), 협력사는 S사 레시피 기반 장비 제조만 담당하며(F048), P사 장비는 S사 레시피 구현 전용이며 타 용도 불가(F050, F059) 및 유사 기술 타사 제공 및 응용 개발 금지(F070)를 약속했습니다.",
            validity_period: "정보 부족 (회의록 상 명시적 유효기간 언급 없음)",
            enforcement_risk:
              "S사의 명시적인 요구와 협력사의 수용이 다수 확인되어 법적 집행 가능성이 높음. 단, 계약서 상 명시적 조항 확인 필요.",
          },
          inventorship_analysis:
            "장비의 핵심 아이디어는 S사의 HKMG 공정 및 세정 레시피 구현을 위한 '전용' 장비 개발 필요성 제기(F001)에서 시작되었으며, S사가 핵심 파라미터와 사양을 제시했습니다(F025, F026). 협력사는 이를 구현하는 역할을 수행했으므로, 장비의 발명자는 S사 측에 더 가깝습니다.",
          contribution_analysis:
            "S사는 장비 개발의 방향성, 핵심 레시피, 기술 사양을 제시하며 주도적인 역할을 했고, 협력사는 S사의 요구사항에 맞춰 장비를 설계, 제작, 개선하는 데 자원을 투입했습니다. 장비의 ��심 가치가 S사 레시피 구현에 있으므로, S사의 기여가 더 크다고 판단됩니다.",
          risk_factors: ["협력사가 장비 설계 및 제조 과정에서 독자적으로 개발한 특정 부품 또는 모듈에 대한 권리 주장 가능성"],
          recommended_legal_actions: [
            "장비 설계 및 제조 과정에서 협력사가 독자적으로 개발한 기술적 요소가 있는지 확인하고, 있다면 해당 부분에 대한 권리 귀속을 명확히 할 것.",
          ],
        },
        evaluation_grade: {
          tech_effect_grade: "1",
          tech_effect_reasoning:
            "S사 차세대 HKMG 공정 도입에 따른 '전용' 세정 장비 개발이 필수적이며(F001), 반도체 성능과 직결되는 핵심 공정 정보를 구현하는 장비이므로(F006), 대체 기술이 없어 Integration 불가 수준의 기술 효과를 가집니다.",
          competitor_applicability: "저",
          competitor_reasoning:
            "P사 장비는 S사 레시피 구현 전용이며 타 용도로 전용 불가(F050, F070)하고, S사 레시피 전용 장비로 생산 라인을 구축(F059)했으므로, S사 특화 기술로 경쟁사 적용 가능성이 낮습니다.",
          tech_gap: "대",
          tech_gap_reasoning:
            "S사 차세대 HKMG 공정 도입을 위한 '전용' 세정 장비 개발(F001)이므로, 기존 설비나 대체 기술 대비 2년 이상의 기술 격차를 가집니다.",
          final_grade: "A2",
          grade_reasoning:
            "기술 효과 1등급, 경쟁사 적용 가능성 '저', 기술 격차 '대' 조합으로, 가이드라인에 따라 A2 등급으로 판단됩니다.",
        },
      },
      {
        group_id: "G003",
        topic: "기술 및 영업비밀 보호",
        issue: "배타권 주체",
        exclusivity_holder: "Company S",
        confidence: "High",
        reasoning:
          "S사는 세정 레시피, HKMG 공정 기술, 장비 사양 등 프로젝트 관련 모든 자료를 자사의 영업비밀로 지정하고(F004, F015, F047, F055, F065), 법적 보호 대상임을 명확히 했습니다. S사는 협력업체의 역할을 장비 구현으로 제한하고(F005, F048), 핵심 공정 정보에 대한 비밀 유지 계약을 필수로 요구��습니다(F006). 협력사는 S사 핵심 기술에 대한 비밀 유지 및 제3자 공유 금지를 서약하고(F009, F060, F062, F069, F070), S사 승인 없이 장비 도면 및 사양 정보의 외부 공개나 임의 변경이 불가함을 인정했습니다(F010, F023, F027). 또한, 협력사는 S사 정보를 내부적으로 엄격히 관리하고(F021, F030, F052, F061), 해외 경쟁사 제안 시 즉시 S사에 보고할 의무를 명시했습니다(F063). S사는 위반 시 법적 책임 및 계약 해지 조항을 재확인했습니다(F057, F067).",
        supporting_facts: [
          "F004",
          "F005",
          "F006",
          "F009",
          "F010",
          "F015",
          "F018",
          "F021",
          "F023",
          "F027",
          "F030",
          "F044",
          "F047",
          "F048",
          "F050",
          "F052",
          "F055",
          "F056",
          "F057",
          "F060",
          "F061",
          "F062",
          "F063",
          "F065",
          "F066",
          "F067",
          "F069",
          "F070",
        ],
        counter_arguments:
          "협력사가 S사 기술 보호를 위해 내부 관리 체계를 구축하고 서약하는 등 적극적으로 협력했으나, 이는 S사의 기술 보호 의무를 이행하는 행위로, 협력사가 해당 기술에 대한 배타권을 주장할 근거는 되지 않습니다.",
        recommendation:
          "S사는 영업비밀 3요건(비공지성, ��제적 가치, 비밀관리성) 충족 여부를 정기적으로 재검토하고, 협력사와의 계약서에 영업비밀 보호 및 위반 시 제재 조항을 더욱 구체적으로 명시할 것.",
        legal_basis: {
          applicable_laws: ["CL002", "NDA", "민법 제750조"],
          contract_analysis: {
            has_exclusivity_clause: true,
            clause_summary:
              "S사는 세정 레시피, HKMG 공정 기술, 장비 사양을 영업비밀로 최종 확정하고(F065), 협력업체는 S사 기술 보호 의무를 지속하며 위반 시 민형사상 책임 추궁(F067) 및 제3자 공급 금지(F056, F070)를 명시했습니다. 협력사는 S사 기술 비밀 유지 서약(F060, F069) 및 제3자 공유 금지(F062, F070)를 약속했습니다.",
            validity_period: "정보 부족 (회의록 상 명시적 유효기간 언급 없음)",
            enforcement_risk:
              "S사의 명시적인 영업비밀 지정 및 보호 의지와 협력사의 수용 및 이행 의지가 명확하게 확인되어 법적 집행 가능성이 매우 높습니다.",
          },
          inventorship_analysis:
            "기술 아이디어의 창출은 S사에서 이루어졌으며, 보호 대상인 영업비밀은 S사의 독자적인 연구 개발 결과물입니다.",
          contribution_analysis:
            "S사는 영업비밀로 지정된 기술의 개발에 주도적으로 기여했으며, 협력사는 S사의 영업비밀을 보호하고 관리하는 역할을 수행했습니다.",
          risk_factors: [
            "협력사 내부에서 영업비밀 관리 소홀로 ���한 유출 발생 시 책임 소재 및 손해배상 범위 입증의 어려움",
          ],
          recommended_legal_actions: [
            "협력사와의 계약서에 영업비밀의 정의, 범위, 보호 의무, 위반 시 손해배상액 예정 등 구체적인 조항을 포함했는지 법무팀 검토 필요.",
          ],
        },
        evaluation_grade: {
          tech_effect_grade: "1",
          tech_effect_reasoning:
            "보호 대상인 기술이 '반도체 성능과 직결되는 핵심 공정 정보'(F006)이므로, 해당 기술의 보호는 Device에 미치는 기술 효과의 중요도가 매우 높습니다.",
          competitor_applicability: "고",
          competitor_reasoning:
            "S사 레시피의 외부 공개 시 '경쟁사 기술 격차 해소에 직결'(F018)된다고 명시되었고, '해외 경쟁사'에게 정보 제공을 절대 금지하는 등(F056, F063, F070) 타사에 노출될 경우 적용 용이성이 높아 기술 격차 유지를 위해 보호가 필수적입니다.",
          tech_gap: "대",
          tech_gap_reasoning:
            "보호 대상인 S사 레시피가 '10년 연구 개발 결과'(F017)이며, 외부 공개 시 '경쟁사 기술 격차 해소에 직결'(F018)된다는 점을 고려할 때, 2년 이상의 기술 격차를 가집니다.",
          final_grade: "A1",
          grade_reasoning:
            "기술 효과 1등급, 경쟁사 적용 가능성 '고', 기술 격차 '대' 조합으로, 가이드라인에 따라 A1 등급으로 판단됩니다.",
        },
      },
      {
        group_id: "G004",
        topic: "기타",
        issue: "배타권 주체",
        exclusivity_holder: "Unclear",
        confidence: "Low",
        reasoning:
          "해당 Fact(F071)는 협력사가 S사와의 장기 파트너십 유지 및 차세대 공정 장비 협력을 희망한다는 의사 표현으로, 특정 기술이나 기능에 대한 배타권 주체를 직접적으로 판단할 근거가 되지 않습니다. 이는 향후 협력 관계에 대한 의지를 보여주는 것이며, 배타권 판단에는 중립적입니다.",
        supporting_facts: ["F071"],
        counter_arguments: "없음",
        recommendation: "이 Fact는 배타권 판단에 직접적인 영향을 미치지 않으므로, 참고 자료로만 활용합니다.",
        legal_basis: {
          applicable_laws: [],
          contract_analysis: {
            has_exclusivity_clause: false,
            clause_summary: "해당 Fact는 계약 조항에 대한 언급이 아닙니다.",
            validity_period: "N/A",
            enforcement_risk: "N/A",
          },
          inventorship_analysis: "해당 Fact는 기술 아이디어 창출과 관련이 없습니다.",
          contribution_analysis: "해당 Fact는 자원 투입과 관련이 없습니다.",
          risk_factors: [],
          recommended_legal_actions: [],
        },
        evaluation_grade: {
          tech_effect_grade: "N/A",
          tech_effect_reasoning: "N/A - 이 그룹은 기술 자체의 효과를 다루지 않습니다.",
          competitor_applicability: "N/A",
          competitor_reasoning: "N/A - 이 그룹은 기술 자체의 경쟁사 적용 가능성을 다루지 않습니다.",
          tech_gap: "N/A",
          tech_gap_reasoning: "N/A - 이 그룹은 기술 자체의 격차를 다루지 않습니다.",
          final_grade: "N/A",
          grade_reasoning:
            "N/A - 설비 과제이지만, 이 그룹의 내용은 기술 평가 기준에 직접 해당하지 않으므로 심의 등급 미적용.",
        },
      },
    ],
    legal_perspective: {
      applicable_laws: [
        {
          law_id: "PL001",
          law_name: "특허법 제33조 (특허를 받을 수 있는 권리)",
          relevance:
            "발명자 인정 기준은 기술적 아이디어를 창출한 자에게 특허를 받을 수 있는 권리가 있음을 명시합니다. 이는 배타권 주체의 핵심 근거가 됩니다.",
          application_to_project:
            "본 프로젝트에서 S사는 HKMG 공정용 세정 레시피 및 공정 기술에 대한 아이디어를 최초 제안하고 10년간 독자 개발했습니다(F002, F012, F017). 협력사는 S사의 지시에 따라 장비를 구현하는 역할을 수행했으므로, 발명자 인정 측면에서 S사가 우위에 있습니다.",
        },
        {
          law_id: "CL002",
          law_name: "계약 특약 조항 배타적 독점권 조항",
          relevance:
            "계약서에 명시된 배타적 독점권, 제3자 공급 금지, 전용 실시권 등의 조항은 배타권의 법적 효력을 강화하는 가장 직접적인 근거입니다.",
          application_to_project:
            "회의록 상 S사는 세정 레시피 및 공정 기술을 영업비밀로 최종 확정하고(F047, F065), 협력업체의 역할을 S사 레시피 기반 장비 제조로 제한하며 레시피의 독점 소유권을 명시했습니다(F048). 협력사 또한 S사 기술에 대한 비밀 유지 및 제3자 공유 금지를 서약하고(F009, F060, F069, F070), 위반 시 법적 책임 및 계약 해지 조항을 재확인했습니다(F057, F067). 이는 계약서에 배타적 독점권 조항이 포함되어 있을 가능성이 매우 높음을 시사하며, S사의 배타권 주장에 강력한 법적 근거가 됩니다.",
        },
        {
          law_id: "CL001",
          law_name: "계약법 (민법 제664조) 도급계약 - 일의 완성과 보수",
          relevance:
            "도급계약은 수급인이 일의 완성을 통해 보수를 받는 계약 형태로, 결과물의 소유권은 계약서에 명시된 바에 따릅니다. 이는 협력사의 개발 행위가 S사의 지시 하에 이루어졌음을 판단하는 근거가 됩니다.",
          application_to_project:
            "협력사는 S사가 제공하는 세정 레시피 및 공정 사양에 따라 장비 설계 및 제조를 담당했습니다(F008). S사는 장비 설계에 대한 핵심 요구사항을 제시하고(F016, F025, F026), S사 승인 없이 임의 변경을 금지했습니다(F023). 이는 협력사의 역할이 S사의 지시를 받아 '일의 완성'을 수행���는 도급 계약의 성격이 강함을 보여주며, 결과물의 권리 귀속은 S사의 의사에 따를 가능성이 높습니다.",
        },
        {
          law_id: "PL002",
          law_name: "특허법 제10조~제15조 (직무발명)",
          relevance:
            "종업원의 직무발명은 사용자에게 권리가 승계될 수 있습니다. 협력사 직원이 개발한 경우, 협력사와 위탁사 간 계약에 따라 권리 귀속이 달라질 수 있습니다.",
          application_to_project:
            "��력사 직원이 장비 설계 및 개선 과정에서 독자적인 기술적 아이디어를 창출했다면 직무발명으로 볼 수 있습니다. 그러나 본 프로젝트에서는 협력사의 개발이 S사의 레시피 구현 및 요구사항 충족에 집중되었으므로, 협력사 직원의 독자적인 발명으로 인정될 여지는 적습니다. 다만, 계약서에 직무발명에 대한 권리 귀속 조항이 명확히 포함되어 있는지 확인이 필요합니다.",
        },
      ],
      overall_legal_analysis:
        "본 프로젝트의 배타권은 S사에 강력하게 귀속될 것으로 판단됩니다. S사는 핵심 기술인 세정 레시피 및 공정 기술을 독자적으로 개발하고 영업비밀로 지정했으며, 협력사는 S사의 지시와 통제 하에 해당 기술을 구현하는 장비의 설계 및 제조를 담당했습니다. 다수의 회의록 Fact에서 S사의 명시적인 배타권 의사 표현과 협력사의 비밀 유지 및 제3자 제공 금지 서약이 확인되어 계약법적 근거가 매우 견고합니다. 특허법적 관점에서도 S사가 기술 아이디어를 창출하고 선행 기술을 보유했으므로 발명자 인정에 유리합니다. 협력사의 기여는 S사의 기술을 구현하는 도급 계약의 성격이 강하며, 장비 자체도 S사 레시피 전용으로 개발되었습니다. 따라서 S사의 배타권 주장은 법적으로 높은 타당성을 가집니다.",
      risk_factors: [
        "협력사와의 정식 계약서에 회의록에서 언급된 배타권 및 영업비밀 보호 조항이 명확하고 구체적으로 명시되어 있지 않을 경우 법적 분쟁 발생 가능성",
        "협력사가 장비 설계 및 개선 과정에서 독자적으로 개발한 특정 기술적 요소에 대해 권리를 주장할 경우, 해당 부분에 대한 기여도 및 권리 귀속 범위에 대한 이견 발생 가능성",
        "협력사 내부의 영업비밀 관리 소홀로 인한 기술 유출 발생 시, S사의 손해배상 청구 및 영업비밀 침해 입증의 어려움",
      ],
      recommended_actions: [
        "협력사와의 모든 계약서(개발 계약, NDA, 공급 계약 등)를 법무팀에서 종합적으로 검토하여 배타권, 영업비밀 보호, 권리 귀속, 제3자 공급 금지, 위반 시 제재 조항의 유효성과 구체성을 확인할 것.",
        "협력사가 장비 개발 과정에서 독자적으로 ���발한 기술적 개선 사항이 있는지 면밀히 분석하고, 만약 있다면 해당 기술에 대한 권리 귀속 또는 사용 허락에 대한 명확한 합의를 문서화할 것.",
        "협력사의 영업비밀 관리 시스템에 대한 정기적인 감사를 실시하고, 기술 유출 방지를 위한 추가적인 보안 조치 및 교육을 요구할 수 있는 법적 근거를 마련할 것.",
      ],
    },
    elapsed_time: 210.65,
    facts: buildHkmg25e1Facts(),
  },
  HSP20E1: {
    project_code: "HSP20E1",
    project_type: "소재",
    overall_conclusion: {
      summary: "본 프로젝트는 S사의 고선택비인산 소재 수급 다변화 전략에 따라 P사가 독자 개발한 소재를 S사에 전용 공급하는 형태로 진행되었습니다. P사는 핵심 소재 조성 기술의 독자 개발을 명확히 주장하며 지적재산권 보호를 요청했고, S사는 P사 소재의 성능 검증 및 자사 공정 적용을 주도했습니다. 최종적으로 P사가 소재 기술에 대한 ���타권을 가지며, S사는 P사로부터 해당 소재를 전용으로 공급받는 계약적 배타권을 확보한 것으로 판단됩니다.",
      overall_exclusivity_assessment: "Partner",
      confidence_level: "High",
      key_risks: [
        "S사 그룹의 투자 및 기술 지원이 P사의 핵심 기술 개발에 미친 구체적인 기여도에 따라 S사의 공동 발명 또는 권리 주장이 제기될 수 있습니다.",
        "최종 양산 공급 계약에 명시된 지적재산권 귀속 조항 및 배타권 유효기간이 불분명하여 향후 분쟁의 소지가 있습니다."
      ],
      recommendations: [
        "P사와의 양산 공급 계약서 및 SK머티리얼즈와의 사업협력 계약서에 명시된 지적재산권 귀속 조항, 배타권 범위, 유효기간, 역설계 방지 조항 등을 면밀히 검토하여 권리 관계를 명확히 해야 합니다.",
        "S사의 기술적 요청이 P사의 소재 개발에 미친 영향에 대해 S사 내부적으로 발명 기여도를 평가하고, 필요시 공동 발명자 등록 가능성을 검토해야 합니다."
      ]
    },
    judgements: [
      {
        group_id: "G001",
        topic: "소재 성능 및 조성",
        issue: "소재 조성 및 성능 최적화 기술의 개발 주체",
        exclusivity_holder: "Partner",
        confidence: "High",
        reasoning: "S사는 소재의 성능 목표와 개선 방향을 제시하고 개선된 샘플의 성능을 검증했습니다. 그러나 P사는 S사의 요청을 바탕으로 실제 인산 농도 증가 및 첨가제 비율 조정 등 구체적인 소재 조성 개발을 수행했으며, 기술적 해결 방안을 제안했습니다. 이는 P사가 소재의 핵심 조성 기술 개발을 주도했음을 보여줍니다.",
        supporting_facts: ["F013", "F014", "F021", "F022", "F031"],
        counter_arguments: "S사가 초기 문제점을 발견하고 구체적인 개선 방향을 제시하며 최종 성능을 검증한 점은 S사의 기술적 기여로 볼 수 있습니다.",
        recommendation: "S사의 기술적 요청이 P사의 소재 조성 기술에 대한 발명 기여로 인정될 수 있는지 추가적인 기술적 분석이 필요합니다.",
        legal_basis: {
          applicable_laws: ["PL001"],
          contract_analysis: {
            has_exclusivity_clause: false,
            clause_summary: "해당 그룹 내 명시적인 배타권 조항 언급 없음.",
            validity_period: "N/A",
            enforcement_risk: "N/A"
          },
          inventorship_analysis: "P사가 S사의 요청을 반영하여 구체적인 조성 변경 및 최적화를 수행했으므로, 해당 개선 기술의 발명자는 P사 직원으로 판단될 가능성이 높습니다.",
          contribution_analysis: "P사가 실제 개발 및 최적화에 인력과 설비를 투입했으며, S사는 평가 및 검증에 자원을 투입했습니다.",
          risk_factors: ["S사의 구체적인 기술적 요구사항이 P사의 발명에 결정적인 기여를 했다고 주장할 경우 공동 발명자 인정 여부에 대한 분쟁 가능성."],
          recommended_legal_actions: ["S사의 기술적 기여가 특허법상 발명에 해당하는지 여부에 대한 법률적 검토."]
        },
        evaluation_grade: {
          tech_effect_grade: "N/A",
          tech_effect_reasoning: "N/A - 소재 과제",
          competitor_applicability: "N/A",
          competitor_reasoning: "N/A - 소재 과제",
          tech_gap: "N/A",
          tech_gap_reasoning: "N/A - 소재 과제",
          final_grade: "N/A",
          grade_reasoning: "N/A - 소재 과제는 심의 등급 미적용"
        }
      }
    ],
    legal_perspective: {
      applicable_laws: [
        {
          law_id: "PL001",
          law_name: "특허법 제33조 (특허를 받을 수 있는 권리)",
          relevance: "발명자 인정 기준",
          application_to_project: "P사가 자신의 독자 개발을 명확히 주장하고 있으므로, 발명자는 P사 직원으로 인정될 가능성이 높습니다."
        }
      ],
      overall_legal_analysis: "본 프로젝트에서 고선택비인산 소재의 핵심 기술에 대한 지적재산권은 P사가 '독자 개발'했음을 명시적으로 주장하고 있어, P사에게 귀속될 법적 타당성이 높습니다. S사는 P사 소재의 성능 검증 및 자사 공정 적용을 주도했으나, 이는 P사의 소재 기술을 활용하는 과정에서 발생한 S사 고유의 공정 기술 또는 응용 기술로 판단됩니다.",
      risk_factors: [
        "P사의 '독자 개발' 주장을 뒷받침할 객관적인 증거가 부족할 경우, S사 그룹의 투자를 근거로 S사가 공동 발명을 주장할 수 있습니다.",
        "양산 공급 계약서에 배타권 조항의 범위와 유효기간이 명확하게 명시되지 않았다면, 향후 ��쟁이 발생할 수 있습니다."
      ],
      recommended_actions: [
        "P사의 소재 관련 특허 출원 및 등록 현황을 확인하여 객관적 근거를 확보해야 합니다.",
        "양산 공급 계약서의 지적재산권 귀속 조항을 법무팀에서 면밀히 검토하고 필요시 보완해야 합니다."
      ]
    },
    elapsed_time: 266.91,
    facts: buildHsp20e1Facts(),
  },
  HBM20C01: {
    project_code: "HBM20C01",
    project_type: "소재",
    overall_conclusion: {
      summary: "본 프로젝트에서 HBM TSV 공정용 CMP 슬러리 기술의 배타권은 협력사(Partner)에게 강력하게 귀속됩니다. 협력사는 해당 기술에 대한 독점적인 선행 기술과 특허를 보유하고 있었으며, S사의 요구사항에 맞춰 개발을 수행하고 생산 설비에 투자했습니다. S사는 이 기술을 독점적으로 공급받기 위해 상당한 일시금과 로열티를 지불하고, 협력사의 기술 보호 요구사항을 수용하는 배타적 기술협력 계약을 체결했습니다.",
      overall_exclusivity_assessment: "Partner",
      confidence_level: "High",
      key_risks: [
        "S사가 기술이전 받은 최종 혼합 공정만으로 유사 기술을 개발하거나, P사의 핵심 배합비를 우회하여 개발할 경우 P사의 배타권 침해 가능성이 발생할 수 있습니다.",
        "P사가 해외 시장에서 S사의 경쟁사에 기술을 공급할 경우, S사의 독점적 지위가 약화될 수 있습니다.",
        "계약 해지 시 위약금 면제 조건이 P사의 재정적 리스크를 줄여 S사의 협상력을 제한할 수 있습니다."
      ],
      recommendations: [
        "ETCA 계약서 상의 독점 공급 기간, 기술이전 범위, 경쟁사 제한, 계약 해지 조건, 위약금 조항 등을 법무팀에서 상세히 검토하여 S사의 권리 보���를 강화할 방안을 모색해야 합니다.",
        "기술이전 받은 최종 혼합 공정의 범위와 P사의 핵심 배합비 비공개 조항에 대한 법적 검토를 통해 S사의 기술 개발 가능성 및 P사의 기술 보호 범위를 명확히 해야 합니다.",
        "해외 고객사에 대한 P사의 공급 승인 절차 및 조건에 대해 추가적인 법적 검토 및 명확화가 필요합니다."
      ]
    },
    judgements: [
      {
        group_id: "G001",
        topic: "CMP 슬러리 기술 개발",
        issue: "개발 주체 및 기술 소유권",
        exclusivity_holder: "Partner",
        confidence: "High",
        reasoning: "P사는 TSV 공정 특화 슬러리 조성에 대한 독점적 기술 노하우를 10년간 축적해왔으며, S사의 구체적인 요청에 따라 개선 버전 개발에 착수하고 기술적 해결책을 제시하는 등 실제 개발을 주도했습니다.",
        supporting_facts: ["F005", "F006", "F012", "F022", "F081"],
        counter_arguments: "S사가 초기 기술 아이디어를 제안하고 구체적인 개선 방향을 제시했으며, 차세대 기술 공동 개발을 제안한 점은 S사의 기여로 볼 수 있습니다.",
        recommendation: "현재 개발된 CMP 슬러리 기술에 대한 P사의 특허 및 노하우 범위를 명확히 하고, 차세대 공동 개발 계약 시 권리 귀속 조항을 상세히 명시해야 합니다.",
        legal_basis: {
          applicable_laws: ["PL001", "PL002"],
          contract_analysis: {
            has_exclusivity_clause: true,
            clause_summary: "P사는 자사 기술의 제3자 이전 및 역설계 방지 조항을 요구했으며, 최종 ETCA 계약에서 P사의 CMP 슬러리 기술에 대한 독점적 지위 확보가 명시되었습니다.",
            validity_period: "N/A - 계약서 상 명시된 유효기간은 없으나, 독점 공급 기간 3년이 합의됨.",
            enforcement_risk: "P사의 선행 기술 및 특허 주장이 명확하므로, 계약 조항의 법적 집행 가능성은 높습니다."
          },
          inventorship_analysis: "P사가 10년간 R&D를 통해 독점적 기술 노하우를 축적하고 특허를 단독 소유하고 있음을 주장하므로, P사 직원이 발명자로 인정될 가능성이 높습니다.",
          contribution_analysis: "P사가 10년 R&D를 통해 기술을 축적하고 실제 개발을 수행했으며, S사는 기술 요구 및 평가, 그리고 최종적으로 기술 사용에 대한 대가를 지불했습니다.",
          risk_factors: ["S사가 제시한 구체적인 개선 요청이 P사의 개발에 미친 영��에 대한 기여도 분쟁 가능성."],
          recommended_legal_actions: ["P사의 특허 및 영업 비밀 범위에 대한 법적 검토를 통해 S사의 기술 활용 범위를 명확히 해야 합니다."]
        },
        evaluation_grade: {
          tech_effect_grade: "N/A",
          tech_effect_reasoning: "N/A - 소재 과제",
          competitor_applicability: "N/A",
          competitor_reasoning: "N/A - 소재 과제",
          tech_gap: "N/A",
          tech_gap_reasoning: "N/A - 소재 과제",
          final_grade: "N/A",
          grade_reasoning: "N/A - 소재 과제는 심의 등급 미적용"
        }
      }
    ],
    legal_perspective: {
      applicable_laws: [
        {
          law_id: "PL001",
          law_name: "특허법 제33조 (특허를 받을 수 있는 권리)",
          relevance: "발명자 인정 기준",
          application_to_project: "P사가 CMP 슬러리 조성에 대한 독점적 기술 노하우를 10년간 축적하고 특허를 단독 소유하고 있음을 주장하므로, P사 직원이 발명자로 인정될 가능성이 높습니다."
        }
      ],
      overall_legal_analysis: "본 프로젝트에서 CMP 슬러리 기술에 대한 배타권은 협력사에게 강력하게 귀속됩니다. P사는 해당 기술에 대한 독점적인 선행 기술과 특허를 보유하고 있었으며, S사는 배타적 기술협력 계약을 체결하고 일시금과 로열티를 지불하는 방식으로 기술을 사용하게 됩니다.",
      risk_factors: [
        "ETCA 계약서에 명시된 독점 공급 기간 이후의 권리 관계가 불분명하며, 재계약 협상 시 S사의 협상력이 약화될 수 있습니다.",
        "기술이전 범위가 제한되고 핵심 배합비는 비공개로 유지되므로, S사의 백업 생산 능력 확보에 제약이 있을 수 있습니다."
      ],
      recommended_actions: [
        "ETCA 계약서의 모든 배타권 관련 조항에 대한 법무팀의 상세 검토 및 해석이 필요합니다.",
        "P사의 특허 및 영업 비밀 범위에 대한 법적 검토를 통해 S사의 기술 활용 및 개발 가능 범위를 명확히 해야 합니다."
      ]
    },
    elapsed_time: 258.44,
    facts: buildHbm20c01Facts(),
  },
  SCMP26E1: {
    project_code: "SCMP26E1",
    project_type: "소재",
    overall_conclusion: {
      summary: "본 프로젝트는 P사의 기존 Silica 원천 기술에 S사의 독자적인 Additive-X 기술이 결합되어 차세대 CMP Slurry(Soul-S2)를 개발한 사례입니다. S사가 핵심 기술 아이디어(Additive-X)를 제안하고, P사 기존 기술의 한계를 해결하며, 최종 제품의 성능을 획기적으로 개선하는 데 결정적인 역할을 수행했습니다. P사는 S사의 Additive-X 및 최종 혼합 Slurry 제품(Soul-S2)에 대한 S사의 배타적 권리를 명시적으로 수용했습니다.",
      overall_exclusivity_assessment: "Company S",
      confidence_level: "High",
      key_risks: [
        "P사의 고유 Silica 원천 기술의 타 제품 활용 범위에 대한 잠재적 분쟁 가능성 (계약서 명확성 필요)",
        "배타권 계약서의 세부 조항(유효기간, 위반 시 페널티 등)에 대한 법적 구속력 및 집행 가능성 검토 필요"
      ],
      recommendations: [
        "S사와 P사 간 체결된 배타권 계약서의 모든 조항(배타권 범위, 유효기간, 위반 시 제재 조항 등)을 법무팀에서 면밀히 검토하여 법적 구속력을 확인해야 합니다.",
        "S사 내부 '배타권 자산 DB' 등록 절차를 완료하고, Additive-X 관련 특허 출원 여부를 확인하여 법적 보호를 강화해야 합니다.",
        "P사의 Silica 원천 기술과 S사의 Additive-X 기술, 그리고 최종 혼합 Slurry 제품(Soul-S2) 간의 지식재산권 경계를 명확히 하고, P사가 자사의 Silica 원천 기술을 다른 용도로 활용할 수 있는 범위를 계약서에 명확히 명시했는지 재확인해야 합니다."
      ]
    },
    judgements: [
      {
        group_id: "G001",
        topic: "Additive-X 및 Slurry 조성 기술",
        issue: "개발 주체",
        exclusivity_holder: "Company S",
        confidence: "High",
        reasoning: "S사는 차세대 공정 요구사항을 제시하고(F001), P사 원천 기술의 한계(F009, F012, F013)를 진단한 후, 'Additive-X'라는 고유의 기술 아이디어를 제안했습니다(F014). 이 Additive-X는 P사 Silica 포뮬러의 치명적 결함(겔화 현상)을 해결하고 성능을 획기적으로 개선하는 데 결정적인 역할을 했음이 P사에 의해 확인되었습니다(F016). S사는 Additive-X 기술 및 최적 배합비가 S사 주도로 도출된 결과임을 명시했고(F020), P사도 S사가 독자 개발한 Additive-X 및 최종 혼합 Slurry 제품(Soul-S2)에 대한 S사의 배타적 사용 권리를 수용했습니다(F029, F030). 이는 S사가 핵심 기술 아이디어를 제안하고 개발을 주도하여 최종 제품의 성능을 결정적으로 개선했음을 명확히 보여줍니다.",
        supporting_facts: ["F001", "F009", "F014", "F016", "F020", "F029", "F030"],
        counter_arguments: "P사가 자사의 Silica 제조 원천 기술이 시너지를 냈다고 주장했으나(F023), S사의 Additive-X 없이는 양산 적용이 불가했음을 인정하고 S사의 배타적 권리를 수용했으므로 반박 가능성은 낮습니다.",
        recommendation: "Additive-X의 기술적 메커니즘 및 최적 배합비에 대한 S사의 특허 출원 현황을 확인하고, P사와의 계약서에 해당 기술의 권리 귀속이 명확히 명시되었는지 재검토해야 합니다.",
        legal_basis: {
          applicable_laws: ["PL001", "CL002", "CL001"],
          contract_analysis: {
            has_exclusivity_clause: true,
            clause_summary: "P사는 S사가 독자 개발한 Additive-X 및 최종 혼합 Slurry 제품(Soul-S2)에 대한 S사 측의 배타적 사용 권리와 제3자 공급 금지 조항을 수용했습니다(F029, F030). S사는 Additive-X의 메커니즘 및 최적 조성비가 S사의 배타적 권리 자산임을 명시했습니다(F026).",
            validity_period: "양산 보급 후 최소 5년 (F027)",
            enforcement_risk: "P사가 명시적으로 수용했으므로 법적 집행 가능성은 높으나, 계약서의 세부 조항 검토가 필요합니다."
          },
          inventorship_analysis: "S사가 'Additive-X'라는 고유 아이디어를 제안하고(F014), 첨가제 기술 및 최적 배합비를 S사 주도로 도출했으므로(F020), Additive-X의 발명자는 S사로 인정될 가능성이 높습니다.",
          contribution_analysis: "S사는 핵심 기술 아이디어 제안 및 문제 해결에 결정적으로 기여했으며, P사는 기존 Silica 원천 기술 제공 및 S사 아이디어 기반의 샘플 최적화에 기여했습니다. S사의 기여도가 더 높습니다.",
          risk_factors: ["P사의 Silica 원천 기술에 대한 권리 범위가 명확히 구분되지 않을 경우 잠재적 분쟁 가능성"],
          recommended_legal_actions: ["계약서 상 Additive-X 및 Soul-S2에 대한 S사의 독점적 권리 범위와 P사의 Silica 원천 기술 활용 범위에 대한 명확한 조항 확인"]
        },
        evaluation_grade: {
          tech_effect_grade: "N/A",
          tech_effect_reasoning: "N/A - 소재 과제",
          competitor_applicability: "N/A",
          competitor_reasoning: "N/A - 소재 과제",
          tech_gap: "N/A",
          tech_gap_reasoning: "N/A - 소재 과제",
          final_grade: "N/A",
          grade_reasoning: "N/A - 소재 과제는 심의 등급 미적용"
        }
      }
    ],
    legal_perspective: {
      applicable_laws: [
        {
          law_id: "PL001",
          law_name: "특허법 제33조 (특허를 받을 수 있는 권리)",
          relevance: "발명자 인정 기준",
          application_to_project: "S사가 'Additive-X'라는 고유의 기술 아이디어를 제안하고(F014), 첨가제 기술 및 최적 배합비를 S사 주도로 도출했으므로(F020), Additive-X 기술에 대한 발명자로 인정될 가능성이 높습니다."
        }
      ],
      overall_legal_analysis: "본 프로젝트에서 Additive-X 기술에 대한 배타권은 S사에 강력하게 귀속됩니다. S사는 차세대 공정의 핵심 기술 요구사항을 제시하고, P사 기존 기술의 한계를 진단한 후, 'Additive-X'라는 독자적인 기술 아이디어를 제안했습니다. 이 기술은 P사의 Silica 포뮬러의 치명적 결함을 해결하고 최종 제품의 성능을 획기적으로 개선했습니다. P사도 이러한 사실을 인정하고 S사의 배타적 권리를 명시적으로 수용했으므로, S사의 배타권 주장은 기술적 기여와 계약법적 근거 모두에서 강력하게 뒷받침됩니다.",
      risk_factors: [
        "P사의 Silica 원천 기술과 S사의 Additive-X 기술, 그리고 최종 혼합 Slurry 제품(Soul-S2) 간의 지식재산권 경계가 불분명할 경우, 향후 P사가 자사의 원천 기술을 활용한 유사 제품 개발 시 분쟁의 소지가 있습니다.",
        "배타권 계약서에 명시된 유효기간, 위반 시 페널티 조항 등의 구체적인 내용이 법적으로 완벽하게 유효하고 집행 가능한지 법무팀의 면밀한 검토가 필요합니다."
      ],
      recommended_actions: [
        "S사와 P사 간 체결된 배타권 계약서의 모든 조항(특히 배타권 범위, 유효기간, 위반 시 제재 조항)을 법무팀에서 면밀히 검토하여 법적 구속력을 확인하고, 필요 시 보완 조치를 취해야 합니다.",
        "S사 Additive-X 기술에 대한 특허 출원 진행 여부를 확인하고, 해당 기술의 신규성 및 진보성을 확보하여 법적 보호를 강화해야 합니다.",
        "P사의 양산 공정 설계 및 품질 관리 노하우에 대한 비밀유지 계약(NDA)을 강화하고, 해당 공정 기술에 대한 권리 귀속 조항을 계약서에 명확히 명시하여 잠재적 분쟁을 예방해야 합니다."
      ]
    },
    elapsed_time: 177.88,
    facts: buildScmp26e1Facts(),
  },
}

export function findMeetingsByProject(code: string): MeetingMinute[] {
  return meetingMinutes
    .filter((m) => m.projectCode === code)
    .sort((a, b) => a.date.localeCompare(b.date))
}

export function projectExists(code: string): boolean {
  return projectCodes.includes(code.trim())
}

export function countMeetingsByProject(code: string): number {
  return meetingMinutes.filter((m) => m.projectCode === code).length
}
