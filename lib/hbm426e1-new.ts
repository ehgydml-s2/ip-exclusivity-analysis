export const HBM426E1_NEW = {
  project_code: "HBM426E1",
  project_type: "설비",
  elapsed_time: 287.45,
  overall_conclusion: {
    summary: "HBM4 베이스 다이 개발 프로젝트는 S사와 A사의 전략적 협력을 통해 성공적으로 양산에 돌입했으며, 경쟁사 대비 뛰어난 성능을 달성했습니다. 핵심 베이스 다이 기술은 양사의 공동 개발 성과물로 정의되었고, 제3자 공급 시 양사 사전 협의가 필수적인 공동 소유 형태로 합의되었습니다. 다만, 각 사의 개별 핵심 기술은 독자 소유로 인정되어 향후 권리 범위에 대한 명확한 정의가 필요합니다.",
    overall_exclusivity_assessment: "Mixed",
    key_risks: [
      "공동 소유 기술과 각 사 독자 소유 기술 간의 경계 불분명으로 인한 향후 분쟁 가능성",
      "배타권 유효기간 및 위반 시 제재 조항 등 계약서 상 세부 조항 부재",
      "개발 과정에서의 자원(인력, 비용) 투입 비중에 대한 명확한 기록 부족"
    ],
    recommendations: [
      "HBM4 베이스 다이 관련 최종 계약서(MOU 외)를 면밀히 검토하여 배타권, 독점권, 제3자 공급 금지 조항의 구체적인 내용과 유효기간, 위반 시 제재 조항을 확인해야 합니다.",
      "공동 소유로 합의된 통합 기술과 각 사가 독자적으로 소유하는 개별 핵심 기술의 범위를 명확히 정의하고, 필요시 특허 출원 전략을 수립해야 합니다.",
      "향후 공동 개발 프로젝트를 위해 각 사의 개발비, 인력, 설비 투입 비중에 대한 상세한 기록 및 합의 절차를 마련해야 합니다."
    ]
  },
  judgements: [
    {
      group_id: "G001",
      topic: "양사 공동 개발 과정",
      issue: "개발 주체",
      impact: "양사 기술 아이디어의 복합적인 결합과 공동 최적화는 HBM4 베이스 다이 개발의 성공에 필수적이었으며, 특정 기술적 난관은 단독 해결이 불가능했음을 시사하여 프로젝트의 전반적인 성공에 결정적인 영향을 미쳤습니다.",
      reasoning: "이 그룹에는 배타권 방향성을 가진 Fact가 없습니다. 그러나 타임라인에 따르면, 양사는 초기 기술 로드맵 및 역할 분담 논의를 시작(F008)하고, 기술 통합 시 예상되는 인터페이스 이슈를 사전 논의(F012)했습니다. 특히, 특정 이슈는 단독으로는 해결 불가능했다는 언급(F038)과 양사 공동 최적화 작업 수행(F033)은 공동 개발의 필요성과 양사 협력의 가치를 강조합니다. 최종 설계 또한 양사 기술 아이디어의 복합적인 결합 결과(F043)로 평가되었습니다.",
      counter_arguments: "방향성 있는 Fact가 없어 특정 주체에 유리한 주장을 펼치기 어렵습니다.",
      recommendation: "공동 개발 과정에서 각 사의 구체적인 역할과 기여도를 명확히 문서화하고, 특히 단독 해결 불가능했던 이슈에 대한 각 사의 기술적 기여를 상세히 기록해야 합니다.",
      legal_basis: {
        applicable_laws: ["CV001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "양사의 기술 아이디어가 복합적으로 결합된 결과로, 특정 발명자를 단독으로 인정하기 어렵습니다.",
        contribution_analysis: "양사 공동 최적화 및 기술 통합을 통해 개발이 진행되었으나, 개발비, 인력, 설비 투입 비중에 대한 구체적인 정보는 부족합니다.",
        risk_factors: [
          "공동 개발 과정에서 각 사의 기여도에 대한 정량적 근거 부족",
          "단독 해결 불가능했던 이슈에 대한 각 사의 구체적인 기술적 기여 범위 불명확"
        ],
        recommended_legal_actions: [
          "공동 개발 계약서에 각 사의 기여도 산정 기준 및 지분 비율을 명확히 명시하도록 검토",
          "공동 개발 과정에서 발생한 특허 출원 시 발명자 기여도를 명확히 구분하여 등재하도록 협의"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "1등급",
        tech_effect_reasoning: "양사 기술 아이디어의 복합적인 결합과 공동 최적화가 HBM4 베이스 다이 개발에 필수적이었으며, 특정 이슈는 단독 해결이 불가능했음을 언급하여 통합 없이는 Integration이 불가능했음을 시사합니다.",
        competitor_applicability: "정보 부족",
        competitor_reasoning: "회의록에 경쟁사 적용 가능성에 대한 명시적인 정보가 부족합니다.",
        tech_gap: "대",
        tech_gap_reasoning: "특정 기술적 난관이 단독으로는 해결 불가능했다고 언급되어, 상당한 기술 격차를 시사합니다.",
        final_grade: "A1",
        grade_reasoning: "양사 기술 시너지를 통한 공동 개발 성과"
      },
      claimed_holder: "No Data",
      fact_count: 0,
      supporting_facts: []
    },
    {
      group_id: "G002",
      topic: "공동 개발 성과 보호",
      issue: "권리 귀속 및 보호",
      impact: "공동 개발 성과물에 대한 제3자 공급 시 양사 사전 협의 필요 조항은 HBM4 베이스 다이 기술의 독점적 활용을 보장하고, 시장에서의 경쟁 우위를 유지하는 데 핵심적인 역할을 합니다.",
      reasoning: "이 그룹에는 배타권 방향성을 가진 Fact가 없습니다. 그러나 타임라인에 따르면, S사는 베이스 다이 기술을 양사 공동 소유로 하되 개별 핵심 기술은 각사 소유로 유지할 것을 제안(F053)했습니다. 또한, S사는 공동 개발 성과물 보호의 필요성을 강조(F056)하고, 제3자 공급 시 양사 사전 협의가 필요하다는 조건을 제시(F055)했으며, P사도 이에 동의하고 수용(F063, F062)했습니다. 이는 공동 개발 성과물에 대한 양사의 공동 통제권이 확립되었음을 의미합니다.",
      counter_arguments: "방향성 있는 Fact가 없어 특정 주체에 유리한 주장을 펼치기 어렵습니다.",
      recommendation: "공동 개발 성과물 보호를 위한 구체적인 계약 조항을 명문화하고, 제3자 공급 시 협의 절차 및 위반 시 제재 조항을 명확히 해야 합니다.",
      legal_basis: {
        applicable_laws: ["CL002"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "공동 개발 성과물 보호에 대한 합의는 발명자 인정보다는 개발 결과물의 권리 귀속 및 활용에 초점을 맞춥니다.",
        contribution_analysis: "공동 개발 성과물 보호는 양사의 공동 기여를 전제로 하며, 각 사의 기여도에 따라 권리 행사에 대한 지분 비율을 정할 수 있습니다.",
        risk_factors: [
          "계약서에 명시된 배타권 유효기간 및 위반 시 제재 조항의 부재",
          "공동 소유 기술의 범위와 개별 핵심 기술의 범위 간의 잠재적 충돌"
        ],
        recommended_legal_actions: [
          "공동 개발 계약서에 배타권 및 제3자 공급 금지 조항의 구체적인 내용과 유효기간, 위반 시 손해배상 조항을 명시하도록 검토",
          "비밀유지 조항(NDA)의 유효성을 재확인하고, 기술 유출 방지 대책을 강화"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "정보 부족",
        tech_effect_reasoning: "회의록에 해당 그룹의 기술 효과에 대한 명시적인 정보가 부족합니다.",
        competitor_applicability: "정보 부족",
        competitor_reasoning: "회의록에 경쟁사 적용 가능성에 대한 명시적인 정보가 부족합니다.",
        tech_gap: "정보 부족",
        tech_gap_reasoning: "회의록에 기술 격차에 대한 명시적인 정보가 부족합니다.",
        final_grade: "A1",
        grade_reasoning: "공동 개발 성과물의 공동 보호 체계 확립"
      },
      claimed_holder: "No Data",
      fact_count: 0,
      supporting_facts: []
    },
    {
      group_id: "G003",
      topic: "HBM4 개발 협력 개시",
      issue: "기술 아이디어 제안 및 목표 설정",
      impact: "HBM4 베이스 다이 고도화의 필요성 제기 및 경쟁사 대비 기술 우위 확보 목표는 프로젝트의 전략적 중요성을 부각하며, 양사 기술 결합을 통한 차세대 AI 칩 시장 선도 목표는 시장에서의 독점적 지위 확보에 기여합니다.",
      reasoning: "이 그룹의 배타권 주체는 'Joint'로 판단됩니다. S사는 HBM4 베이스 다이 고도화의 필요성을 제기하고(F002), A사의 첨단 로직 공정 기술과 자사의 HBM 메모리 기술 결합을 목표로 제시(F003)했습니다. 특히 S사는 2026년 HBM4 양산을 통해 '경쟁사 대비 기술 우위 확보' 전략을 밝혔으며(F004, S사 우호), A사는 자사의 CoWoS 2.5D 패키징 및 첨단 로직 공정 기술로 HBM 베이스 다이 개선에 협력할 의향을 표명(F005, P사 우호)했습니다. 이는 양사가 각자의 핵심 기술을 바탕으로 공동의 목표를 설정하고 협력을 개시했음을 보여줍니다.",
      counter_arguments: "양사 모두 프로젝트 초기 단계에서 각자의 핵심 기술 기여 의사를 명확히 했으므로, 어느 한쪽의 독점적 아이디어 제안으로 보기 어렵습니다.",
      recommendation: "MOU 체결 시점의 기술 아이디어 제안 및 목표 설정에 대한 상세한 기록을 검토하여 각 사의 초기 기여도를 명확히 해야 합니다.",
      legal_basis: {
        applicable_laws: ["PL001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "S사는 HBM4 베이스 다이 고도화의 필요성을 제기하고 경쟁사 대비 기술 우위 확보 목표를 제시했으며, A사는 자사의 첨단 로직 공정 기술을 활용한 개선 협력 의향을 표명하여 양측 모두 기술 아이디어 창출에 기여했습니다.",
        contribution_analysis: "초기 단계에서는 주로 기술 아이디어 제안 및 목표 설정에 대한 기여가 있었으며, 자원 투입에 대한 구체적인 정보는 부족합니다.",
        risk_factors: [
          "초기 아이디어 제안 단계에서 각 사의 기여 범위에 대한 명확한 문서화 부족",
          "MOU 단계에서 배타권 관련 명시적 조항 부재"
        ],
        recommended_legal_actions: [
          "MOU에 명시된 기술 협력 범위 및 목표에 대한 법률적 검토를 통해 각 사의 권리 범위를 재확인",
          "향후 유사 프로젝트 진행 시 초기 단계부터 권리 귀속 조항을 명확히 포함하도록 계약서 작성 가이드라인 강화"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "정보 부족",
        tech_effect_reasoning: "회의록에 해당 그룹의 기술 효과에 대한 명시적인 정보가 부족합니다.",
        competitor_applicability: "고",
        competitor_reasoning: "S사가 HBM4 양산을 통해 경쟁사 대비 기술 우위를 확보하겠다는 전략을 명시하여, 해당 기술이 경쟁사에 적용될 경우 기술 격차 유지를 위해 보호가 필요함을 시사합니다.",
        tech_gap: "정보 부족",
        tech_gap_reasoning: "회의록에 기술 격차에 대한 명시적인 정보가 부족합니다.",
        final_grade: "A1",
        grade_reasoning: "양사 공동의 기술 아이디어 제안 및 목표 설정"
      },
      claimed_holder: "Joint",
      fact_count: 2,
      supporting_facts: ["F004", "F005"]
    },
    {
      group_id: "G004",
      topic: "S사 HBM4 개발 기여",
      issue: "개발 및 소유권 주장",
      impact: "S사가 HBM 스택 통합, 메모리 인터페이스, 제조 및 최종 조립을 담당하고 해당 기술에 대한 독자 소유권을 주장하는 것은 HBM4의 핵심 기능 구현과 시장 출시를 가능하게 하는 결정적인 기여이며, S사의 배타권 주장을 강화합니다.",
      reasoning: "이 그룹의 배타권 주체는 'Company S'로 판단됩니다. S사는 HBM 스택 통합 및 메모리 인터페이스 개발을 담당(F044)하고, 메모리 스택 제조 및 최종 조립을 담당(F049)했습니다. 또한, HBM4 베이스 다이의 최종 사양을 확정(F050)했으며, 특히 HBM 메모리 스택 및 인터페이스 설계에 대한 독자 소유권을 주장(F054)했습니다. 이는 S사가 HBM4 개발의 핵심 영역에서 주도적인 역할을 수행하고 해당 기술에 대한 명확한 권리를 주장하는 근거가 됩니다.",
      counter_arguments: "일부 기술은 A사와의 공동 개발 및 통합 과정에서 상호 보완적으로 발전했을 가능성이 있습니다.",
      recommendation: "S사가 독자 소유권을 주장하는 HBM 메모리 스택 및 인터페이스 설계에 대한 구체적인 개발 이력과 기여도를 상세히 문서화하고, 관련 특허 출원 현황을 확인해야 합니다.",
      legal_basis: {
        applicable_laws: ["PL001", "PL002", "CL002"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "S사가 HBM 스택 통합 및 메모리 인터페이스 설계에 대한 독자 소유권을 주장하는 것은 해당 기술의 발명자가 S사 내부 인력임을 시사합니다.",
        contribution_analysis: "S사가 HBM 스택 통합, 메모리 인터페이스 개발, 메모리 스택 제조 및 최종 조립을 담당하여 HBM4 개발에 상당한 자원(인력, 설비)을 투입했음을 보여줍니다.",
        risk_factors: [
          "S사가 주장하는 독자 소유 기술의 범위가 공동 개발된 통합 기술과 중첩될 가능성",
          "독자 소유권 주장에 대한 A사의 명시적 동의 여부 불확실"
        ],
        recommended_legal_actions: [
          "S사 독자 소유 주장 기술에 대한 특허 출원 현황 및 권리 범위를 확인",
          "공동 개발 계약서에 S사의 독자 소유 기술 목록을 명시하고 A사의 동의를 확보"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "정보 부족",
        tech_effect_reasoning: "회의록에 해당 그룹의 기술 효과에 대한 명시적인 정보가 부족합니다.",
        competitor_applicability: "정보 부족",
        competitor_reasoning: "회의록에 경쟁사 적용 가능성에 대한 명시적인 정보가 부족합니다.",
        tech_gap: "정보 부족",
        tech_gap_reasoning: "회의록에 기술 격차에 대한 명시적인 정보가 부족합니다.",
        final_grade: "A1",
        grade_reasoning: "S사의 핵심 기술 기여 및 독자 소유권 주장"
      },
      claimed_holder: "Company S",
      fact_count: 3,
      supporting_facts: ["F044", "F049", "F054"]
    },
    {
      group_id: "G005",
      topic: "HBM4 양산 및 성과",
      issue: "양산 성공 및 시장 경쟁력",
      impact: "HBM4의 성공적인 양산 개시와 AI 칩 시장에서의 경쟁 우위 확보는 양사 협력의 최종 목표 달성을 의미하며, 이는 HBM4 베이스 다이 기술의 시장 가치와 독점적 활용 가능성을 입증하는 중요한 성과입니다.",
      reasoning: "이 그룹의 배타권 주체는 'Unclear'로 판단됩니다. S사는 HBM4 양산 공식 개시를 발표하며(F064, S사 우호), A사와의 공동 개발 베이스 다이 적용을 언급했습니다. 반면, P사는 HBM4 양산 성공을 A사와 S사의 전략적 협력 성과로 평가(F069, P사 우호)하고, AI 칩 시장에서 경쟁 우위를 확보했으며 Nvidia 등 주요 고객사로부터 긍정적인 평가를 받았다고 밝혔습니다(F071, P사 우호). S사 우호 Fact 1개, P사 우호 Fact 2개로 P사 주장이 다소 우세하나, 'Unclear' 범위(60~70%)에 해당합니다.",
      counter_arguments: "양산 성공 및 시장 성과는 양사의 공동 노력의 결과로 평가되었으므로, 어느 한쪽의 독점적 성과로 주장하기 어렵습니다.",
      recommendation: "HBM4 양산 성공에 대한 각 사의 구체적인 기여도(예: 수율 개선, 생산 효율)를 정량적으로 분석하고, 시장 경쟁 우위 확보에 대한 각 사의 역할을 명확히 해야 합니다.",
      legal_basis: {
        applicable_laws: ["CL001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "양산 및 시장 성과는 기술 아이디어 창출보다는 개발된 기술의 상업적 구현 및 시장 적용에 해당합니다.",
        contribution_analysis: "양산 성공은 양사의 공동 개발 및 협력의 결과로, 각 사의 생산 및 시장화 기여도를 종합적으로 고려해야 합니다.",
        risk_factors: [
          "양산 성공 및 시장 성과에 대한 각 사의 기여도에 대한 정량적 근거 부족",
          "공동 개발 성과물에 대한 제3자 공급 시 협의 조항의 구체적인 이행 절차 미비"
        ],
        recommended_legal_actions: [
          "HBM4 양산 및 판매 수익 배분 관련 계약 조항을 검토하여 각 사의 권리 및 의무를 확인",
          "AI 칩 시장에서의 경쟁 우위 확보에 기여한 각 사의 기술적, 사업적 역할을 명확히 문서화"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "정보 부족",
        tech_effect_reasoning: "회의록에 해당 그룹의 기술 효과에 대한 명시적인 정보가 부족합니다.",
        competitor_applicability: "고",
        competitor_reasoning: "HBM4 양산 성공을 통해 AI 칩 시장에서 경쟁 우위를 확보했다고 언급되어, 해당 기술이 경쟁사에 적용될 경우 시장 지위에 큰 영향을 미칠 수 있음을 시사합니다.",
        tech_gap: "정보 부족",
        tech_gap_reasoning: "회의록에 기술 격차에 대한 명시적인 정보가 부족합니다.",
        final_grade: "A1",
        grade_reasoning: "양사 협력의 최종 목표 달성 및 시장 성과"
      },
      claimed_holder: "Unclear",
      fact_count: 3,
      supporting_facts: ["F064", "F069", "F071"]
    },
    {
      group_id: "G006",
      topic: "프로토타입 성능 검증",
      issue: "기술 성능 개선",
      impact: "경쟁사 대비 전력 효율 20%, 대역폭 30% 향상 달성은 HBM4 베이스 다이 기술의 핵심적인 경쟁 우위를 확보했음을 입증하며, 이는 시장에서의 독점적 지위와 높은 경제적 가치를 부여합니다.",
      reasoning: "이 그룹의 배타권 주체는 'Company S'로 판단됩니다. S사는 HBM4 양산 개시 시점에서 '경쟁사 대비 전력 효율 20%, 대역폭 30% 향상'을 달성했다고 발표했습니다(F066, S사 우호). 이는 S사가 주도적으로 성능 개선 목표를 설정하고 달성했음을 시사하며, S사의 기술적 성과를 강조합니다. 이 외의 Fact들은 중립적인 성능 개선 확인에 해당합니다.",
      counter_arguments: "1차 프로토타입 평가에서는 S사(F018)와 A사(F020)의 개별 기여가 모두 확인되었으므로, 최종 성능 개선이 S사 단독의 성과라고 주장하기는 어렵습니다.",
      recommendation: "최종 성능 개선에 대한 S사와 A사의 구체적인 기여도를 정량적으로 분석하고, 각 사의 기술이 전체 성능 향상에 미친 영향을 명확히 해야 합니다.",
      legal_basis: {
        applicable_laws: ["PL001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "성능 개선은 S사의 전력 관리 회로(F018)와 A사의 로직 공정(F020) 등 양사의 개별 기술 기여가 통합된 결과이므로, 특정 발명자를 단독으로 인정하기 어렵습니다.",
        contribution_analysis: "S사가 최종 성능 개선 결과를 발표했으나, 1차 프로토타입 단계에서 양사의 기여가 모두 확인되었으므로 공동 기여로 판단됩니다.",
        risk_factors: [
          "최종 성능 개선에 대한 S사 단독 기여 주장의 근거 부족",
          "양사 기술 통합 효과에 대한 명확한 기여도 배분 기준 부재"
        ],
        recommended_legal_actions: [
          "성능 개선 관련 특허 출원 시 발명자 기여도를 명확히 구분하여 등재하도록 협의",
          "성능 개선에 대한 각 사의 기술적 기여를 정량적으로 평가할 수 있는 기준 마련"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "1등급",
        tech_effect_reasoning: "경쟁사 대비 전력 효율 20%, 대역폭 30% 향상을 달성했다는 점은 HBM4의 핵심 성능을 크게 개선하여 Integration에 결정적인 기여를 했음을 의미합니다.",
        competitor_applicability: "고",
        competitor_reasoning: "경쟁사 대비 성능 향상을 명시적으로 언급하여, 해당 기술이 경쟁사에 노출될 경우 기술 격차 유지를 위해 보호가 필요함을 시사합니다.",
        tech_gap: "대",
        tech_gap_reasoning: "경쟁사 대비 전력 효율 20%, 대역폭 30% 향상은 상당한 기술 격차를 의미하며, 이는 2년 이상의 기술 우위를 확보했을 가능성이 높습니다.",
        final_grade: "A1",
        grade_reasoning: "경쟁사 대비 성능 향상 달성"
      },
      claimed_holder: "Company S",
      fact_count: 1,
      supporting_facts: ["F066"]
    },
    {
      group_id: "G007",
      topic: "개별 기술 기여 및 제안",
      issue: "기술 아이디어 제안 및 구현",
      impact: "S사의 전력 관리 회로, 인터페이스 재설계, 온도 센서 통합 제안과 P사의 차폐 구조 적용, 오류 정정 로직 추가 제안은 HBM4 베이스 다이의 기능성과 효율성을 향상시키는 데 직접적으로 기여하여 제품의 기술적 완성도를 높였습니다.",
      reasoning: "이 그룹의 배타권 주체는 'Unclear'로 판단됩니다. S사는 전력 관리 회로가 효율 향상에 기여(F019, S사 우호)하고, 인터페이스를 재설계(F030, S사 우호)했으며, 온도 센서 통합을 제안(F036, S사 우호)했습니다. 반면, P사는 차폐 구조를 적용(F031, P사 우호)하고, 오류 정정 로직 추가를 제안(F039, P사 우호)했습니다. S사 우호 Fact 3개, P사 우호 Fact 2개로 S사 주장이 다소 우세하나, 'Unclear' 범위(60~70%)에 해당합니다.",
      counter_arguments: "양사 모두 HBM4 베이스 다이의 핵심 기능 개선을 위한 독자적인 아이디어를 제안하고 구현에 기여했으므로, 어느 한쪽의 독점적 기여로 보기 어렵습니다.",
      recommendation: "각 사가 제안하고 구현한 개별 기술 아이디어에 대한 특허 출원 현황을 확인하고, 해당 기술이 HBM4 베이스 다이 전체 시스템에 미친 영향을 정량적으로 평가해야 합니다.",
      legal_basis: {
        applicable_laws: ["PL001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "S사는 전력 관리 회로, 인터페이스 재설계, 온도 센서 통합을, P사는 차폐 구조 적용, 오류 정정 로직 추가를 제안하여 양측 모두 기술적 아이디어 창출에 실질적으로 기여했습니다.",
        contribution_analysis: "양사가 각자의 전문 분야에서 개별 기술 아이디어를 제안하고 구현에 참여하여 HBM4 개발에 기여했습니다.",
        risk_factors: [
          "개별 기술 아이디어가 최종 통합 제품에 미친 영향에 대한 기여도 산정의 어려움",
          "각 사의 독자 소유 주장 기술과 공동 소유 기술 간의 경계 모호성"
        ],
        recommended_legal_actions: [
          "각 사의 개별 기술 아이디어에 대한 특허 출원 및 권리 확보 현황을 법무팀에서 검토",
          "공동 개발 계약서에 개별 기술 아이디어의 권리 귀속 및 활용 방안을 명확히 명시하도록 보완"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "2등급",
        tech_effect_reasoning: "S사의 전력 관리 기능 통합과 P사의 신호 처리 로직 추가 제안은 HBM 스택 효율성 및 GPU 연결 성능 향상에 기여하여 Integration에 긍정적인 영향을 미쳤습니다.",
        competitor_applicability: "정보 부족",
        competitor_reasoning: "회의록에 경쟁사 적용 가능성에 대한 명시적인 정보가 부족합니다.",
        tech_gap: "정보 부족",
        tech_gap_reasoning: "회의록에 기술 격차에 대한 명시적인 정보가 부족합니다.",
        final_grade: "A1",
        grade_reasoning: "양사의 개별 기술 아이디어 제안 및 구현"
      },
      claimed_holder: "Unclear",
      fact_count: 5,
      supporting_facts: ["F019", "F030", "F031", "F036", "F039"]
    },
    {
      group_id: "G008",
      topic: "양사 기술 아이디어 통합",
      issue: "기술 통합 및 적용",
      impact: "S사의 전력 관리 기능과 P사의 신호 처리 로직을 통합 검토하고, 2차 프로토타입에 양사의 아이디어를 통합 적용하기로 결정한 것은 HBM4 베이스 다이의 복합적인 기능 구현에 필수적이었으며, 최종 제품의 성능 향상에 직접적인 영향을 미쳤습니다.",
      reasoning: "이 그룹에는 배타권 방향성을 가진 Fact가 없습니다. 그러나 타임라인에 따르면, P사는 S사가 제안한 전력 관리 기능과 자사의 신호 처리 로직을 통합하여 검토할 필요성을 제기(F015)했습니다. 이후 1차 프로토타입 평가 후, 2차 프로토타입 개발 시 양사의 아이디어를 통합하여 적용하기로 결정(F028)했습니다. 이는 양사의 개별 기술 아이디어가 HBM4 베이스 다이 개발 과정에서 상호 보완적으로 통합되었음을 보여줍니다.",
      counter_arguments: "방향성 있는 Fact가 없어 특정 주체에 유리한 주장을 펼치기 어렵습니다.",
      recommendation: "양사 기술 아이디어 통합 과정에서 각 사의 구체적인 역할과 기여도를 상세히 문서화하고, 통합된 기술에 대한 권리 귀속 방안을 명확히 해야 합니다.",
      legal_basis: {
        applicable_laws: ["CV001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "양사의 개별 기술 아이디어를 통합하는 과정은 공동 발명에 해당할 수 있으며, 각 아이디어의 창출 기여도를 고려해야 합니다.",
        contribution_analysis: "양사의 기술 아이디어를 통합하는 과정에 대한 구체적인 자원 투입 정보는 부족하나, 양측의 기술적 협력이 필수적이었습니다.",
        risk_factors: [
          "통합된 기술 아이디어에 대한 발명자 인정 및 권리 귀속의 모호성",
          "통합 과정에서 발생한 새로운 기술에 대한 권리 귀속 조항 부재"
        ],
        recommended_legal_actions: [
          "통합된 기술 아이디어에 대한 특허 출원 시 발명자 기여도를 명확히 구분하여 등재하도록 협의",
          "공동 개발 계약서에 통합 기술의 권리 귀속 및 활용 방안을 명확히 명시하도록 보완"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "정보 부족",
        tech_effect_reasoning: "회의록에 해당 그룹의 기술 효과에 대한 명시적인 정보가 부족합니다.",
        competitor_applicability: "정보 부족",
        competitor_reasoning: "회의록에 경쟁사 적용 가능성에 대한 명시적인 정보가 부족합니다.",
        tech_gap: "정보 부족",
        tech_gap_reasoning: "회의록에 기술 격차에 대한 명시적인 정보가 부족합니다.",
        final_grade: "A1",
        grade_reasoning: "양사 기술 아이디어의 통합 및 적용"
      },
      claimed_holder: "No Data",
      fact_count: 0,
      supporting_facts: []
    },
    {
      group_id: "G009",
      topic: "베이스 다이 공동 소유",
      issue: "권리 귀속 및 사용 제한",
      impact: "베이스 다이의 핵심 기능이 양사 기술 시너지의 결과이며 공동 소유로 정의되고 단독 사용이 불가하다는 합의는 HBM4 베이스 다이 기술의 독점적 활용에 대한 명확한 법적 기반을 제공하며, 양사 간의 장기적인 협력 관계를 공고히 합니다.",
      reasoning: "이 그룹에는 배타권 방향성을 가진 Fact가 없습니다. 그러나 타임라인에 따르면, P사는 베이스 다이의 핵심 기능이 양사가 각각 제안하고 공동으로 통합한 결과임을 밝혔으며(F047), S사는 HBM4 베이스 다이의 최종 사양을 확정하고 이를 양사의 공동 개발 성과물로 공식 정의(F051)했습니다. P사 또한 이를 인정(F058)했습니다. 양사는 베이스 다이 기술을 양사 공동 소유로 합의(F052, F060)했으며, 단독 사용이 불가하다는 점을 확인(F061)했습니다. 이는 HBM4 베이스 다이 기술에 대한 양사의 공동 소유권과 상호 의존적인 권리 행사를 명확히 합니다.",
      counter_arguments: "방향성 있는 Fact가 없어 특정 주체에 유리한 주장을 펼치기 어렵습니다.",
      recommendation: "베이스 다이 공동 소유에 대한 계약서 상의 구체적인 조항을 검토하고, 공동 소유 기술의 활용 및 수익 배분 방안을 명확히 해야 합니다.",
      legal_basis: {
        applicable_laws: ["CL002", "CV001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 및 베이스 다이 통합 기술의 단독 사용 불가 조항이 합의되었습니다. 개별 핵심 기술은 각사 독자 소유로 유지됩니다.",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "베이스 다이의 핵심 기능이 양사 제안 및 공동 통합 결과로 평가되므로, 공동 발명으로 인정될 가능성이 높습니다.",
        contribution_analysis: "베이스 다이 공동 소유는 양사의 기술 시너지와 공동 기여를 전제로 하며, 각 사의 기여도에 따라 지분 비율을 정할 수 있습니다.",
        risk_factors: [
          "공동 소유 기술의 범위와 각 사 독자 소유 기술의 범위 간의 잠재적 충돌",
          "공동 소유 기술의 활용 및 수익 배분에 대한 구체적인 계약 조항 부재"
        ],
        recommended_legal_actions: [
          "공동 개발 계약서에 공동 소유 기술의 활용, 라이선싱, 수익 배분 등에 대한 상세 조항을 명시하도록 검토",
          "공동 소유 기술에 대한 특허 출원 시 양사를 공동 출원인으로 등재하고 권리 관계를 명확히 설정"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "1등급",
        tech_effect_reasoning: "HBM4 베이스 다이의 공동 소유 정의는 양사 기술의 최적 통합을 통해 최종 제품의 기술적 완성도를 극대화했습니다.",
        competitor_applicability: "고",
        competitor_reasoning: "공동 소유 기술의 제3자 공급 제한을 통해 시장에서의 경쟁 우위를 보호하고 있음을 시사합니다.",
        tech_gap: "대",
        tech_gap_reasoning: "양사의 공동 개발을 통해 경쟁사 대비 상당한 기술 격차를 확보했음을 의미합니다.",
        final_grade: "A1",
        grade_reasoning: "HBM4 베이스 다이의 공동 소유 확립"
      },
      claimed_holder: "No Data",
      fact_count: 0,
      supporting_facts: []
    }
  ]
} as const
