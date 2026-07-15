---
name: add-philosopher
description: Adds a new philosopher to the Daily Philosopher web application. Use when the user asks to add, generate, or register a new philosopher (e.g., "Add Spinoza to the app").
---

This skill guides the agent in researching, formatting, and appending a new philosopher to the application database in C:\Users\user\.gemini\antigravity\scratch\daily-philosopher\philosophers.js.

## Protocol

### 1. Identify and Research the Philosopher
If the user has not specified the philosopher's name, ask them to clarify.
Once identified, research the following details:
- **Korean Name**: e.g., "바루흐 스피노자"
- **English Name**: e.g., "Baruch Spinoza"
- **Region**: "west" or "east"
- **Era**: "ancient", "modern", or "contemporary"
- **Period**: e.g., "근대 네덜란드 (1632 ~ 1677)"
- **Image**: Image asset path. Defaults to "assets/images/default-bust.jpg" unless a custom asset is generated.
- **Tagline**: A concise, engaging summary of their philosophy in Korean.
- **Quote**: Their most famous quote in Korean.
- **Quote English**: The quote in English or original language.
- **Biography**: A rigorous, detailed, academic (Ph.D. level) introductory paragraph in Korean.
- **Representative Works**: An array of 1 to 3 objects, each containing:
  - `title`: Title of the work.
  - `year`: Publication or recording date.
  - `link`: Hyperlink reference URL (typically Korean Wikipedia).
- **2 Core Concepts**: For each concept, write:
  - `title`: Name of the concept.
  - `description`: Simple, easy-to-understand explanation.
  - `example`: A clear, relatable real-world example.
- **Reflection Prompt**: A thought-provoking daily journaling question in Korean.
- **2 Quizzes**: Multiple-choice questions in Korean. For each:
  - `question`: Clear question text.
  - `options`: 4 plausible options.
  - `answerIndex`: 0-indexed position of the correct option (0 to 3).
  - `explanation`: Why this option is correct.

### 2. Format the Object
Generate a clean JavaScript object conforming strictly to this schema:

```javascript
  {
    id: "spinoza",
    image: "assets/images/default-bust.jpg",
    name: "바루흐 스피노자",
    englishName: "Baruch Spinoza",
    region: "west",
    era: "modern",
    period: "근대 네덜란드 (1632 ~ 1677)",
    tagline: "우주와 자연을 신으로 바라보며 마음의 평화를 구한 렌즈 가공사",
    quote: "내일 지구의 종말이 올지라도 나는 오늘 한 그루의 사과나무를 심겠다.",
    quoteEnglish: "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.",
    biography: "스피노자는 근대 유럽 합리주의 철학을 비타협적인 일원론적 형이상학으로 승화시킨 사상가입니다. 그는 데카르트의 정신과 물질 이원론이 지닌 논리적 분절을 타파하고자 시도했습니다. 그에게 있어서 실체란 오직 스스로 존재하는 무한하고 단 하나인 신 혹은 자연뿐이며, 인간 정신과 육체는 이 무한한 신의 일부 단면인 양태이자 속성에 불과합니다. 따라서 세계의 만물과 우주의 사건은 필연적인 대자연의 인과 법칙에 의해 결정적으로 맞물려 흘러간다고 봅니다. 이러한 범신론적 일원론을 바탕으로, 세속의 탐욕과 불평을 털어내고 만물을 절대적이고 영원한 인과로 투영하는 지적 통찰 상태인 영원의 관점을 수립하여 인간 내면의 진정한 영적 구원을 제시했습니다.",
    books: [
      { title: "에티카 (Ethics)", year: "1677년 (사후 출판)", link: "https://ko.wikipedia.org/wiki/%EC%97%90%ED%8B%B0%EC%B9%B4" },
      { title: "신학정치론 (Tractatus Theologico-Politicus)", year: "1670년", link: "https://ko.wikipedia.org/wiki/%EC%8B%A0%ED%95%99%EC%A0%95%EC%B9%98%EB%A1%A0" }
    ],
    concepts: [
      {
        title: "범신론 (Pantheism)",
        description: "신이 우주 전체이자 대자연 그 자체라는 철학 사상입니다.",
        example: "화가가 캔버스 밖에 서서 그림을 그리는 것 대신, 그림 전체로 존재하는 신관입니다."
      },
      {
        title: "영원의 관점에서 (Sub Specie Aeternitatis)",
        description: "사사로운 번뇌를 우주의 무한한 세월 속에서 객관적으로 길게 내려다보는 태도입니다.",
        example: "일시적인 사건에도 좌절하지 않고 전체 인과 속에서 수용하는 평온한 마음입니다."
      }
    ],
    reflectionPrompt: "당신을 힘들게 하는 문제 중 하나를 영원의 관점에서 길게 내다본다면, 지금 내려놓을 수 있는 걱정은 무엇인가요?",
    quizzes: [
      {
        question: "스피노자가 주장한, 신과 대자연을 동일시하는 사상은 무엇인가요?",
        options: ["다신론", "인격신론", "범신론", "무신론"],
        answerIndex: 2,
        explanation: "자연과 우주 법칙 자체가 신이라는 사상은 범신론입니다."
      },
      {
        question: "영원의 관점에서를 뜻하는 라틴어 구절은 무엇인가요?",
        options: ["Sub Specie Aeternitatis", "Amor Fati", "Carpe Diem", "Cogito Ergo Sum"],
        answerIndex: 0,
        explanation: "라틴어로 영원의 관점에서를 뜻하는 말은 Sub Specie Aeternitatis입니다."
      }
    ]
  }
```

### 3. Append to Database File
To add the philosopher, modify C:\Users\user\.gemini\antigravity\scratch\daily-philosopher\philosophers.js:
- Locate the very end of the philosophers array, which is marked by the closing bracket ];.
- Insert a comma , followed by the new philosopher object right before the closing bracket ];.

Example edit pattern:
```diff
     quizzes: [
       ...
     ]
   }
+  ,
+  {
+    id: "spinoza",
+    name: "바루흐 스피노자",
+    ...
+  }
 ];

 if (typeof module !== 'undefined' && module.exports) {
```

### 4. Verify Syntax
Make sure the file structure is correct and contains no stray syntax errors. Reload the app or prompt the user to refresh the page to see the new philosopher immediately added to the top Tree selector.
