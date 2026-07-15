window.movements = [
  {
    id: "rationalism",
    name: "합리주의",
    englishName: "Rationalism",
    category: "epistemology",
    categoryName: "인식론 (Epistemology)",
    description: "근대 과학 혁명기의 수학적 엄밀함을 배경으로 탄생한 사조로, 인간에게는 태어날 때부터 신에 의해 주어지거나 선천적으로 지닌 '본유관념(Innate Ideas)'이 있다고 봅니다. 감각적 경험이나 관찰은 불완전하고 가변적이어서 보편적이고 절대적인 진리를 제공할 수 없다고 주장하며, 논리적이고 기하학적이며 이성적인 사유(연역법)를 통해서만 진정한 앎에 도달할 수 있다고 확신했습니다.",
    relation: "empiricism",
    relationText: "대립 사조: 경험주의 (경험과 귀납을 통한 지식 형성 강조)",
    concepts: [
      {
        title: "방법론적 회의 (Methodological Doubt)",
        conceptName: "Descartes' Methodological Doubt",
        summary: "확실한 진리에 도달하기 위해 조금이라도 의심스러운 모든 지식을 의심하는 이성적 방법론입니다.",
        description: "데카르트는 기존의 모든 상식, 감각적 경험, 심지어 수학적 진리까지 악마가 인간을 속이는 것일 수 있다고 가정하며 의심할 수 없을 때까지 철저하게 의심했습니다. 이는 단순한 회의에 그치는 것이 아니라, 절대 붕괴되지 않는 지식의 단단한 초석(제1원리)을 찾기 위한 방법론적 전략이었습니다."
      },
      {
        title: "코기토 (Cogito, ergo sum)",
        conceptName: "The Thinking Self",
        summary: "모든 것을 의심해도 '의심하고 있는 나 자신의 존재'는 결코 부정할 수 없다는 철학적 출발점입니다.",
        description: "데카르트는 모든 것을 의심하더라도 '의심을 하고 있는 생각하는 주체'가 반드시 존재해야 한다는 직관에 도달했습니다. 이 명제는 근대 서양 철학에서 인간의 이성적 주체성을 신적 계시로부터 독립시켜 독립된 제1 철학의 토대로 격상시키는 혁명적 계기가 되었습니다."
      },
      {
        title: "범신론적 실체 (Pantheistic Substance)",
        conceptName: "Spinoza's Deus sive Natura",
        summary: "신과 대자연은 별개가 아닌 하나이며, 온 우주가 곧 하나의 무한한 실체라는 개념입니다.",
        description: "스피노자는 신을 세계 밖에 존재하는 초월적 창조주로 보지 않고, 온 우주 자체와 동일시(신 즉 자연)했습니다. 그는 기하학적인 논리로 인과적 필연성에 지배받는 우주 전체가 하나의 거대한 실체이며, 인간 정신과 육체는 그 무한한 실체가 지닌 서로 다른 측면(속성)일 뿐이라고 보았습니다."
      },
      {
        title: "단자론 (Monadology)",
        conceptName: "Leibniz's Spiritual Monads",
        summary: "우주가 나눌 수 없는 수많은 영적이며 독립적인 실체인 '단자(Monad)'들로 구성되어 있다는 이론입니다.",
        description: "라이프니츠는 우주가 물질적인 부분이 아닌, 창문이 없는(외부와 소통하지 않는) 영적 실체인 단자들의 집합체라고 주장했습니다. 각 단자들은 스스로 온 우주를 비추는 거울 역할을 하며, 신이 사전에 설정한 '예정조화(Pre-established Harmony)'에 의해 서로 충돌하지 않고 질서 정연하게 조화를 이룬다고 보았습니다."
      }
    ],
    philosophers: ["rene-descartes", "spinoza", "leibniz"]
  },
  {
    id: "empiricism",
    name: "경험주의",
    englishName: "Empiricism",
    category: "epistemology",
    categoryName: "인식론 (Epistemology)",
    description: "본유관념을 단호히 거부하고, 인간이 지닌 모든 지식은 결국 감각을 통한 외부 세계의 경험과 관찰로부터 귀납적으로 형성된다고 주장하는 사조입니다. 자연과학의 실험적 태도와 결합하여 발달했으며, 지각할 수 없는 형이상학적 대상(영혼, 초월적 신 등)을 학문의 영역에서 제외하고 인간 인식의 한계를 밝혀 실용적인 지식의 형성에 기여하려 했습니다.",
    relation: "rationalism",
    relationText: "대립 사조: 합리주의 (선천적 이성과 연역법을 진리의 원천으로 규정)",
    concepts: [
      {
        title: "백지설 (Tabula Rasa)",
        conceptName: "Locke's Blank Slate",
        summary: "인간의 마음은 태어날 때 아무 글씨도 쓰여 있지 않은 백지상태와 같다는 이론입니다.",
        description: "로크는 선천적인 관념의 존재를 부정하고, 갓 태어난 아기의 마음을 아무것도 기록되지 않은 흰 판판에 비유했습니다. 인간이 가진 모든 생각과 개념은 감각(외부 접촉)과 반성(내면 사유)이라는 경험의 통로를 거쳐 그 판판에 점진적으로 새겨지며 형성된다고 주장했습니다."
      },
      {
        title: "인과성의 해체 (Deconstruction of Causality)",
        conceptName: "Hume's Association of Habits",
        summary: "원인과 결과라는 연결 관계는 객관적 사실이 아니라 인간의 반복된 습관과 연상에 불과하다는 주장입니다.",
        description: "흄은 아무리 관찰해도 우리가 보는 것은 '원인 뒤에 결과가 잇따라 일어나는 현상'일 뿐, 두 사건을 필수적으로 결합하는 인과적 필연성 그 자체는 관찰할 수 없다고 지적했습니다. 인과관계는 매일 태양이 뜨는 것을 보고 내일도 뜰 것이라 믿는 뇌의 심리적 습관이자 연상 작용일 뿐이라는 극단적 회의론을 제시했습니다."
      }
    ],
    philosophers: ["locke", "hume"]
  },
  {
    id: "criticism",
    name: "비판철학",
    englishName: "Critical Philosophy / Kantianism",
    category: "epistemology",
    categoryName: "인식론 (Epistemology)",
    description: "합리주의의 무조건적인 이성 과신(독단론)과 경험주의의 극단적인 회의주의를 비판하고 통합한 칸트의 철학 체계입니다. 인간의 인식 능력 자체의 범위를 엄밀하게 법정처럼 심판(비판)하여, 인간이 무엇을 알 수 있고(인식), 무엇을 해야 하며(도덕), 무엇을 희망할 수 있는지를 과학적으로 한계 지었습니다. 이로써 인식의 주체가 대상을 직접 구성한다는 철학사의 기념비적 이정표를 세웠습니다.",
    relation: null,
    relationText: "전환점: 합리주의(이성)와 경험주의(감각)를 입체적으로 통합",
    concepts: [
      {
        title: "코페르니쿠스적 전환 (Copernican Revolution)",
        conceptName: "Kant's Copernican Turn",
        summary: "인식의 주체가 대상을 수동적으로 따르는 것이 아니라, 주체의 형식에 맞추어 대상을 능동적으로 구성한다는 개념입니다.",
        description: "기존 철학은 주체가 외부 대상을 그대로 거울처럼 비추어 인식한다고 생각했습니다. 그러나 칸트는 대상이 인간의 정신적 인식 필터(시간, 공간, 12범주)를 거쳐 '현상'할 때 비로소 인식의 대상이 된다고 보았습니다. 지구가 도는 것처럼 발상의 방향을 180도 전환하여 지식의 확실성을 주체 내부에서 증명한 혁명적 이론입니다."
      },
      {
        title: "선험적 감성론과 오성론 (A priori Space, Time & Categories)",
        conceptName: "Forms of Intuition and Understanding",
        summary: "인간은 타고난 시간·공간의 직관 틀과 논리적 사고 카테고리를 통해 원재료를 조립해 인식한다는 학설입니다.",
        description: "칸트는 감각 기관을 통해 들어오는 무질서한 데이터(감각 원재료)를 이성이 가진 선천적 틀인 '시간과 공간'을 통해 일차적으로 배치(선험적 감성)하고, 이어서 오성이 지닌 12가지 범주(선험적 오성)를 통해 개념화한다고 설명했습니다. 이 때문에 '내용 없는 사유는 공허하고, 개념 없는 직관은 맹목적이다'라는 대전제가 완성되었습니다."
      },
      {
        title: "물자체와 현상의 이분법 (Thing-in-itself vs Phenomenon)",
        conceptName: "Ding an sich",
        summary: "우리는 오직 주체의 형식으로 변형된 '현상'만 인식할 수 있을 뿐, 사물 자체의 원래 본질은 알 수 없다는 한계 선언입니다.",
        description: "우리가 인식하는 모든 세계는 인간의 시공간 필터를 거친 '현상계(Phenomena)'입니다. 필터를 거치기 전 외부 대상 그 자체의 독립적인 본질인 '물자체(Noumena)'는 인간 이성의 한계를 넘어서는 초월적 영역이므로 지식으로 증명하려 들지 말고 신앙이나 도덕의 실천 영역으로 남겨두어야 한다고 주장했습니다."
      }
    ],
    philosophers: ["kant"]
  },
  {
    id: "idealism",
    name: "관념론",
    englishName: "Idealism",
    category: "ontology",
    categoryName: "존재론 (Ontology)",
    description: "세계의 궁극적 실체나 근원이 물질이 아니라 정신, 생각, 혹은 절대적인 이성(관념)이라고 보는 존재론적 사조입니다. 감각되는 눈앞의 물질세계는 독립적으로 자립하는 것이 아니라 정신의 표현이자 그림자, 혹은 거대한 이념이 실현되는 과정에서 나타나는 일시적인 현상에 불과하다고 봅니다. 역사와 만물이 도덕적·지적 목적지를 향해 발전한다는 거대 서사의 기반이 되었습니다.",
    relation: "materialism",
    relationText: "대립 사조: 유물론 (물질이 우선하며 의식은 그 산물이라고 비판)",
    concepts: [
      {
        title: "이데아론 (Theory of Ideas)",
        conceptName: "Plato's Forms",
        summary: "감각적인 현실 세계는 가짜이며, 보이지 않는 영원불변한 참된 진리의 영역인 '이데아'가 진짜 존재라는 사상입니다.",
        description: "플라톤은 끊임없이 변하고 소멸하는 물질세계(현실)는 영원불변한 참된 실재인 '이데아(Idea)'를 흉내 낸 그림자에 불과하다고 주장했습니다. 인간은 동굴 벽에 비친 그림자를 실체로 착각하며 살고 있으므로 이성을 통해 동굴 밖의 태양이자 절대적 실재인 이데아의 세계를 직시(상기)해야 한다고 보았습니다."
      },
      {
        title: "절대정신 (Absolute Spirit)",
        conceptName: "Hegel's Weltgeist",
        summary: "우주와 역사를 이끌어가며 스스로를 온전히 실현해 나가는 보편적이며 초월적인 정신 주체입니다.",
        description: "헤겔은 우주 전체가 고정된 물질이 아니라 거대한 이성적 의지이자 본질인 '절대정신(Geist)'이라고 보았습니다. 인간의 생각, 국가, 종교, 문화적 역사는 이 절대정신이 스스로를 발견하고 구체적으로 표현해 나가는 일련의 동적 전개 과정이자 역사의 전진이라고 보았습니다."
      },
      {
        title: "변증법적 지양 (Aufheben)",
        conceptName: "Hegelian Dialectics",
        summary: "정반합(正-反-合)의 대립을 통해 모순을 극복하고 더 높은 차원의 진리로 고양·통합시키는 발전 논리입니다.",
        description: "헤겔은 하나의 명제(정)는 필연적으로 내부의 부정적 모순(반)을 낳으며, 이 대립을 거쳐 갈등을 보존하면서도 한 단계 높은 상태로 결합(합)되는 '지양(Aufheben)'을 통해 발전한다고 가르쳤습니다. 갈등을 배제하는 대상이 아닌 발전을 위한 필수적인 에너지로 파악한 존재론적 역학입니다."
      }
    ],
    philosophers: ["plato", "hegel", "fichte", "schelling"]
  },
  {
    id: "materialism",
    name: "유물론",
    englishName: "Materialism",
    category: "ontology",
    categoryName: "존재론 (Ontology)",
    description: "우주의 모든 근원과 실체는 물질(물리적 에너지와 운동)이며, 정신이나 인간의 생각은 뇌라는 유기 물질의 고도화된 활동 결과로서 파생된 2차적인 현상에 불과하다는 사조입니다. 관념론의 신비주의와 역사적 절대정신 개념을 비판하며, 눈으로 볼 수 있고 과학적으로 입증 가능한 물질적 생산 관계와 생물학적 현실이야말로 인간 사회와 역사를 규정하는 진정한 지탱 틀이라고 역설했습니다.",
    relation: "idealism",
    relationText: "대립 사조: 관념론 (정신이나 관념이 물질에 우선한다고 주장)",
    concepts: [
      {
        title: "토대와 상부구조 (Base and Superstructure)",
        conceptName: "Marxian Economic Determinism",
        summary: "물질적·경제적 생산 방식(토대)이 사회의 제도, 정치, 문화, 종교(상부구조)를 결정한다는 핵심 이론입니다.",
        description: "마르크스는 역사를 관념이 이끄는 것이 아니라고 단언했습니다. 밭을 갈고 공장을 돌려 재화를 생산하는 경제적 하부구조(토대)의 변동이 법률, 국가, 종교, 이데올로기와 같은 사회적 정신 영역(상부구조)의 성격을 완전히 결정 짓는다는 경제적 유물주의 역사관을 정립했습니다."
      },
      {
        title: "변증법적 유물론 (Dialectical Materialism)",
        conceptName: "Materialist Dialectic",
        summary: "물질적 우주가 정반합의 변증법적 모순과 투쟁을 통해 역동적으로 진화하고 변화한다는 법칙입니다.",
        description: "헤겔의 관념적 변증법을 뒤집은 마르크스는 역사가 정신이 아니라 '물질적 조건의 모순과 계급 투쟁'에 의해 발전한다고 주장했습니다. 지배 계급과 피지배 계급의 끊임없는 대립과 생산관계의 모순(정반)이 한 단계 진화된 혁명적 사회 체제(합)를 낳는다는 유물론적 역사 동력학입니다."
      },
      {
        title: "소외 (Alienation)",
        conceptName: "Alienated Labor & Projection",
        summary: "자신이 만든 피조물(자본, 신 등)에 지배당하여 주체성을 잃어버리는 현상입니다.",
        description: "포이어바흐는 인간이 자신의 훌륭한 속성을 외부의 가상적 절대자인 '신'에게 투사한 뒤 스스로를 신에게 굴종시킴으로써 소외된다고 했고, 마르크스는 노동자가 땀 흘려 만든 제품(자본)이 노동자로부터 격리되어 도리어 노동자를 지배하는 산업 생산 시스템 내의 '소외 노동'을 폭로했습니다."
      }
    ],
    philosophers: ["feuerbach", "marx"]
  },
  {
    id: "existentialism",
    name: "실존주의",
    englishName: "Existentialism",
    category: "existential-life",
    categoryName: "실존·생 (Existentialism & Life)",
    description: "거대한 철학 체계나 차가운 보편 이성에 의해 억압받는 개인의 단독적 주체성과 실재하는 고뇌를 중심에 세운 사조입니다. '인간은 무엇인가?'에 대한 기성 종교나 사회적 답을 부정하고, '내가 지금 여기 존재하며 결단하고 선택한다'는 개별적 실존의 진정성에 입각합니다. 세계의 근원적 불합리함(부조리)에 맞서 개인이 주체적인 의미를 스스로 창조해 나갈 것을 강력하게 촉구했습니다.",
    relation: "structuralism",
    relationText: "대립 사조: 구조주의 (인간의 사유가 구조에 결정된다는 결정론 비판)",
    concepts: [
      {
        title: "실존은 본질에 앞선다 (Existence precedes Essence)",
        conceptName: "Sartre's Core Axiom",
        summary: "인간은 만들어질 때 목적(본질)이 정해져 있지 않으며, 먼저 존재한 뒤 행동을 통해 스스로를 만들어간다는 선언입니다.",
        description: "칼은 물건을 자르기 위해 만들어지는 본질이 정해져 있지만, 인간은 그렇지 않습니다. 세상에 덜컥 내던져진(실존) 후, 매 순간 자신이 내리는 결단과 선택, 사회적 참여(앙가주망)를 통해 비로소 자기 자신의 정체성(본질)을 창조해 나가는 전적으로 자유로운 존재라는 뜻입니다."
      },
      {
        title: "신 앞에선 단독자 (The Individual before God)",
        conceptName: "Kierkegaard's Subjective Truth",
        summary: "대중의 뒤에 숨지 않고 신앙의 절벽 앞에서 오직 스스로의 실존을 걸고 서는 결단적 자아입니다.",
        description: "키에르케고르는 객관적 시스템이나 거대 집단 속에 자신을 묻어버리는 군중을 비판했습니다. 인간은 고독한 절망 속에서 세상과 분리되어 홀로 신의 심판대 앞에 서는 '단단한 단독자'가 될 때에만 참된 실존을 회복하고 실존적 도약을 이룰 수 있다고 강조했습니다."
      },
      {
        title: "신의 죽음과 권력의지 (Death of God & Will to Power)",
        conceptName: "Nietzsche's Revaluation of Values",
        summary: "기존의 절대적 기독교 가치관을 해체하고, 삶을 찬양하는 생명력의 의지를 다시 불태우는 철학입니다.",
        description: "니체는 절대적인 객관적 도덕 법칙이나 내세의 구원관(신의 존재)이 인간의 살아 숨 쉬는 대지 위 생명력을 거세해 왔다고 진단했습니다. 기존 가치관을 철저히 붕괴(신의 죽음)시키고, 삶의 본능을 긍정하고 창조하며 한계를 초월하는 역동적 에너지인 '권력의지(Will to Power)'를 긍정해야 한다고 주장했습니다."
      }
    ],
    philosophers: ["kierkegaard", "nietzsche", "sartre", "camus", "schopenhauer"]
  },
  {
    id: "life-philosophy",
    name: "생의 철학",
    englishName: "Philosophy of Life",
    category: "existential-life",
    categoryName: "실존·생 (Existentialism & Life)",
    description: "우주와 세계를 딱딱하게 고착화된 물질이나 고정관념으로 분석하는 기계론적 관점에 철저히 반대하는 사조입니다. 만물의 근원은 끊임없이 맥동하고 솟구치며 흐르는 역동적인 '생(Life)의 연속성' 그 자체라고 파악합니다. 차가운 지성적 분석의 잣대로 잘게 쪼개는 과학의 오만을 비판하며, 살아있는 시간의 흐름을 통찰하기 위해 이성을 넘어서는 '직관(Intuition)'과 도약하는 생명력을 예찬했습니다.",
    relation: "rationalism",
    relationText: "대립 사조: 주지주의/합리주의 (생명을 정적인 고정 개념으로 나누는 정량주의 극복)",
    concepts: [
      {
        title: "생의 도약 (Élan vital)",
        conceptName: "Bergson's Creative Evolution",
        summary: "진화와 생명의 거침없는 자기 창조를 이끄는 보이지 않는 근원적인 약동력입니다.",
        description: "베르그송은 진화가 맹목적인 적자생존의 우연으로 일어나는 것이 아니라, 물질이라는 장애물을 뚫고 새로운 가치와 복잡한 형태를 스스로 창조해 나가는 보편적 생명 에너지의 도약인 '에를랑 비탈(Élan vital)'에 의해 발생한다고 역설했습니다."
      },
      {
        title: "순수 지속 (Pure Duration)",
        conceptName: "Durée",
        summary: "시계 눈금처럼 쪼갤 수 없는, 의식 속에서 끊임없이 흘러들어 하나로 이어지는 참된 시간입니다.",
        description: "우리는 시간을 시계 바늘의 초, 분처럼 정적으로 단절된 공간적 조각으로 생각합니다. 하지만 실제 인간 의식이 겪는 시간은 강물처럼 경계 없이 흘러넘치며 포개어지는 유기적 연속체인 '순수 지속(Durée)'입니다. 이 시간이야말로 생명의 가장 본질적인 존재 방식입니다."
      }
    ],
    philosophers: ["bergson"]
  },
  {
    id: "phenomenology",
    name: "현상학·해석학",
    englishName: "Phenomenology & Hermeneutics",
    category: "contemporary-turns",
    categoryName: "현대 전환 (Contemporary Turns)",
    description: "20세기 초반 서구 학문의 중심을 흔든 사조로, 과학주의적 객관주의에 매몰되어 삶의 주체적 의미를 상실한 서구 문명을 극복하고자 했습니다. 관념적 고정관념이나 선입견을 철저히 배제(판단중지)하고, 인간 의식에 나타나는 순수한 '현상' 그 자체의 본질을 엄밀하게 직시하고 묘사하려 했습니다. 이후 인간이 세계를 살아가는 방식과 텍스트를 깊이 있게 읽어내는 해석학적 지평의 확장으로 전개되었습니다.",
    relation: "analytic-philosophy",
    relationText: "대립/비교 사조: 언어분석철학 (대륙철학 대 영미 분석철학의 역사적 대립)",
    concepts: [
      {
        title: "지향성 (Intentionality)",
        conceptName: "Husserl's Directed Consciousness",
        summary: "모든 의식은 언제나 무언가를 지향하고 겨냥하고 있다는 인간 의식의 본질적 특성입니다.",
        description: "후설은 대상과 분리되어 고립된 마음이란 존재하지 않는다고 지적했습니다. 의식은 항상 '무엇에 대한 의식(Consciousness of something)'이며, 무언가를 생각하고 미워하고 사랑하는 주체의 역동적 활동(지향성)을 통해서만 대상과 주체가 하나의 의미 네트워크로 엮이게 된다고 설명했습니다."
      },
      {
        title: "판단중지 (Epoché)",
        conceptName: "Epoché / Phenomenological Reduction",
        summary: "외부 세계가 진짜 존재한다는 기존의 상식적 태도에 괄호를 쳐서 보류해 두는 성찰 방법입니다.",
        description: "우리는 외부 사물이 당연히 그곳에 실재한다는 상식 속에서 살고 있습니다. 후설은 이 상식을 잠시 정지(판단중지)하고, 오직 의식 내면에 드러나는 '현상' 자체만 관찰하여 불순물 없는 순수한 의미 구성의 규칙을 분석하려 했습니다. 이를 '에포케(Epoché)'라고 부릅니다."
      },
      {
        title: "세계-내-존재와 다자인 (Dasein / Being-in-the-world)",
        conceptName: "Heidegger's Existential Ontology",
        summary: "인간은 고립된 주체가 아니라, 이미 타인과 사물들이 엮여 있는 세계 속에 흠뻑 던져진 현존재입니다.",
        description: "하이데거는 데카르트식의 독방에 갇혀 생각하는 고립된 주체를 부정했습니다. 인간은 이미 탄생하면서부터 특정한 언어, 문화, 환경이라는 '세계' 속에 던져진 존재(피투성)이며, 도구를 사용하고 타인과 염려하며 세계와 깊숙이 연결되어 살아가는 유기적인 '현존재(Dasein)'라고 선언했습니다."
      }
    ],
    philosophers: ["husserl", "heidegger", "gadamer", "merleau-ponty"]
  },
  {
    id: "analytic-philosophy",
    name: "언어분석철학",
    englishName: "Analytic Philosophy",
    category: "contemporary-turns",
    categoryName: "현대 전환 (Contemporary Turns)",
    description: "난해한 형이상학적 말장난에 빠져있던 전통 철학을 날카롭게 비판하며 영국과 미국을 중심으로 성장한 사조입니다. 이들은 철학사적 난제들과 도덕적 혼란들이 실제 우주나 인식을 둘러싼 진짜 문제가 아니라, 우리가 사용하는 '언어의 논리적 오용과 모호성' 때문에 빚어진 가짜 문제(Pseudo-problem)라고 진단했습니다. 이에 수학적 기호 논리학과 정밀한 일상 언어 분석을 무기 삼아 언어의 한계를 긋고 명료성을 확보하려 했습니다.",
    relation: "phenomenology",
    relationText: "대립/비교 사조: 현상학/해석학 (실증주의적 기호 논리 대 사유의 깊이와 해석의 추구)",
    concepts: [
      {
        title: "그림 이론 (Picture Theory of Language)",
        conceptName: "Wittgenstein's Early Philosophy",
        summary: "언어는 세계의 사실들을 모사하여 그리는 '그림'이라는 전제입니다.",
        description: "비트겐슈타인은 초기 저작인 『논리철학논고』에서 언어의 논리적 뼈대와 세계의 구조는 1:1로 대응된다고 보았습니다. 언어가 실재하는 세계의 물리적 사실을 그려내지 못하는 형이상학이나 도덕적 가치는 논리적 의미가 없는 헛소리에 불과하므로 '말할 수 없는 것에 대해서는 침묵해야 한다'고 선언했습니다."
      },
      {
        title: "언어 게임 (Language Game)",
        conceptName: "Wittgenstein's Late Philosophy",
        summary: "언어의 진짜 의미는 고정된 사실 묘사가 아닌, 삶의 맥락 속에서 규칙을 따르는 '사용'에 있다는 이론입니다.",
        description: "후기 비트겐슈타인은 자신의 초기 그림 이론을 스스로 파기하고, 언어의 의미가 사용되는 삶의 형태(Form of Life)와 규칙에 따라 다양하게 변하는 놀이(게임)와 같다고 설명했습니다. 단어의 뜻은 고정된 상자가 아니라, 맥락 속에서 규칙적으로 사용될 때 도구처럼 힘을 갖는다는 일상 언어 철학의 핵심입니다."
      }
    ],
    philosophers: ["wittgenstein", "quine", "popper", "kuhn", "russell-b"]
  },
  {
    id: "structuralism",
    name: "구조주의·포스트구조주의",
    englishName: "Structuralism & Post-structuralism",
    category: "postmodern-difference",
    categoryName: "탈현대·차이 (Postmodern & Difference)",
    description: "근대 데카르트 이래로 서양 철학을 견인해 온 '자율적이고 주체적인 인간관'을 가차 없이 해체한 현대의 혁명적 사조입니다. 구조주의는 인간의 주체적 사유와 자아마저도 개인이 자각할 수 없는 무의식, 언어 체계, 권력망 등의 거대한 '구조(Structure)'에 의해 사전에 완전히 결정된다고 폭로했습니다. 포스트구조주의는 더 나아가 고정되고 경직된 절대적 구조조차 허구임을 밝히고, 경계를 이탈하고 끊임없이 변화하는 차이와 생성을 옹호하는 유목적 사유로 나아갔습니다.",
    relation: "existentialism",
    relationText: "대립 사조: 실존주의 (인간의 자유로운 결단이 본질을 만든다는 주체적 실존론 거부)",
    concepts: [
      {
        title: "에피스테메와 주체의 종말 (Episteme & Death of Man)",
        conceptName: "Foucault's Episteme",
        summary: "역사적 시대마다 인간의 생각을 무의식적으로 지배하는 지식 구조(담론 체계)가 있다는 발견입니다.",
        description: "푸코는 인간이 자유롭게 생각하는 것이 아니라, 특정 시대에 참과 거짓을 구별 짓는 눈에 보이지 않는 거대한 권력적 지식 구조인 '에피스테메(Episteme)' 내에서만 생각할 수 있다고 증명했습니다. 시대의 담론이 바뀌면 그 속의 주체(인간) 역시 바닷가 모래사장의 얼굴 그림처럼 쓸려 나갈 허상에 불과하다는 '주체의 종말'을 선언했습니다."
      },
      {
        title: "해체와 차연 (Deconstruction & Différance)",
        conceptName: "Derrida's Différance",
        summary: "고정된 이분법적 위계 구조를 부수고, 텍스트의 의미는 결코 고정되지 않고 끊임없이 유예된다는 방법론입니다.",
        description: "데리다는 서구 철학의 고질병인 이성 중심주의(이성/감성, 정신/물질, 남성/여성의 이분법적 수직 관계)를 붕괴시키고자 '해체'를 제안했습니다. 단어의 의미는 완전히 정의되는 고정점이 없으며, 다른 단어들과의 차이에 의해서만 정의가 끊임없이 지연되고 미루어진다는 뜻의 '차연(Différance)'이라는 신조어를 정립했습니다."
      },
      {
        title: "리좀적 사유 (Rhizome)",
        conceptName: "Deleuze's Non-hierarchical Thinking",
        summary: "중앙 통제 시스템이나 위계질서가 없이, 사방으로 무한하게 뻗어 나가는 잔뿌리 형태의 연결 방식입니다.",
        description: "들뢰즈는 줄기-뿌리처럼 하나의 중심점에서 아래로 뻗어 내려가는 수직적이고 위계적인 사유(나무 모델)에 맞서, 감자나 잔디처럼 위아래 없이 서로 수평적으로 연결되고 부러져도 다시 뻗어 나가는 수평적이고 다원적인 사유인 '리좀(Rhizome)'을 제창했습니다. 이를 통해 탈중심적이고 유목적인 삶을 예찬했습니다."
      }
    ],
    philosophers: ["foucault", "derrida", "deleuze"]
  },
  {
    id: "play-philosophy",
    name: "놀이철학",
    englishName: "Philosophy of Play",
    category: "others",
    categoryName: "영역철학 (Specialized Philosophies)",
    description: "요한 하위징아, 로제 카이와, 노르베르트 볼츠로 이어지는 사조로, 근대 자본주의의 '도구적 이성'과 유용성 중심의 인간관(호모 파베르)을 비판하며, 인간의 본질을 노동이 아닌 '목적 없는 유희와 창조적 유용성'에서 찾고자 하는 현대 매체 및 문화 철학적 흐름입니다. 이들은 놀이가 단순한 취미를 넘어 인간 생명력의 역동적 분출이자, 인류 문화와 제도 전체를 건립한 모태라고 보았습니다.",
    relation: null,
    relationText: "AI 시대의 새로운 실존주의: 도구적 이성 및 유용성 중심 주의(호모 파베르) 비판",
    concepts: [
      {
        title: "호모 루덴스와 마법의 원 (Homo Ludens & Magic Circle)",
        conceptName: "Huizinga's Homo Ludens",
        summary: "이성이나 노동이 아닌 '놀이'를 인류 문화의 시초이자 가장 본질적인 근원으로 보는 철학입니다.",
        description: "하위징아는 놀이가 문화의 일부분이 아니라, 문화 자체가 놀이 속에서, 그리고 놀이로서 태어나고 발전했다고 보았습니다. 놀이를 가능하게 만드는 특별한 시공간적 경계인 '마법의 원(Magic Circle)' 개념을 통해 법, 종교, 예술 등이 어떻게 놀이의 규칙과 형식을 띄며 제도화되었는지 규명했습니다."
      },
      {
        title: "4대 놀이 구조 (Four Structures of Play)",
        conceptName: "Caillois' Play Classification",
        summary: "놀이의 형태를 아곤(경쟁), 알레아(우연), 미미크리(모의), 일링크스(현기증)의 4가지 구조로 해체 및 분류한 인류학적 체계입니다.",
        description: "카이와는 놀이가 지닌 무정형의 유희성(파이디아)이 어떻게 규칙과 제도를 갖춘 문명적 놀이(루두스)로 진화하는지 추적했습니다. 아곤(실력 경쟁), 알레아(확률과 운), 미미크리(역할극과 모방), 일링크스(감각적 현기증)라는 4대 기본 구조를 통해 인간 행동과 사회 질서의 발생 과정을 구조주의적으로 해부했습니다."
      },
      {
        title: "매체 미학과 유희적 자본주의 (Media Aesthetics & Fun Capitalism)",
        conceptName: "Norbert Bolz's Play Economics",
        summary: "디지털 인터페이스를 매개로 노동과 놀이의 경계가 붕괴되고 경험을 판매하는 현대 자본주의 미학입니다.",
        description: "볼츠는 컴퓨터와 모바일 등의 매체 환경 속에서 인간은 노동 대신 인터페이스라는 거대한 디지털 놀이터에서 유희한다고 진단했습니다. 현대 자본주의는 더 이상 물리적 생필품이 아니라 감각적인 경험과 유희성(Fun)을 판매하는 미학적 자본주의로 진화했으며, 이로 인해 근대의 금욕적 노동 윤리가 해체되고 새로운 감각 중심의 경제 원동력이 발생했다고 분석했습니다."
      }
    ],
    philosophers: ["huizinga", "caillois", "norbert-bolz", "csikszentmihalyi"]
  },
  {
    id: "science-philosophy",
    name: "과학철학",
    englishName: "Philosophy of Science",
    category: "others",
    categoryName: "영역철학 (Specialized Philosophies)",
    description: "과학적 탐구의 본질, 과학 이론의 정당성 확보, 그리고 과학적 진보의 역사적 패턴을 연구하는 현대 영역 철학의 정수입니다. 귀납적 증명과 관찰적 지식이 지닌 논리적 한계에 부딪혀, 과학과 비과학을 나누는 선을 긋는 '구획 문제'와 실재하는 우주를 과학이 정확히 묘사하고 있는지에 관한 실재론 논쟁 등을 심층적으로 탐구합니다.",
    relation: null,
    relationText: "지식의 객관성과 입증의 타당성을 묻는 20세기 철학사적 격전지",
    concepts: [
      {
        title: "구획 문제와 반증주의 (Demarcation Problem & Falsificationism)",
        conceptName: "Karl Popper's Falsificationism",
        summary: "어떤 이론이 과학적이기 위해서는 거짓으로 입증될 수 있는 구체적인 반증 기회를 열어두어야 한다는 기준입니다.",
        description: "칼 포퍼는 귀납법적 경험의 축적으로는 참을 완벽히 증명할 수 없음을 역설했습니다. 수만 마리의 흰 백조를 관찰해도 '모든 백조는 희다'를 완전히 증명할 수 없으나, 단 한 마리의 검은 백조가 나타나면 명제는 붕괴(반증)됩니다. 포퍼는 이처럼 스스로 반증될 모험과 기회를 제공하는 이론(아인슈타인의 상대성 이론 등)만이 과학이며, 모든 사태를 사후에 설명해 내어 반증이 불가능한 사상(정신분석학 등)은 비과학이라고 보았습니다."
      },
      {
        title: "패러다임과 과학혁명 (Paradigm & Scientific Revolutions)",
        conceptName: "Thomas Kuhn's Paradigm Shift",
        summary: "과학은 점진적으로 누적 발전하는 것이 아니라, 지배적 신념 체계(패러다임)가 불연속적으로 전환되며 도약한다는 역사주의 철학입니다.",
        description: "토마스 쿤은 과학의 역사가 정상과학 단계에서 이상 현상의 발견(괴리), 신뢰 붕괴(위기), 새로운 대안의 대립(과학혁명), 그리고 마침내 패러다임 전환의 순환을 그린다고 보았습니다. 서로 다른 패러다임 간에는 언어와 공통의 척도가 부재하여 비교가 불가능한 '공약불가능성(Incommensurability)'이 작용하며, 패러다임의 교체는 합리적 증명보다 일종의 '종교적 개종'과 같은 사회적 타협에 가깝다고 분석했습니다."
      },
      {
        title: "귀납의 한계와 입증의 역설 (Paradoxes of Confirmation)",
        conceptName: "Hempel's Raven & Goodman's Grue",
        summary: "경험적으로 대상을 관찰하여 가설을 입증하려는 귀납주의 방법론이 안고 있는 치명적인 논리적 구멍들입니다.",
        description: "헴펠의 '까마귀 역설'에 따르면, '모든 까마귀는 검다'는 가설은 '검지 않은 물체는 까마귀가 아니다'라는 대우 명제와 동치이므로, 방 안의 초록색 사과나 책상을 관찰할 때마다 조류학 법칙이 강화되는 기괴한 논리가 성립합니다. 굿맨의 '그루(Grue)의 역설'은 오늘까지 관찰된 초록색 에메랄드가 미래 특정 시점에 파란색으로 변한다는 기상천외한 가설마저 경험적으로 완벽하게 입증해 줄 수 있음을 보여주어 귀납 추론의 근본적 불안정성을 드러냈습니다."
      },
      {
        title: "과학적 실재론 대 반실재론 (Scientific Realism vs. Anti-Realism)",
        conceptName: "Putnam's Miracle vs. van Fraassen's Induction",
        summary: "과학 이론이 설명하는 보이지 않는 실체들(원자, 중력, 전자 등)이 객관적으로 우주에 실재하는가에 대한 형이상학적 전선입니다.",
        description: "힐러리 퍼트남은 과학의 경이로운 성공은 그 이론이 대략 '참'이고 지칭하는 대상들이 존재해야만 설명 가능하며, 그렇지 않다면 과학의 성공은 '기적'일 뿐이라는 '기적 없는 논변(No-Miracles Argument)'을 폅니다. 반면 반실재론자들은 역사적으로 대성공을 거두었으나 결국 폐기된 천동설, 플로지스톤, 에테르 등의 과거 이론을 증거 삼아 현재의 이론 역시 미래에 버려질 것이라는 '비관적 귀납법'으로 팽팽히 대항합니다."
      }
    ],
    philosophers: ["popper", "kuhn"]
  },
  {
    id: "art-philosophy",
    name: "예술철학",
    englishName: "Philosophy of Art",
    category: "others",
    categoryName: "영역철학 (Specialized Philosophies)",
    description: "전통적인 '미(美)란 무엇인가'라는 질문을 넘어, '예술의 본질과 정의, 그리고 가치는 어디에 있는가'를 해명하는 분과철학입니다. 재현과 모방 논쟁, 감상 주체의 순수한 미적 태도(무관심성)를 규명하는 근대 미학을 비롯하여, 전통 미감이 붕괴된 현대 예술을 설명하는 제도론과 복제 기술 시대의 예술의 사회정치적 가치를 폭로하는 사회미학에 이르기까지 다채로운 형이상학적 전선을 지니고 있습니다.",
    relation: null,
    relationText: "인식론과 사회학의 교차점에서 인간 유희와 창조성의 근원을 묻는 미학",
    concepts: [
      {
        title: "재현(Representation)과 모방(Mimesis) 논쟁",
        conceptName: "Platonic & Aristotelian Mimesis",
        summary: "예술의 본질을 외부 세계를 그대로 담아내고 재구현하는 '모방' 활동으로 바라보는 고전적 전통입니다.",
        description: "플라톤은 참된 존재인 이데아의 모방인 현실을 또 한 번 모방하는 예술은 진리로부터 세 단계나 떨어진 모방의 모방(Mimesis of Mimesis)이자 기만이라며 시인 추방론을 제기했습니다. 반면 아리스토텔레스는 모방을 인간의 인지적 본성이자 배움의 쾌락으로 긍정하고, 비극을 통해 관객이 공포와 연민을 겪으며 감정의 찌꺼기를 정화하는 카타르시스(Catharsis) 작용을 해명했습니다."
      },
      {
        title: "미적 판단과 무관심성 (Aesthetic Disinterestedness)",
        conceptName: "Kantian Aesthetic Disinterestedness",
        summary: "대상의 실용적 유용성, 도덕적 선함, 소유욕을 완전히 내려놓은 순수한 관조 상태에서만 참된 미적 기쁨이 일어난다는 학설입니다.",
        description: "칸트는 아름다움에 대한 판단을 사리사욕이나 사적 욕망이 배제된 '무관심적(Disinterested)' 만족으로 정의했습니다. 어떠한 선천적인 도구적 목적이 없지만, 그 자체로 완벽한 형식적 균형과 기쁨을 선사하는 주관적 감상의 보편성을 '목적 없는 목적성(Purposiveness without purpose)'이라 부르며, 감상할 때 마음속에서 상상력과 오성이 자유로운 유희(Free Play)를 즐긴다고 보았습니다."
      },
      {
        title: "예술의 종말과 제도론 (End of Art & Institutional Theory)",
        conceptName: "Hegel's End of Art & Danto's Artworld",
        summary: "감각적 아름다움으로 예술을 규정하던 시대가 종식되고, 개념과 역사적 지적 합의가 예술을 결정한다는 현대적 전환입니다.",
        description: "헤겔은 인류의 정신이 고도로 진화함에 따라 감각적 현현인 예술이 최고 진리를 표현하는 절대적 독점권을 잃고 개념적 철학의 단계로 이행한다는 '예술의 종말론'을 제창했습니다. 현대의 아서 단토는 앤디 워홀의 상자 오브제처럼 일상 사물과 시각적으로 동일한 것이 어떻게 예술이 되는지 추적하며, 이를 예술로 수용하고 해석하는 역사적 담론과 평론가·미술관 등의 사회적 제도를 통틀어 '예술계(The Artworld)'라 명명하고 제도론의 문을 열었습니다."
      },
      {
        title: "아우라의 붕괴와 문화산업 비판 (Aura vs. Culture Industry)",
        conceptName: "Benjamin's Aura & Adorno's Industry Critique",
        summary: "복제 기술이 가져온 예술 고유성의 붕괴와, 자본주의 미디어가 자행하는 예술의 상품화 및 대중 기만에 대한 비판입니다.",
        description: "발터 벤야민은 사진과 영화 등의 복제 기술이 원작이 가졌던 독점적 시공간의 고유성인 '아우라(Aura)'를 해체하여 예술의 문턱을 낮추고 대중적인 정치화와 변혁을 유도한다고 낙관했습니다. 그러나 테오도르 아도르노는 자본과 결합한 '문화산업(Culture Industry)'이 규격화되고 획일화된 예술 상품을 대중에게 주입하여 비판력을 마비시킴을 경고하고, 현실의 고통과 모순을 날것으로 표현하여 타협을 거부하는 전위 아방가르드 예술의 '미학적 부정성'을 극도로 옹호했습니다."
      }
    ],
    philosophers: ["plato", "aristotle", "kant", "hegel", "benjamin", "adorno"]
  }
];
