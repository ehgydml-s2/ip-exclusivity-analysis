export type MeetingMinute = {
  id: string
  projectCode: string
  date: string
  participants: string[]
  content: string
}

export type ProjectCategory = "소재" | "설비"

export type Project = {
  code: string
  name: string
  category: ProjectCategory
}

export type Confidence = "High" | "Medium" | "Low"
export type ExclusivityHolder = "Company S" | "Partner" | "Joint" | "Unclear"
export type FinalGrade = "A2" | "B" | "C/D" | "N/A"

export type Fact = {
  id: string
  text: string
  meetingId?: string
}

export type LegalBasis = {
  applicable_laws: string[]
  has_exclusivity_clause: boolean
  clause_summary: string
  validity_period: string
  enforcement_risk: string
  inventorship_analysis: string
  contribution_analysis: string
  risk_factors: string[]
  recommended_legal_actions: string[]
}

export type EvaluationGrade = {
  final_grade: FinalGrade
  tech_effect_grade: string
  competitor_applicability: string
  tech_gap: string
  tech_effect_reasoning: string
  competitor_reasoning: string
  tech_gap_reasoning: string
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

export type LegalPerspective = {
  overall_analysis: string
  common_legal_issues: string[]
  risk_assessment: {
    high_risk_groups: string[]
    risk_summary: string
  }
  strategic_recommendations: string[]
}

export type Conclusion = {
  overall_exclusivity_status: string
  confidence_level: Confidence
  key_findings: string[]
  action_items: string[]
}

export type AnalysisResult = {
  project_code: string
  project_type: string
  judgements: Judgement[]
  legal_perspective: LegalPerspective
  conclusion: Conclusion
  elapsed_time: number
  facts: Fact[]
}

export const projects: Project[] = [
  { code: "PJT-2024-RF-0012", name: "차세대 RF Front-End 전력 최적화", category: "설비" },
  { code: "PJT-2024-MEM-0088", name: "저전력 DRAM 리프레시 알고리즘", category: "소재" },
  { code: "PJT-2023-DISP-0203", name: "OLED 구동 IC 휘도 보상 기술", category: "설비" },
]

export const projectCodes = projects.map((p) => p.code)

export type ProjectTypeFilter = "전체" | ProjectCategory

export function findProjectsByType(type: ProjectTypeFilter): Project[] {
  if (type === "전체") return projects
  return projects.filter((p) => p.category === type)
}

export const meetingMinutes: MeetingMinute[] = [
  // ---- PJT-2024-RF-0012 ----
  {
    id: "MTG-2024-0112",
    projectCode: "PJT-2024-RF-0012",
    date: "2024-01-12",
    participants: ["김도현 (삼성 RF설계)", "이수민 (삼성 특허팀)", "박정우 (협력사 A)"],
    content:
      "RF Front-End 모듈의 전력 효율 개선 방향을 논의함. 삼성 RF설계팀은 기존 대비 RF Power를 20% 상향하는 신규 구동 방식을 최초로 제안하였다. 협력사 A는 현재 양산 라인의 안정성을 이유로 기존 알고리즘 유지 의견을 제시함.\n\n삼성 측은 상향 방식이 수율 저하 없이 적용 가능함을 시뮬레이션 데이터로 설명하였고, 다음 회의까지 협력사가 검토 결과를 회신하기로 함. 특허팀은 제안 내용의 선출원 필요성을 검토하기로 함.",
  },
  {
    id: "MTG-2024-0206",
    projectCode: "PJT-2024-RF-0012",
    date: "2024-02-06",
    participants: ["김도현 (삼성 RF설계)", "최민석 (삼성 검증)", "박정우 (협력사 A)"],
    content:
      "협력사 A의 검토 결과를 공유함. 협력사는 기존 알고리즘 유지 시 성능 한계가 명확하다는 점에 동의하며, 삼성 제안 방식의 부분 채택을 수용함.\n\n삼성 검증팀은 상향 방식 적용 시 인접 대역 간섭 특성을 추가 검토할 것을 요청하였다. 삼성이 제시한 파라미터 셋을 기준으로 시제품 제작을 진행하기로 결정함.",
  },
  {
    id: "MTG-2024-0319",
    projectCode: "PJT-2024-RF-0012",
    date: "2024-03-19",
    participants: ["김도현 (삼성 RF설계)", "최민석 (삼성 검증)", "이수민 (삼성 특허팀)", "박정우 (협력사 A)"],
    content:
      "시제품 성능 검증 결과를 리뷰함. 삼성 제안 방식 적용 시 소비 전력이 목표 대비 18% 개선되었으며, 인접 대역 간섭도 규격 이내로 확인됨.\n\n최종 양산안으로 삼성 제안 방식이 채택되었다. 특허팀은 핵심 제안 파라미터에 대해 삼성 단독 명의 출원을 진행하기로 하였고, 협력사는 구현 지원 역할로 정리됨. 경쟁사에 대한 공급 제한 조건도 함께 검토 요청됨.",
  },
  {
    id: "MTG-2024-0508",
    projectCode: "PJT-2024-RF-0012",
    date: "2024-05-08",
    participants: ["김도현 (삼성 RF설계)", "이수민 (삼성 특허팀)", "정하늘 (삼성 구매)"],
    content:
      "양산 적용 계획을 확정함. 삼성 제안 방식이 2024년 하반기 양산 모델에 전면 적용될 예정이다. 구매팀은 경쟁사 공급 제한 요청을 협력사 계약 조건에 반영하기로 협의함.\n\n특허팀은 출원 진행 상황을 공유하였으며, 배타적 실시 권리 확보를 위한 후속 출원 전략을 수립하기로 함.",
  },
  // ---- PJT-2024-MEM-0088 ----
  {
    id: "MTG-2024-0221",
    projectCode: "PJT-2024-MEM-0088",
    date: "2024-02-21",
    participants: ["한지원 (삼성 메모리설계)", "오세훈 (협력사 B)", "이수민 (삼성 특허팀)"],
    content:
      "저전력 DRAM 리프레시 주기 최적화 방안을 논의함. 협력사 B가 온도 기반 적응형 리프레시 개념을 제안하였고, 삼성 설계팀이 이를 자사 셀 구조에 맞게 구체화하는 방향으로 협의함.\n\n제안 초기 아이디어의 기여 주체가 협력사와 삼성 양측에 걸쳐 있어, 기여도 정리가 필요하다는 의견이 제기됨.",
  },
  {
    id: "MTG-2024-0405",
    projectCode: "PJT-2024-MEM-0088",
    date: "2024-04-05",
    participants: ["한지원 (삼성 메모리설계)", "오세훈 (협력사 B)", "최민석 (삼성 검증)"],
    content:
      "적응형 리프레시 알고리즘의 초기 시뮬레이션 결과를 공유함. 협력사 B의 온도 센싱 로직과 삼성의 셀 특성 모델이 결합되어 대기 전력이 12% 감소함.\n\n양측 기여가 명확히 구분되지 않아 공동 개발 성격이 강하다는 점을 확인함. 향후 권리 귀속은 공동 협의가 필요함.",
  },
  {
    id: "MTG-2024-0617",
    projectCode: "PJT-2024-MEM-0088",
    date: "2024-06-17",
    participants: ["한지원 (삼성 메모리설계)", "오세훈 (협력사 B)", "이수민 (삼성 특허팀)"],
    content:
      "검증 결과를 바탕으로 양산 적용 여부를 논의함. 성능은 목표를 충족하였으나, 핵심 아이디어의 기여 주체 판단이 명확하지 않아 특허 출원 명의를 공동으로 할지 추가 검토가 필요함.\n\n특허팀은 각 회의록의 발언 기록을 근거로 기여도를 재정리하기로 함.",
  },
  // ---- PJT-2023-DISP-0203 ----
  {
    id: "MTG-2023-0904",
    projectCode: "PJT-2023-DISP-0203",
    date: "2023-09-04",
    participants: ["윤서연 (삼성 디스플레이)", "강태오 (협력사 C)"],
    content:
      "OLED 구동 IC의 휘도 보상 방식 개선을 논의함. 협력사 C가 룩업테이블 기반 보상 방식을 제안하였다. 삼성은 해당 방식의 메모리 오버헤드를 우려하며 대안을 검토하기로 함.",
  },
  {
    id: "MTG-2023-1102",
    projectCode: "PJT-2023-DISP-0203",
    date: "2023-11-02",
    participants: ["윤서연 (삼성 디스플레이)", "강태오 (협력사 C)", "최민석 (삼성 검증)"],
    content:
      "협력사 C의 룩업테이블 방식이 삼성 대안 대비 화질 균일도에서 우수함을 확인함. 삼성은 자체 대안을 철회하고 협력사 방식을 기준으로 진행하기로 함.\n\n핵심 보상 알고리즘의 원 제안자가 협력사임�� 회의록상 명확히 기록됨.",
  },
]

export const analysisResults: Record<string, AnalysisResult> = {
  "PJT-2024-RF-0012": {
    project_code: "PJT-2024-RF-0012",
    project_type: "반도체 · RF Front-End",
    elapsed_time: 12.4,
    facts: [
      { id: "F001", text: "삼성 RF설계팀이 RF Power 20% 상향 방식을 최초 제안함", meetingId: "MTG-2024-0112" },
      { id: "F002", text: "협력사 A는 양산 안정성을 이유로 기존 알고리즘 유지 의견 제시", meetingId: "MTG-2024-0112" },
      { id: "F005", text: "삼성이 수율 저하 없음을 시뮬레이션 데이터로 입증", meetingId: "MTG-2024-0112" },
      { id: "F008", text: "협력사 A가 삼성 제안 방식의 부분 채택 수용", meetingId: "MTG-2024-0206" },
      { id: "F012", text: "시제품에서 소비전력 18% 개선, 간섭 규격 이내 확인", meetingId: "MTG-2024-0319" },
      { id: "F014", text: "삼성 단독 명의 출원 결정, 협력사는 구현 지원 역할", meetingId: "MTG-2024-0319" },
      { id: "F017", text: "경쟁사 공급 제한 조건을 협력사 계약에 반영 협의", meetingId: "MTG-2024-0508" },
    ],
    judgements: [
      {
        group_id: "G001",
        topic: "RF Power 상향 구동 방식",
        issue: "핵심 구동 방식의 최초 제안 및 권리 귀속 주체 판단",
        exclusivity_holder: "Company S",
        confidence: "High",
        reasoning:
          "RF Power 20% 상향 구동 방식은 삼성 RF설계팀이 2024-01-12 회의에서 최초로 제안하였고, 이후 검증·시제품·양산 채택에 이르는 전 과정을 삼성이 주도하였다. 협력사는 초기에 유지 의견을 냈다가 부분 수용으로 선회했을 뿐 원 아이디어 기여가 없어 배타권 귀속은 삼성으로 판단된다.",
        supporting_facts: ["F001", "F005", "F012", "F014"],
        counter_arguments:
          "협력사 A가 양산 라인 파라미터 튜닝에 관여했다는 주장이 제기될 수 있으나, 이는 구현 지원 범위로 회의록상 원 제안 기여로 보기 어렵다.",
        recommendation:
          "삼성 단독 명의 출원을 신속히 진행하고, 협력사 기여를 구현 지원으로 명확히 문서화하여 향후 공동 발명 주장을 차단할 것.",
        legal_basis: {
          applicable_laws: ["특허법 제33조(특허를 받을 수 있는 자)", "특허법 제39조(공동발명)", "부정경쟁방지법 제2조"],
          has_exclusivity_clause: true,
          clause_summary:
            "협력사 계약서 제12조에 성과물의 권리가 삼성에 귀속되며, 경쟁사 공급을 제한하는 배타 조항이 포함되어 있음.",
          validity_period: "계약 체결일로부터 5년 (2024-05 ~ 2029-05)",
          enforcement_risk: "낮음 — 조항이 명확하고 회의록 근거가 일관됨",
          inventorship_analysis:
            "핵심 착상(RF Power 상향 개념)의 발명자는 삼성 RF설계팀으로 특정되며, 협력사 인원은 실질적 발명 기여가 확인되지 않음.",
          contribution_analysis:
            "삼성 기여도 약 85% (착상·검증·파라미터), 협력사 기여도 약 15% (양산 구현 지원)로 추정됨.",
          risk_factors: [
            "협력사 인원이 파라미터 최적화 회의에 참여한 기록이 있어 공동발명 주장 여지 존재",
            "경쟁사 공급 제한 조항의 경쟁법 위반 가능성 검토 필요",
          ],
          recommended_legal_actions: [
            "삼성 단독 명의 특허 출원 진행",
            "협력사 기여 범위 확인서 확보",
            "공급 제한 조항의 경쟁법 리뷰 실시",
          ],
        },
        evaluation_grade: {
          final_grade: "A2",
          tech_effect_grade: "A",
          competitor_applicability: "High",
          tech_gap: "2년 이상",
          tech_effect_reasoning: "소비전력 18% 개선으로 동급 대비 명확한 성능 우위를 확보함.",
          competitor_reasoning: "경쟁사가 동일 대역에서 채택할 유인이 높아 배타권의 사업적 가치가 큼.",
          tech_gap_reasoning: "유사 구현까지 최소 2년의 기술 격차가 예상되어 방어 가치가 높음.",
          grade_reasoning:
            "기술 효과 A, 경쟁사 적용 가능성 High, 기술 격차 2년 이상을 종합하여 최종 등급 A2로 산정함.",
        },
      },
      {
        group_id: "G002",
        topic: "경쟁사 공급 제한 조건",
        issue: "계약상 배타 조항의 유효성 및 경쟁법 리스크",
        exclusivity_holder: "Company S",
        confidence: "Medium",
        reasoning:
          "구매팀이 경쟁사 공급 제한 조건을 협력사 계약에 반영하기로 협의하였다. 계약상 배타권은 삼성에 귀속되나, 공급 제한 범위가 과도할 경우 경쟁법 이슈가 발생할 수 있어 신뢰도는 중간으로 판단된다.",
        supporting_facts: ["F017", "F014"],
        counter_arguments:
          "공급 제한 조항이 시장 봉쇄로 해석될 경우 공정거래법상 문제가 제기될 수 있다.",
        recommendation:
          "공급 제한 범위를 필요 최소한으로 한정하고, 기간·제품군을 명시하여 경쟁법 리스크를 완화할 것.",
        legal_basis: {
          applicable_laws: ["공정거래법 제45조(불공정거래행위)", "특허법 제100조(전용실시권)"],
          has_exclusivity_clause: true,
          clause_summary: "경쟁사에 대한 동일 기술 공급을 제한하는 조항이 계약 초안에 포함됨.",
          validity_period: "협의 중 (초안 기준 3년)",
          enforcement_risk: "중간 — 범위 과도 시 무효 가능성",
          inventorship_analysis: "해당 없음 (계약 조항 이슈)",
          contribution_analysis: "해당 없음",
          risk_factors: ["공급 제한 범위 과도 시 시장 봉쇄 판단 위험", "기간·대상 제품군 미확정"],
          recommended_legal_actions: ["공급 제한 조항 범위 축소", "경쟁법 사전 검토", "조항별 유효기간 명시"],
        },
        evaluation_grade: {
          final_grade: "B",
          tech_effect_grade: "B",
          competitor_applicability: "Medium",
          tech_gap: "1년",
          tech_effect_reasoning: "기술 자체보다 계약적 배타성에 의존하는 항목임.",
          competitor_reasoning: "계약 범위에 따라 경쟁사 영향도가 달라짐.",
          tech_gap_reasoning: "계약 기반이므로 기술 격차 개념 적용이 제한적임.",
          grade_reasoning: "계약 유효성 리스크를 반영하여 B 등급으로 산정함.",
        },
      },
    ],
    legal_perspective: {
      overall_analysis:
        "핵심 기술의 발명자성과 권리 귀속이 삼성으로 일관되게 확인되어 배타권 확보 가능성이 높다. 다만 경쟁사 공급 제한 조항은 경쟁법 관점의 정교한 설계가 필요하다.",
      common_legal_issues: [
        "협력사 참여로 인한 공동발명 주장 가능성",
        "경쟁사 공급 제한 조항의 경쟁법 적합성",
        "출원 명의 및 발명자 특정의 문서화",
      ],
      risk_assessment: {
        high_risk_groups: ["G002"],
        risk_summary:
          "G001은 리스크가 낮으나, G002의 공급 제한 조항은 범위 설정에 따라 경쟁법 위반 소지가 있어 우선 검토가 필요하다.",
      },
      strategic_recommendations: [
        "삼성 단독 명의 핵심 특허를 최우선 출원",
        "협력사 기여 범위 확인서를 확보하여 공동발명 리스크 차단",
        "공급 제한 조항을 경쟁법 관점에서 재설계",
        "후�� 개량 발명에 대한 포트폴리오 출원 전략 수립",
      ],
    },
    conclusion: {
      overall_exclusivity_status: "배타권 확보 가능 (삼성 단독)",
      confidence_level: "High",
      key_findings: [
        "핵심 구동 방식의 최초 제안·검증·채택을 삼성이 전 과정 주도",
        "협력사 기여는 구현 지원 범위로 한정됨",
        "계약상 배타 조항이 존재하나 경쟁법 검토 필요",
      ],
      action_items: [
        "삼성 단독 명의 특허 출원 진행",
        "협력사 기여 범위 확인서 확보",
        "공급 제한 조항 경쟁법 리뷰",
        "후속 개량 특허 출원 전략 수립",
      ],
    },
  },
  "PJT-2024-MEM-0088": {
    project_code: "PJT-2024-MEM-0088",
    project_type: "반도체 · DRAM",
    elapsed_time: 10.1,
    facts: [
      { id: "F101", text: "협력사 B가 온도 기반 적응형 리프레시 개념을 제안함", meetingId: "MTG-2024-0221" },
      { id: "F103", text: "삼성이 자사 셀 구조에 맞게 개념을 구체화하기로 협의", meetingId: "MTG-2024-0221" },
      { id: "F106", text: "협력사 센싱 로직과 삼성 셀 모델 결합으로 대기전력 12% 감소", meetingId: "MTG-2024-0405" },
      { id: "F109", text: "양측 기여가 명확히 구분되지 않아 공동 개발 성격 확인", meetingId: "MTG-2024-0405" },
      { id: "F112", text: "특허 출원 명의 공동 여부에 대한 추가 검토 필요", meetingId: "MTG-2024-0617" },
    ],
    judgements: [
      {
        group_id: "G001",
        topic: "온도 기반 적응형 리프레시",
        issue: "협력사 제안 개념과 삼성 구체화의 기여도 및 권리 귀속",
        exclusivity_holder: "Joint",
        confidence: "Medium",
        reasoning:
          "온도 기반 적응형 리프레시의 원 개념은 협력사 B가 제안하였으나, 실제 성능 구현은 삼성 셀 특성 모델과의 결합으로 달성되었다. 회의록상 양측 기여가 명확히 분리되지 않아 공동 귀속으로 판단되며, 추가 기여도 정리 전까지 단독 배타권 주장은 어렵다.",
        supporting_facts: ["F101", "F103", "F106", "F109"],
        counter_arguments:
          "삼성 셀 모델이 없으면 개념 구현이 불가능했으므로 실질 기여가 삼성에 더 크다는 주장이 가능하나, 원 착상 기여가 협력사에 있어 단독 귀속 근거로는 부족하다.",
        recommendation:
          "공동 출원을 전제로 지분 협의를 진행하되, 삼성 고유 셀 모델 부분은 별도 분리 출원하여 독자 권리를 확보할 것.",
        legal_basis: {
          applicable_laws: ["특허법 제39조(공동발명)", "특허법 제33조", "발명진흥법 제10조(직무발명)"],
          has_exclusivity_clause: false,
          clause_summary: "현 계약에 성과물 귀속을 명시한 배타 조항이 존재하지 않음.",
          validity_period: "해당 없음",
          enforcement_risk: "높음 — 공동 귀속으로 단독 실시·금지 청구가 제한됨",
          inventorship_analysis:
            "원 착상 발명자는 협력사 B, 구현 완성 발명자는 삼성으로 양측 공동발명자로 인정될 가능성이 높음.",
          contribution_analysis: "삼성 약 50%, 협력사 약 50%로 기여도가 균형에 가까워 단독 귀속 근거 부족.",
          risk_factors: [
            "배타 조항 부재로 협력사의 독자 실시·제3자 라이선스 가능성",
            "공동발명 시 상호 동의 없는 실시 제한",
            "기여도 입증 자료 부족",
          ],
          recommended_legal_actions: [
            "공동출원 및 지분 계약 체결",
            "삼성 고유 셀 모델 분리 출원",
            "회의록 기반 기여도 확인서 작성",
          ],
        },
        evaluation_grade: {
          final_grade: "B",
          tech_effect_grade: "B",
          competitor_applicability: "Medium",
          tech_gap: "1년",
          tech_effect_reasoning: "대기전력 12% 감소로 유의미하나 압도적 우위는 아님.",
          competitor_reasoning: "경쟁사도 유사 온도 기반 기법 접근이 가능함.",
          tech_gap_reasoning: "구현 난이도가 중간 수준으로 약 1년의 격차가 예상됨.",
          grade_reasoning: "공동 귀속 및 배타 조항 부재를 반영하여 B 등급으로 산정함.",
        },
      },
    ],
    legal_perspective: {
      overall_analysis:
        "기술 성능은 확인되나 권리 귀속이 공동 성격이 강하고 배타 조항이 부재하여 단독 배타권 확보에는 제약이 크다. 지분 계약과 분리 출원 전략이 핵심이다.",
      common_legal_issues: [
        "공동발명에 따른 단독 실시·금지권 제한",
        "성과물 귀속 조항 부재",
        "기여도 입증 자료 부족",
      ],
      risk_assessment: {
        high_risk_groups: ["G001"],
        risk_summary:
          "배타 조항 부재와 공동발명 성격으로 협력사의 독자 실시 리스크가 높아 계약적 보완이 시급하다.",
      },
      strategic_recommendations: [
        "협력사와 공동출원 지분 계약 우선 체결",
        "삼성 고유 셀 모델 부분 분리 출원",
        "성과물 귀속·라이선스 조항을 계약에 소급 반영 협의",
        "기여도 입증을 위한 회의록·실험데이터 정리",
      ],
    },
    conclusion: {
      overall_exclusivity_status: "부분 확보 가능 (공동 귀속)",
      confidence_level: "Medium",
      key_findings: [
        "원 개념은 협력사, 구현은 삼성으로 공동발명 성격",
        "성과물 귀속 배타 조항이 부재",
        "삼성 고유 셀 모델은 독자 출원 여지 있음",
      ],
      action_items: [
        "공동출원 지분 계약 체결",
        "삼성 고유 모델 분리 출원",
        "기여도 확인서 작성",
        "귀속 조항 계약 반영 협의",
      ],
    },
  },
  "PJT-2023-DISP-0203": {
    project_code: "PJT-2023-DISP-0203",
    project_type: "디스플레이 · OLED 구동 IC",
    elapsed_time: 8.6,
    facts: [
      { id: "F201", text: "협력사 C가 룩업테이블 기반 휘도 보상 방식을 제안함", meetingId: "MTG-2023-0904" },
      { id: "F203", text: "삼성이 메모리 오버헤드를 우려해 대안을 검토함", meetingId: "MTG-2023-0904" },
      { id: "F206", text: "협력사 방식이 화질 균일도에서 우수함을 확인", meetingId: "MTG-2023-1102" },
      { id: "F208", text: "삼성이 자체 대안을 철회하고 협력사 방식 채택", meetingId: "MTG-2023-1102" },
      { id: "F210", text: "핵심 알고리즘 원 제안자가 협력사임이 회의록상 명확히 기록", meetingId: "MTG-2023-1102" },
    ],
    judgements: [
      {
        group_id: "G001",
        topic: "룩업테이블 기반 휘도 보상",
        issue: "핵심 보상 알고리즘의 원 제안자 및 권리 귀속",
        exclusivity_holder: "Partner",
        confidence: "High",
        reasoning:
          "휘도 보상 핵심 알고리즘은 협력사 C가 원 제안자로 회의록상 명확히 기록되어 있으며, 삼성은 자체 대안을 철회하고 협력사 방식을 채택하였다. 삼성의 실질적 발명 기여가 확인되지 않아 배타권은 협력사에 귀속되는 것으로 판단된다.",
        supporting_facts: ["F201", "F206", "F208", "F210"],
        counter_arguments:
          "삼성이 메모리 최적화 등 구현 개선에 기여했다면 개량발명 여지가 있으나, 회의록상 채택 사실만 확인되어 근거가 약하다.",
        recommendation:
          "삼성 단독 배타권 주장은 지양하고, 협력사와의 라이선스·실시권 계약으로 사용 권리를 확보할 것.",
        legal_basis: {
          applicable_laws: ["특허법 제33조", "특허법 제100조(전용실시권)", "특허법 제102조(통상실시권)"],
          has_exclusivity_clause: false,
          clause_summary: "삼성에 유리한 성과물 귀속·배타 조항이 확인되지 않음.",
          validity_period: "해당 없음",
          enforcement_risk: "높음 — 권리가 협력사에 있어 삼성 배타권 행사 불가",
          inventorship_analysis: "원 제안자이자 발명자는 협력사 C로 특정됨.",
          contribution_analysis: "협력사 약 90%, 삼성 약 10%(채택·검증)로 추정됨.",
          risk_factors: [
            "협력사가 제3자(경쟁사)에 라이선스할 가능성",
            "삼성 실시권 미확보 시 사용 제약",
          ],
          recommended_legal_actions: [
            "협력사와 실시권(라이선스) 계약 체결",
            "가능 시 전용실시권 확보 협상",
            "개량발명 별도 출원 검토",
          ],
        },
        evaluation_grade: {
          final_grade: "C/D",
          tech_effect_grade: "C",
          competitor_applicability: "Low",
          tech_gap: "6개월 미만",
          tech_effect_reasoning: "화질 균일도 개선은 있으나 삼성 배타권 관점의 효과는 제한적임.",
          competitor_reasoning: "권리가 협력사에 있어 삼성 배타권으로서의 경쟁 방어 가치가 낮음.",
          tech_gap_reasoning: "일반적 룩업테이블 접근으로 기술 격차가 작음.",
          grade_reasoning: "권리 귀속이 협력사이고 삼성 기여가 미미하여 C/D 등급으로 산정함.",
        },
      },
    ],
    legal_perspective: {
      overall_analysis:
        "핵심 알고리즘 권리가 협력사에 명확히 귀속되어 삼성 단독 배타권 확보는 사실상 불가하다. 실시권 확보 중심의 계약 전략이 필요하다.",
      common_legal_issues: [
        "협력사 원천 권리에 대한 실시권 미확보",
        "성과물 귀속 조항 부재",
        "제3자 라이선스 리스크",
      ],
      risk_assessment: {
        high_risk_groups: ["G001"],
        risk_summary:
          "권리가 협력사에 있어 삼성이 사용조차 제약받을 수 있으므로 실시권 확보가 최우선 과제이다.",
      },
      strategic_recommendations: [
        "협력사와 실시권 계약 우선 체결",
        "가능 시 전용실시권으로 경쟁사 접근 차단",
        "삼성 독자 개량발명 출원 검토",
        "향후 프로젝트의 성과물 귀속 조항 표준화",
      ],
    },
    conclusion: {
      overall_exclusivity_status: "배타권 확보 곤란 (협력사 귀속)",
      confidence_level: "High",
      key_findings: [
        "핵심 알고리즘 원 제안자가 협력사로 명확",
        "삼성 자체 대안은 철회됨",
        "성과물 귀속·실시권 미확보 상태",
      ],
      action_items: [
        "협력사와 실시권 계약 체결",
        "전용실시권 확보 협상",
        "독자 개량발명 출원 검토",
        "성과물 귀속 조항 표준화",
      ],
    },
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
