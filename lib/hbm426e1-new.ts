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
    ] as const,
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
      impact: "양사 기술 아이디어의 복합적인 결합과 공동 최적화는 HBM4 베이스 다이 개발의 성공에 필수적이었습니다.",
      reasoning: "양사는 초기 기술 로드맵 및 역할 분담 논의를 시작하고, 기술 통합 시 예상되는 인터페이스 이슈를 사전 논의했습니다.",
      counter_arguments: "방향성 있는 Fact가 없어 특정 주체에 유리한 주장을 펼치기 어렵습니다.",
      recommendation: "공동 개발 과정에서 각 사의 구체적인 역할과 기여도를 명확히 문서화해야 합니다.",
      legal_basis: {
        applicable_laws: ["CV001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요 조항 합의",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "양사의 기술 아이디어가 복합적으로 결합된 결과",
        contribution_analysis: "양사 공동 최적화 및 기술 통합을 통해 개발 진행",
        risk_factors: [
          "공동 개발 과정에서 각 사의 기여도에 대한 정량적 근거 부족",
          "단독 해결 불가능했던 이슈에 대한 각 사의 구체적인 기술적 기여 범위 불명확"
        ],
        recommended_legal_actions: [
          "공동 개발 계약서에 각 사의 기여도 산정 기준 및 지분 비율을 명확히 명시하도록 검토"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "1등급",
        tech_effect_reasoning: "양사 기술 아이디어의 복합적인 결합과 공동 최적화가 HBM4 베이스 다이 개발에 필수적",
        competitor_applicability: "정보 부족",
        competitor_reasoning: "회의록에 경쟁사 적용 가능성에 대한 명시적인 정보가 부족",
        tech_gap: "대",
        tech_gap_reasoning: "특정 기술적 난관이 단독으로는 해결 불가능했음을 시사",
        final_grade: "A1",
        grade_reasoning: "양사 기술 시너지를 통한 공동 개발 성과"
      },
      claimed_holder: "Joint",
      fact_count: 0,
      supporting_facts: []
    },
    {
      group_id: "G006",
      topic: "프로토타입 성능 검증",
      issue: "기술 성능 개선",
      impact: "경쟁사 대비 전력 효율 20%, 대역폭 30% 향상 달성은 HBM4 베이스 다이 기술의 핵심적인 경쟁 우위를 확보했음을 입증",
      reasoning: "S사가 성능 개선 목표를 설정하고 경쟁사 대비 전력 효율 20%, 대역폭 30% 향상을 달성했다고 발표",
      counter_arguments: "성능 개선이 양사 기술의 통합 결과일 가능성 있음",
      recommendation: "최종 성능 개선에 대한 S사와 A사의 구체적인 기여도를 정량적으로 분석해야 함",
      legal_basis: {
        applicable_laws: ["PL001"],
        contract_analysis: {
          has_exclusivity_clause: true,
          clause_summary: "공동 개발 성과물의 제3자 공급 시 양사 사전 협의 필요",
          validity_period: "정보 부족",
          enforcement_risk: "중간"
        },
        inventorship_analysis: "성능 개선은 양사의 개별 기술 기여가 통합된 결과",
        contribution_analysis: "양사의 기술 통합 효과로 평가",
        risk_factors: [
          "최종 성능 개선에 대한 S사 단독 기여 주장의 근거 부족",
          "양사 기술 통합 효과에 대한 명확한 기여도 배분 기준 부재"
        ],
        recommended_legal_actions: [
          "성능 개선 관련 특허 출원 시 발명자 기여도를 명확히 구분하여 등재"
        ]
      },
      evaluation_grade: {
        tech_effect_grade: "1등급",
        tech_effect_reasoning: "경쟁사 대비 전력 효율 20%, 대역폭 30% 향상 달성",
        competitor_applicability: "고",
        competitor_reasoning: "경쟁사 대비 성능 향상을 명시적으로 언급하여 보호 필요",
        tech_gap: "대",
        tech_gap_reasoning: "경쟁사 대비 20-30% 성능 향상은 상당한 기술 격차 의미",
        final_grade: "A1",
        grade_reasoning: "경쟁사 대비 성능 향상 달성"
      },
      claimed_holder: "Company S",
      fact_count: 1,
      supporting_facts: []
    }
  ],
  legal_perspective: {
    applicable_laws: [
      { law_id: "CV001", law_name: "기술 협력 계약", relevance: "공동 개발 기술 관련", application_to_project: "양사 기술 기여도 정의" },
      { law_id: "CL002", law_name: "라이센스 계약", relevance: "제3자 공급 관련", application_to_project: "공동 기술 라이센스 제한" }
    ],
    overall_legal_analysis: "HBM4 베이스 다이는 양사의 공동 개발 성과물로서 공동 소유 구조로 합의. 각 사의 개별 기술은 독자 소유 유지.",
    risk_factors: [
      "공동 소유 기술과 개별 기술의 경계 불명확",
      "배타권 유효기간 및 제재 조항 부재",
      "자원 투입 비중 기록 부족"
    ],
    recommended_actions: [
      "최종 계약서를 면밀히 검토하여 배타권 조항의 구체적 내용 확인",
      "공동 기술과 개별 기술의 범위를 명확히 정의"
    ]
  },
  key_contributions: {
    company_s_ideas: [
      {
        idea: "HBM4 베이스 다이 고도화 제안",
        description: "차세대 AI 칩 시장 선도를 위한 HBM4 개발 전략 수립",
        impact: "프로젝트의 전략적 방향성 결정",
        supporting_facts: [],
        exclusivity_status: "Joint",
        significance: "높음",
        reasoning: "S사의 전략적 제안이 프로젝트 초기 설정에 중요한 역할"
      }
    ],
    company_p_ideas: [
      {
        idea: "CoWoS 2.5D 패키징 기술 적용",
        description: "첨단 로직 공정 기술을 통한 HBM 베이스 다이 개선",
        impact: "성능 향상 및 수율 개선",
        supporting_facts: [],
        exclusivity_status: "Joint",
        significance: "높음",
        reasoning: "A사의 핵심 기술이 공동 개발에 중요하게 기여"
      }
    ]
  }
}
