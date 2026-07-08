export type MeetingMinute = {
  id: string
  projectCode: string
  date: string
  participants: string[]
  content: string
}

export type EvidenceItem = {
  text: string
  actor: "삼성" | "협력사" | "공동" | "기타"
}

export type TimelineStep = {
  label: string
  detail: string
}

export type ExclusivityLikelihood = "High" | "Medium" | "Low"
export type Attribution = "삼성" | "협력사" | "공동 기여" | "판단 보류"

export type AnalysisResult = {
  likelihood: ExclusivityLikelihood
  attribution: Attribution
  summary: string
  evidence: EvidenceItem[]
  timeline: TimelineStep[]
}

export type Project = {
  code: string
  name: string
}

export const projects: Project[] = [
  { code: "PJT-2024-RF-0012", name: "차세대 RF Front-End 전력 최적화" },
  { code: "PJT-2024-MEM-0088", name: "저전력 DRAM 리프레시 알고리즘" },
  { code: "PJT-2023-DISP-0203", name: "OLED 구동 IC 휘도 보상 기술" },
]

export const projectCodes = projects.map((p) => p.code)

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
      "협력사 C의 룩업테이블 방식이 삼성 대안 대비 화질 균일도에서 우수함을 확인함. 삼성은 자체 대안을 철회하고 협력사 방식을 기준으로 진행하기로 함.\n\n핵심 보상 알고리즘의 원 제안자가 협력사임이 회의록상 명확히 기록됨.",
  },
]

export const analysisResults: Record<string, AnalysisResult> = {
  "PJT-2024-RF-0012": {
    likelihood: "High",
    attribution: "삼성",
    summary:
      "핵심 기술인 RF Power 20% 상향 방식은 삼성 RF설계팀이 최초 제안하였고, 검증을 거쳐 최종 양산안으로 단독 채택되었습니다. 회의록 전반에서 삼성 주도의 제안·검증·채택 흐름이 일관되게 확인되어 배타권 주장 가능성이 높습니다.",
    evidence: [
      { text: "삼성이 RF Power 20% 상향을 최초 제안 (2024-01-12)", actor: "삼성" },
      { text: "협력사가 기존 알고리즘 유지 의견 제시", actor: "협력사" },
      { text: "삼성 제안이 최종 양산안으로 채택 (2024-03-19)", actor: "삼성" },
      { text: "핵심 파라미터에 대해 삼성 단독 명의 출원 진행", actor: "삼성" },
      { text: "경쟁사 공급 제한 요청 확인 (2024-05-08)", actor: "삼성" },
    ],
    timeline: [
      { label: "제안", detail: "RF Power 20% 상향 제안" },
      { label: "검토", detail: "협력사 검토·부분 수용" },
      { label: "실행", detail: "시제품 제작" },
      { label: "성능 검증", detail: "소비전력 18% 개선" },
      { label: "양산 적용", detail: "하반기 모델 전면 적용" },
    ],
  },
  "PJT-2024-MEM-0088": {
    likelihood: "Medium",
    attribution: "공동 기여",
    summary:
      "온도 기반 적응형 리프레시 개념은 협력사 B가 제안하였으나, 삼성 셀 구조 특성 모델과 결합되어 성능이 구현되었습니다. 회의록상 기여 주체가 명확히 구분되지 않아 공동 기여 성격이 강하며, 단독 배타권 주장에는 추가 기여도 정리가 필요합니다.",
    evidence: [
      { text: "협력사 B가 온도 기반 적응형 리프레시 개념 제안", actor: "협력사" },
      { text: "삼성 셀 특성 모델과 결합해 대기전력 12% 감소", actor: "공동" },
      { text: "양측 기여가 명확히 구분되지 않음", actor: "공동" },
      { text: "특허 출원 명의 공동 여부 추가 검토 필요", actor: "기타" },
    ],
    timeline: [
      { label: "제안", detail: "협력사 개념 제안" },
      { label: "구체화", detail: "삼성 셀 구조 반영" },
      { label: "검증", detail: "대기전력 12% 감소" },
      { label: "기여도 검토", detail: "공동 협의 진행" },
    ],
  },
  "PJT-2023-DISP-0203": {
    likelihood: "Low",
    attribution: "협력사",
    summary:
      "휘도 보상 핵심 알고리즘은 협력사 C가 원 제안자로 회의록상 명확히 기록되어 있으며, 삼성 대안은 철회되었습니다. 삼성 단독 배타권 주장 가능성은 낮은 것으로 판단됩니다.",
    evidence: [
      { text: "협력사 C가 룩업테이블 기반 보상 방식 제안", actor: "협력사" },
      { text: "삼성 대안 철회, 협력사 방식 채택", actor: "협력사" },
      { text: "핵심 알고리즘 원 제안자가 협력사임이 기록됨", actor: "협력사" },
    ],
    timeline: [
      { label: "제안", detail: "협력사 보상 방식 제안" },
      { label: "검토", detail: "삼성 대안 비교" },
      { label: "채택", detail: "협력사 방식 채택" },
    ],
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
