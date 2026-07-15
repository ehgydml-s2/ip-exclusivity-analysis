import type { Judgement } from "./data"

export const SNPR20E1_JUDGEMENTS: Judgement[] = [
  {
    group_id: "G001",
    topic: "Sn PR 고순도화 개발",
    issue: "배타권 및 기술 귀속",
    impact: "P사가 S사의 양산 규격 충족을 위해 고순도 정제 라인 신설 및 용기/안정제 개발에 투자하고 실행함으로써, Sn PR의 양산 가능성을 확보하고 최종 스펙 확정에 기여했습니다. 이는 소재의 상업화에 필수적인 단계였습니다.",
    reasoning: "P사는 S사의 양산 규격(미반응 단량체 0.1% 이하)을 맞추기 위해 기존 공정의 한계를 인정하고(F057), 칼럼 크로마토그래피 공정을 추가한 고순도 정제 라인을 신설하겠다고 제안했습니다(F058). 또한, P사는 S사 제안 구조의 배타적 가치를 인정하여 정제 라인 투자를 진행하고(F061), 이에 따른 비용 증가분 협의를 요청했습니다(F062). P사는 개선된 고순도 샘플 공급(F059) 및 용기/안정제 개발 완료 목표(F079)를 제시하며 개발을 주도적으로 이행했습니다. 최종적으로 S사 D램 양산 라인 적용 가능한 Sn PR 스펙이 확정되었습니다(F080). 이 그룹에서는 P사의 자원 투입과 개발 실행이 S사보다 우세하게 나타나 P사에게 유리합니다.",
    counter_arguments: "S사는 양산 규격 충족을 위한 고순도 정제 라인 구축 필요성을 제기하고(F056), 최종 Sn PR 스펙을 확정하는 등(F080) 개발 방향을 제시하고 결과를 승인하는 역할을 수행했습니다.",
    recommendation: "P사의 정제 라인 투자 및 비용 증가분에 대한 구체적인 계약 조항을 확인하고, 해당 라인에서 생산되는 제품의 배타적 공급 조건에 대한 명확한 합의가 필요합니다.",
    legal_basis: {
      applicable_laws: ["CL001", "CV001"],
      contract_analysis: {
        has_exclusivity_clause: false,
        clause_summary: "P사가 S사 제안 구조(IP-B21-F)의 배타적 가치를 인정하여 정제 라인 투자를 진행하겠다고 언급했습니다(F060).",
        validity_period: "N/A",
        enforcement_risk: "P사의 투자 및 개발 기여가 명확하므로, 해당 정제 라인에서 생산되는 제품에 대한 P사의 권리 주장이 있을 수 있습니다. S사 제안 구조에 대한 배타적 가치 인정은 S사에 유리하나, 정제 라인 자체의 권리 귀속은 별도 검토가 필요합니다."
      },
      inventorship_analysis: "S사가 고순도 정제 라인 구축 필요성을 제기했으나(F056), P사가 기존 공정의 한계를 밝히고 칼럼 크로마토그래피 공정 추가 등 구체적인 해결 방안을 제안하고 실행했습니다(F057, F058).",
      contribution_analysis: "P사가 고순도 정제 라인 신설을 위한 투자(F061) 및 용기/안정제 개발(F079) 등 상당한 자원을 투입했습니다(F062). S사는 요구사항 제시 및 최종 스펙 확정 역할을 했습니다.",
      risk_factors: ["P사의 독자적인 정제 라인 투자 및 개발 비용 발생으로 인한 권리 주장 가능성", "정제 라인 자체의 소유권 및 사용권에 대한 명확한 계약 부재"],
      recommended_legal_actions: ["정제 라인 구축 및 운영에 대한 계약서 상 권리 귀속 조항 확인", "정제 공정 개선으로 인한 비용 증가분 분담 및 지분율 협의"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Partner",
    fact_count: 8,
    supporting_facts: ["F056", "F057", "F058", "F059", "F061", "F062", "F079", "F080"]
  },
  {
    group_id: "G002",
    topic: "Sn PR 개발 성공 및 검증",
    issue: "배타권 및 기술 귀속",
    impact: "S사가 제안한 '분지형 할로겐 말단 치환 리간드 구조' 기반의 Sn PR이 S사 파일럿 라인에서 수율 기준을 만족하고, 마이크로 브릿지 결함이 90% 이상 제거되는 등 핵심 성능이 검증되었습니다. 이는 무기물 PR의 세계 최초 양산 라인 적용이라는 기념비적인 성과로 이어져, 기술의 상업적 성공 가능성을 입증했습니다.",
    reasoning: "S사는 정제 공정이 개선된 최신 샘플을 D램 파일럿 라인에 투입하여 종합 평가를 수행했습니다(F063). 이 평가를 통해 S사가 제안한 '분지형 할로겐 말단 치환 리간드 구조' 기반의 Sn PR이 파일럿 수율 기준을 만족함을 확인했습니다(F065). P사 또한 삼성과의 긴밀한 협력 덕분에 무기물 PR의 고질적 문제인 Defect를 해결할 수 있었다고 인정했습니다(F067). 비록 P사가 무기물 PR의 세계 최초 양산 라인 적용 성과를 언급했지만(F096), S사의 주도적인 아이디어 제안과 그에 따른 성능 검증 결과가 S사의 배타권 주장을 강력하게 뒷받침합니다.",
    counter_arguments: "P사는 무기물 PR의 세계 최초 양산 라인 적용이라는 기념비적인 성과를 거두었다고 주장하며(F096), 이는 P사의 개발 및 양산 역량을 보여주는 중요한 근거입니다.",
    recommendation: "S사의 핵심 아이디어(리간드 구조)와 P사의 양산 적용 역량 간의 기여도를 명확히 구분하고, 계약서에 각자의 권리 범위를 상세히 명시해야 합니다.",
    legal_basis: {
      applicable_laws: ["PL001", "CL001"],
      contract_analysis: {
        has_exclusivity_clause: false,
        clause_summary: "N/A",
        validity_period: "N/A",
        enforcement_risk: "S사의 핵심 아이디어 제안과 성능 검증 결과가 명확하므로, 해당 구조에 대한 S사의 배타권 주장은 강하게 인정될 가능성이 높습니다."
      },
      inventorship_analysis: "S사가 '분지형 할로겐 말단 치환 리간드 구조'를 제안하고 그 성능을 검증하여 파일럿 수율 기준을 만족시켰습니다(F065). P사도 삼성과의 협력을 통해 Defect 문제를 해결했다고 인정했습니다(F067).",
      contribution_analysis: "S사는 파일럿 라인 투입 및 평가를 통해 기술 검증에 기여했습니다(F063). P사는 양산 라인 적용이라는 최종 성과에 기여했습니다(F096).",
      risk_factors: ["P사의 '세계 최초 양산 라인 적용' 주장이 전체 기술에 대한 P사의 기여도를 과대평가할 수 있음", "공동 개발의 성과에 대한 명확한 권리 배분 계약 부재"],
      recommended_legal_actions: ["S사 제안 구조에 대한 특허 출원 검토", "공동 개발 성과에 대한 지분율 및 권리 귀속 계약 명확화"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Company S",
    fact_count: 4,
    supporting_facts: ["F063", "F065", "F067", "F096"]
  },
  {
    group_id: "G003",
    topic: "Sn PR 양산 체제 구축",
    issue: "배타권 및 기술 귀속",
    impact: "P사가 2021년 양산 공급 체제 구축 목표를 세우고, 원재료 공급망(SCM) 및 품질 보증(QA) 체계 구축을 시작하는 등 양산화를 위한 실질적인 인프라를 구축했습니다. 이는 개발된 Sn PR의 상업적 성공을 위한 필수적인 단계이며, P사의 양산 역량을 입증합니다.",
    reasoning: "P사는 2021년 양산 공급 체제 구축 목표를 세웠으며(F071), 이를 위해 본사 차원에서 원재료 공급망(SCM) 및 품질 보증(QA) 체계 구축을 시작했습니다(F068). 또한, P사는 S사가 발송할 계약서 내 배타권 범위를 확인 후 서명하고, 2021년부터 본격적인 양산 공급에 차질이 없도록 하겠다고 밝히며 양산 이행 의지를 명확히 했습니다(F098). 이처럼 P사가 양산 체제 구축을 위한 구체적인 계획 수립과 실행에 주도적인 역할을 수행했으므로 P사에게 유리합니다.",
    counter_arguments: "S사는 Sn PR의 최종 양산화를 위한 안정성 검증 단계 진입이 가능하다고 판단하여(F066) 양산화의 다음 단계를 승인하는 역할을 했습니다.",
    recommendation: "P사의 양산 체제 구축에 대한 S사의 지원 범위와 P사의 독점적 공급 의무에 대한 계약 조항을 명확히 해야 합니다.",
    legal_basis: {
      applicable_laws: ["CL001"],
      contract_analysis: {
        has_exclusivity_clause: false,
        clause_summary: "N/A",
        validity_period: "N/A",
        enforcement_risk: "P사의 양산 인프라 구축 노력은 P사의 공급 역량을 강화하며, 향후 공급 계약 시 P사의 협상력을 높일 수 있습니다."
      },
      inventorship_analysis: "양산 체제 구축은 기술 아이디어 창출보다는 구현 및 상업화 단계에 해당합니다. P사가 주도적으로 양산 인프라를 구축했습니다.",
      contribution_analysis: "P사가 SCM 및 QA 체계 구축에 자원을 투입했습니다(F068).",
      risk_factors: ["P사의 양산 인프라 투자가 향후 배타적 공급 계약 조건에 영향을 미칠 수 있음", "양산 공급 계약의 세부 조건 및 권리 귀속에 대한 명확한 합의 부재"],
      recommended_legal_actions: ["양산 공급 계약서에 P사의 SCM/QA 체계 구축 비용 분담 및 독점 공급 의무 명시", "양산 공급 중단 시 대체 공급처 확보 방안 검토"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Partner",
    fact_count: 3,
    supporting_facts: ["F068", "F071", "F098"]
  },
  {
    group_id: "G004",
    topic: "Sn PR 원천 기술 기반",
    issue: "배타권 및 기술 귀속",
    impact: "P사는 Sn 원천 기술을 기반으로 1세대 샘플을 개발하여 사용하고 있었으며, 전체 Sn PR 원천 기술에 대한 S사의 독점권을 인정하지 않음을 명확히 했습니다. 이는 P사의 기존 기술적 기반과 독립적인 권리 주장을 확립하는 데 중요합니다.",
    reasoning: "P사는 자사의 Sn 원천 기술을 기반으로 1세대 샘플을 개발하여 사용하고 있음을 명시했습니다(F007). 또한, P사는 전체 Sn PR 원천 기술에 대한 S사의 독점권을 인정하지 않으며, S사가 제안하고 공동 최적화한 '특정 분지형 리간드 구조체(IP-B21-F 계열)'에 한해서만 독점적 권리 부여를 검토하겠다고 밝혀(F087), P사의 기존 원천 기술에 대한 권리를 명확히 주장했습니다. 이처럼 P사의 기존 기술 보유 및 권리 주장이 명확하므로 P사에게 유리합니다.",
    counter_arguments: "이 그룹 내에서는 S사에 유리한 Fact가 없습니다.",
    recommendation: "P사의 Sn 원천 기술 범위와 S사가 독점권을 주장하는 특정 리간드 구조체 기술 범위 간의 경계를 명확히 정의하고, 계약서에 이를 반영해야 합니다.",
    legal_basis: {
      applicable_laws: ["PL001", "CL002"],
      contract_analysis: {
        has_exclusivity_clause: false,
        clause_summary: "N/A",
        validity_period: "N/A",
        enforcement_risk: "P사의 Sn 원천 기술에 대한 독점권 주장은 강력한 법적 근거를 가질 수 있으며, S사는 P사의 원천 기술을 침해하지 않는 범위 내에서만 배타권을 주장해야 합니다."
      },
      inventorship_analysis: "P사가 Sn 원천 기술을 보유하고 1세대 샘플을 개발했습니다(F007).",
      contribution_analysis: "P사가 Sn 원천 기술을 개발하고 보유함으로써 핵심 기술 기반을 제공했습니다.",
      risk_factors: ["S사가 P사의 원천 기술 범위까지 배타권을 주장할 경우 법적 분쟁 발생 가능성", "P사의 원천 기술에 대한 특허 유효성 및 범위 확인 필요"],
      recommended_legal_actions: ["P사의 Sn 원천 기술 관련 특허 포트폴리오 분석", "S사 배타권 대상 기술과 P사 원천 기술 간의 기술적 경계 명확화"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Partner",
    fact_count: 2,
    supporting_facts: ["F007", "F087"]
  },
  {
    group_id: "G005",
    topic: "EUV PR 소재/레시피 개발",
    issue: "배타권 및 기술 귀속",
    impact: "S사는 분자 응집 방지 및 EUV 해상력 극대화를 위한 핵심 구조를 제안하고(F014), 감도 저하 문제의 원인을 분석했습니다(F035). P사는 할로겐 치환 후 현상액 용해도 특성 변화를 파악하고(F048), S사 구조에 최적화된 전용 유기 현상액 조성물을 추가 개발하여 패키지로 제안했습니다(F050, F051). P사는 이 전용 현상액을 삼성 배타적 공급 대상으로 관리하겠다고 밝혔습니다(F052). 이처럼 양측 모두 소재 및 레시피 개발에 중요한 기여를 했으며, 특히 P사는 S사 제안에 대한 구체적인 솔루션 개발 및 배타적 공급 의사를 표명했습니다.",
    reasoning: "S사는 분자 응집 방지 및 EUV 해상력 극대화를 위한 핵심 구조를 제안하고(F014), 분지형 리간드 두께가 EUV 반응을 차단하는 원인으로 분석하는 등(F035) 기술 아이디어 제안 및 문제 분석에 기여했습니다. 반면, P사는 S사의 제안에 따라 할로겐 치환 후 현상액 용해도 특성 변화를 파악하고(F048), S사의 IP-B21-F 구조에 최적화된 전용 유기 현상액 조성물을 추가 개발하여 패키지로 제안했습니다(F050, F051). P사는 이 전용 현상액을 삼성 배타적 공급 대상으로 관리하겠다고 밝히며(F052) 독점적 공급 의사를 표명했습니다. P사의 개발 및 독점 공급 의사 표현이 S사의 아이디어 제안보다 더 많은 Fact로 집계되었으나, S사의 초기 아이디어 제안이 핵심적이므로 배타권 주체는 Unclear로 판단됩니다.",
    counter_arguments: "S사는 핵심 구조 아이디어를 제안하고 문제 원인을 분석하는 등 개발의 방향성을 제시했습니다(F014, F035).",
    recommendation: "P사가 개발한 전용 현상액 조성물에 대한 IP 소유권 및 S사 독점 공급 계약 조건을 명확히 해야 합니다.",
    legal_basis: {
      applicable_laws: ["PL001", "CL002", "CL001"],
      contract_analysis: {
        has_exclusivity_clause: true,
        clause_summary: "P사가 개발한 전용 현상액을 IP-B21-F 구조에 특화된 것으로 보고, 삼성에 배타적으로 공급할 대상으로 관리하겠다고 밝혔습니다(F052).",
        validity_period: "N/A",
        enforcement_risk: "P사가 개발한 전용 현상액에 대한 S사 배타적 공급은 P사의 명시적 의사 표현에 기반하므로 법적 구속력이 높을 수 있습니다. 단, 계약서에 명확히 명시되어야 합니다."
      },
      inventorship_analysis: "S사가 핵심 구조 아이디어를 제안하고 문제 원인을 분석했으며(F014, F035), P사는 S사 구조에 최적화된 전용 현상액을 개발했습니다(F050, F051).",
      contribution_analysis: "S사는 기술 아이디어 및 문제 분석에 기여했고, P사는 구체적인 소재/레시피 개발 및 전용 현상액 개발에 기여했습니다.",
      risk_factors: ["전용 현상액의 IP 소유권이 P사에 있을 경우, S사의 배타적 사용권 확보를 위한 추가 협의 필요", "전용 현상액 개발에 대한 S사의 기여도 불명확"],
      recommended_legal_actions: ["전용 현상액 조성물에 대한 특허 출원 주체 및 권리 귀속 확인", "전용 현상액의 독점 공급 기간 및 조건 명시"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Unclear",
    fact_count: 6,
    supporting_facts: ["F014", "F035", "F048", "F050", "F051", "F052"]
  },
  {
    group_id: "G006",
    topic: "EUV PR 초기 문제점 및 요구",
    issue: "배타권 및 기술 귀속",
    impact: "S사는 차세대 EUV 공정 적용을 위해 Sn Oxide PR 물성 검토를 요청하고, 스핀 코팅 균일도, 박막 결함, 현상 후 잔막 특성 및 스컴 발생 등 초기 문제점을 명확히 제기했습니다. 이러한 S사의 구체적인 문제 제기와 요구사항은 협력사의 개발 방향을 설정하고 기술 개선을 유도하는 결정적인 역할을 했습니다.",
    reasoning: "S사는 차세대 EUV 공정 적용을 위해 Sn Oxide PR 물성 검토를 요청하며(F001), 현 스핀 코팅 공정의 균일도 확보가 선결 과제임을 지적했습니다(F003). 또한, 인프리아의 Sn Oxide 클러스터 원천 기술의 우수성에도 불구하고 현재 분자량 분포로는 박막 도포 시 결함 발생 우려가 있다고 의견을 제시했습니다(F005). 이후 현상 공정 후 미세 스컴 발생 문제 해결을 위해 IP-B21-F에 최적화된 전용 현상액 개발을 요청하는 등(F047) 지속적으로 기술적 문제점을 제기하고 구체적인 요구사항을 제시하며 개발을 주도했습니다. 이 그룹의 모든 방향성 Fact가 S사에 유리하므로 S사에게 유리합니다.",
    counter_arguments: "이 그룹 내에서는 P사에 유리한 Fact가 없습니다.",
    recommendation: "S사의 초기 문제 제기 및 요구사항이 개발 전반에 미친 영향을 계약서에 명확히 반영하여 S사의 기여도를 강조해야 합니다.",
    legal_basis: {
      applicable_laws: ["PL001", "CL001"],
      contract_analysis: {
        has_exclusivity_clause: true,
        clause_summary: "S사가 IP-B21-F에 최적화된 전용 현상액 개발을 요청하며 배타적 의사를 표현했습니다(F047).",
        validity_period: "N/A",
        enforcement_risk: "S사의 명확한 요구사항과 '전용'이라는 표현은 향후 개발된 현상액에 대한 S사의 독점적 권리 주장을 뒷받침할 수 있습니다."
      },
      inventorship_analysis: "S사가 초기 기술 아이디어 검토 요청 및 문제점 진단, 개선 방향 제시를 주도했습니다(F001, F003, F005, F047).",
      contribution_analysis: "S사는 기술 개발의 초기 방향 설정 및 문제점 진단에 기여했습니다.",
      risk_factors: ["초기 문제 제기 및 요구사항이 실제 개발 결과물에 미친 직접적인 기여도 입증 필요"],
      recommended_legal_actions: ["S사의 요구사항이 반영된 개발 결과물에 대한 S사의 권리 귀속 조항 명확화", "초기 기술 검토 및 문제점 분석 보고서 등 문서화된 증거 확보"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Company S",
    fact_count: 4,
    supporting_facts: ["F001", "F003", "F005", "F047"]
  },
  {
    group_id: "G007",
    topic: "EUV PR 성능 검증 및 개선",
    issue: "배타권 및 기술 귀속",
    impact: "S사는 분지형 리간드 도입으로 박막 균일도가 30% 이상 개선되었으나, 감도 저하 현상을 발견하고 그 원인을 분석했습니다. 또한, 전용 현상액 도입 후 스컴 문제를 해결했지만, 새로운 패턴 붕괴 및 마이크로 브릿지 결함을 발견하고 린스 공정의 표면장력 불균형을 원인으로 추정했습니다. 이러한 S사의 주도적인 성능 검증과 문제 해결 노력은 EUV PR 소재의 완성도를 높이는 데 결정적인 역할을 했습니다.",
    reasoning: "S사는 분지형 리간드 도입 후 박막 균일도 개선(30% 이상)과 감도 저하 현상을 확인하고(F034), 전용 현상액 도입 후 스컴 문제 해결 및 패턴 붕괴/마이크로 브릿지 결함 발생을 관찰하며(F053), 린스 공정 시 표면장력 불균형을 원인으로 추정하는 등(F054) 기술의 성능을 검증하고 문제점을 분석하며 개선 방향을 제시하는 역할을 주도했습니다. 이 그룹에서는 S사의 기술 평가 및 분석 역량이 명확하게 드러나 S사에게 유리합니다. 다만, Fact 수가 1개로 적어 판단 근거가 다소 부족할 수 있습니다.",
    counter_arguments: "Fact 수가 1개로 적어 판단 근거가 다소 부족합니다.",
    recommendation: "S사의 성능 검증 및 문제 분석 보고서 등 관련 문서들을 확보하여 S사의 기여도를 더욱 명확히 해야 합니다.",
    legal_basis: {
      applicable_laws: ["PL001", "CL001"],
      contract_analysis: {
        has_exclusivity_clause: false,
        clause_summary: "N/A",
        validity_period: "N/A",
        enforcement_risk: "S사의 주도적인 성능 검증 및 문제 분석은 S사의 기술적 기여를 입증하는 중요한 근거가 되며, 향후 배타권 주장에 긍정적인 영향을 미칠 수 있습니다."
      },
      inventorship_analysis: "S사가 분지형 리간드 도입의 효과와 문제점을 분석하고(F034), 패턴 붕괴 및 마이크로 브릿지 결함의 원인을 추정했습니다(F054).",
      contribution_analysis: "S사는 자체 평가 설비 및 인력을 투입하여 성능 검증 및 문제 분석을 수행했습니다.",
      risk_factors: ["P사의 개발 노력과 S사의 평가/분석 간의 기여도 비율에 대한 이견 발생 가능성"],
      recommended_legal_actions: ["S사의 평가 및 분석 결과가 반영된 기술 개선 사항에 대한 S사의 권리 주장 범위 명확화", "P사의 개발 결과물에 대한 S사의 평가 보고서 등 문서화된 증거 확보"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Company S",
    fact_count: 1,
    supporting_facts: ["F034"]
  },
  {
    group_id: "G008",
    topic: "차세대 EUV 소재 공동 개발",
    issue: "배타권 및 기술 귀속",
    impact: "P사가 차세대 EUV 공정용 소재의 공동 개발을 지속적으로 추진하겠다는 의지를 표명했습니다. 이는 향후 기술 협력의 가능성을 열어두는 제안이지만, 현재까지는 구체적인 개발 활동이나 성과로 이어지지 않았습니다.",
    reasoning: "이 그룹에는 배타권 방향성을 가진 Fact가 존재하지 않습니다. P사가 차세대 EUV 공정용 소재의 공동 개발을 지속적으로 추진하겠다는 의지를 표명한 Fact(F099)만 존재하며, 이는 특정 주체에게 유리하거나 불리하다고 판단하기 어렵습니다. 따라서 배타권 주체는 No Data로 판단됩니다.",
    counter_arguments: "이 그룹 내에서는 방향성 있는 Fact가 없어 반대 주장을 제시하기 어렵습니다.",
    recommendation: "차세대 공동 개발 추진 시, 초기 단계부터 IP 소유권, 배타권 범위, 개발 비용 분담 등 핵심 계약 조건을 명확히 합의해야 합니다.",
    legal_basis: {
      applicable_laws: ["CL001", "CV001"],
      contract_analysis: {
        has_exclusivity_clause: false,
        clause_summary: "N/A",
        validity_period: "N/A",
        enforcement_risk: "향후 공동 개발 시 배타권 관련 분쟁을 방지하기 위해 초기 계약 단계에서 명확한 조항 마련이 필수적입니다."
      },
      inventorship_analysis: "P사의 공동 개발 지속 추진 의지 표명만으로는 특정 발명자 인정 근거가 부족합니다.",
      contribution_analysis: "현재까지 자원 투입에 대한 정보가 없습니다.",
      risk_factors: ["향후 공동 개발 시 IP 소유권 및 배타권 범위에 대한 분쟁 발생 가능성"],
      recommended_legal_actions: ["차세대 공동 개발 착수 전, 포괄적인 공동 개발 계약서(JDA) 체결 검토", "개발 단계별 IP 귀속 및 배타권 조항 사전 합의"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "No Data",
    fact_count: 0,
    supporting_facts: []
  },
  {
    group_id: "G009",
    topic: "삼성 제안 기술 배타적 보호",
    issue: "배타권 및 기술 귀속",
    impact: "S사는 고해상도 구현을 위한 리간드 구조가 자사의 독자적 아이디어임을 명시하고 타사 공유를 금지할 것을 요구했습니다. P사는 S사의 독점적 사용 의사를 수용하여 샘플을 삼성 내부 평가용으로만 공급하고, S사 제안 구조의 배타적 가치를 인정하여 정제 라인 투자까지 진행했습니다. 최종적으로 P사는 S사 제안 구조의 배타적 권리를 인정하고 양산 공급 계약을 위한 법무 검토에 착수했으며, S사는 해당 기술을 배타권 DB에 등록할 예정입니다. 이는 S사 제안 기술에 대한 배타적 권리 확보의 결정적인 근거가 됩니다.",
    reasoning: "S사는 리간드 구조가 자사의 독자적 아이디어임을 명시하며 타사 공유를 엄격히 금지할 것을 요구했습니다(F016). P사는 이에 따라 샘플을 삼성 내부 평가용으로만 공급하고 타사 공급 계획이 없음을 재차 확인했으며(F022, F031), 삼성의 독자적 제안 구조에 대해 배타적 보호가 필요함을 인정했습니다(F040). 또한, P사는 IP-B21-F를 삼성 전용 개발품으로 관리하고(F041), 삼성 제안 구조의 배타적 가치를 인정하여 정제 라인 투자를 진행했습니다(F060). 최종적으로 P사는 삼성 제안 구조의 배타적 권리를 인정하며 양산 공급 계약 체결을 위한 법무 검토에 착수했고(F069), S사는 IP-B21-F 구조체를 삼성 배타권 DB에 등록하여 관리할 예정임을 밝혔습니다(F085). P사가 IP-B20 샘플을 독점 제조했다고 주장한 Fact(F030)가 P사에게 유리하지만, S사의 배타권 주장을 P사가 지속적으로 인정하고 수용하는 Fact가 압도적으로 많아 S사에게 유리합니다.",
    counter_arguments: "P사는 IP-B20 샘플을 삼성의 아이디어 기반으로 자사의 Sn 원천 기술을 결합하여 독점 제조했다고 주장했습니다(F030).",
    recommendation: "P사가 S사 제안 기술의 배타적 가치를 인정하고 투자까지 진행한 점을 계약서에 명확히 명시하여 S사의 배타적 권리를 강화해야 합니다.",
    legal_basis: {
      applicable_laws: ["CL002", "PL001"],
      contract_analysis: {
        has_exclusivity_clause: true,
        clause_summary: "S사는 리간드 구조가 자사의 독자적 아이디어이므로 타사 공유 절대 불가함을 요구했고(F016), P사는 IP-B21-F를 삼성 전용 개발품으로 관리하고(F041), 삼성 제안 구조(IP-B21-F)의 배타적 가치 및 권리를 인정하며 양산 공급 계약 체결을 위한 법무 검토에 착수했습니다(F060, F069).",
        validity_period: "N/A",
        enforcement_risk: "P사가 S사의 배타적 권리를 여러 차례 명시적으로 인정하고 관련 투자를 진행했으므로, 해당 기술에 대한 S사의 배타권 주장은 법적 구속력이 매우 높습니다."
      },
      inventorship_analysis: "S사가 독자적인 아이디어를 제안하고 타사 공유 불가 의사를 명확히 했습니다(F016).",
      contribution_analysis: "P사가 S사 제안 기술의 배타적 가치를 인정하고 정제 라인 투자(F060) 등 자원을 투입했습니다.",
      risk_factors: ["P사가 일부 사항(IP-B20 독점 제조 등)에 대해 상이한 주장을 할 가능성", "배타적 권리의 명확한 계약화 필요"],
      recommended_legal_actions: ["P사의 배타적 권리 인정 관련 모든 커뮤니케이션을 계약서에 명확히 반영", "P사와의 양산 공급 계약서 내 배타권 조항 확정"]
    },
    evaluation_grade: {
      tech_effect_grade: "N/A",
      tech_effect_reasoning: "N/A - 소재 과제",
      competitor_applicability: "N/A",
      competitor_reasoning: "N/A - 소재 과제",
      tech_gap: "N/A",
      tech_gap_reasoning: "N/A - 소재 과제"
    },
    claimed_holder: "Company S",
    fact_count: 7,
    supporting_facts: ["F016", "F022", "F030", "F031", "F040", "F041", "F060"]
  }
]
