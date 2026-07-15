document.addEventListener('DOMContentLoaded', () => {
  // --- Backbone Philosophers (45 Core) ---
  const BACKBONE_IDS = new Set([
    'thales', 'heraclitus', 'parmenides', 'democritus', 'socrates', 'plato', 'aristotle',
    'epicurus', 'marcus-aurelius', 'plotinus', 'augustinus', 'aquinas', 'ockham', 'hobbes',
    'rene-descartes', 'spinoza', 'leibniz', 'locke', 'hume', 'rousseau', 'kant', 'hegel',
    'schopenhauer', 'kierkegaard', 'mill-js', 'marx', 'nietzsche', 'wittgenstein', 'heidegger', 'sartre',
    'gautama-buddha', 'nagarjuna', 'mozi', 'confucius', 'mencius', 'xunzi', 'laozi', 'zhuangzi',
    'hanfeizi', 'zhuxi', 'wangyangming', 'wonhyo', 'yihwang', 'yi-i', 'dasan'
  ]);

  // --- State Management ---
  let activePhilosopher = null;

  // --- PWA In-App Install Prompt ---
  let deferredPrompt = null;
  const installBtn = document.getElementById('pwa-install-btn');
  const pwaModal = document.getElementById('pwa-modal');
  const pwaModalClose = document.getElementById('pwa-modal-close');
  const pwaModalBtnAction = document.getElementById('pwa-modal-btn-action');

  // Hide button if already running in standalone mode (as installed app)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    if (installBtn) installBtn.style.display = 'none';
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) {
      installBtn.style.display = 'inline-flex';
    }
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
      } else {
        // Fallback: show custom modal with instructions
        if (pwaModal) pwaModal.style.display = 'flex';
      }
    });
  }

  function closePwaModal() {
    if (pwaModal) pwaModal.style.display = 'none';
  }

  if (pwaModalClose) pwaModalClose.addEventListener('click', closePwaModal);
  if (pwaModalBtnAction) pwaModalBtnAction.addEventListener('click', closePwaModal);
  if (pwaModal) {
    pwaModal.addEventListener('click', (e) => {
      if (e.target === pwaModal) closePwaModal();
    });
  }

  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed successfully!');
    if (installBtn) {
      installBtn.style.display = 'none';
    }
    closePwaModal();
  });
  let quizState = {
    currentIndex: 0,
    score: 0,
    hasAnswered: false,
    selectedOptionIndex: null
  };

  // --- Theme Initialisation ---
  const savedTheme = localStorage.getItem('philosophy-theme') || 'stoic';
  setTheme(savedTheme);

  // Hook up Theme Switchers
  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const themeName = btn.getAttribute('data-theme-name');
      setTheme(themeName);
    });
  });

  function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('philosophy-theme', themeName);
    
    // Update active button state
    document.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.getAttribute('data-theme-name') === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // --- Load Philosopher of the Day or via URL Parameter ---
  const totalPhilosophers = window.philosophers.length;
  
  const PHILOSOPHER_ALIASES = {
    "쇠렌 키르케고르": "kierkegaard",
    "쇠렌 키에르케고르": "kierkegaard",
    "키르케고르": "kierkegaard",
    "키에르케고르": "kierkegaard",
    "임마누엘 칸트": "kant",
    "칸트": "kant",
    "프리드리히 니체": "nietzsche",
    "니체": "nietzsche",
    "장 폴 사르트르": "sartre",
    "사르트르": "sartre",
    "알베르 카뮈": "camus",
    "카뮈": "camus",
    "플라톤": "plato",
    "아리스토텔레스": "aristotle",
    "바루흐 스피노자": "spinoza",
    "스피노자": "spinoza",
    "마르틴 하이데거": "heidegger",
    "하이데거": "heidegger",
    "자크 데리다": "derrida",
    "데리다": "derrida",
    "존 롤스": "rawls",
    "롤스": "rawls",
    "마이클 샌델": "sandel",
    "아서 쇼펜하우어": "schopenhauer",
    "쇼펜하우어": "schopenhauer",
    "미셸 푸코": "foucault",
    "푸코": "foucault",
    "토마스 홉스": "hobbes",
    "홉스": "hobbes",
    "존 로크": "locke",
    "로크": "locke",
    "장 자크 루소": "rousseau",
    "루소": "rousseau",
    "르네 데카르트": "rene-descartes",
    "데카르트": "rene-descartes",
    "루트비히 비트겐슈타인": "wittgenstein",
    "비트겐슈타인": "wittgenstein",
    "존 스튜어트 밀": "mill-js",
    "밀": "mill-js",
    "제레미 벤담": "bentham",
    "게오르크 빌헬름 프리드리히 헤겔": "hegel",
    "헤겔": "hegel",
    "한나 아렌트": "arendt",
    "아렌트": "arendt",
    "지그문트 프로이트": "freud",
    "칼 마르크스": "marx",
    "마르크스": "marx",
    "에드문트 후설": "husserl",
    "후설": "husserl",
    "모리스 메를로퐁티": "merleau-ponty",
    "메를로퐁티": "merleau-ponty"
  };

  const urlParams = new URLSearchParams(window.location.search);
  const paramName = urlParams.get('name');
  const paramId = urlParams.get('id');
  
  // Calculate daily philosopher so it is lexically accessible everywhere in DOMContentLoaded
  const dailyIndex = getDailyIndex(totalPhilosophers);
  const dailyPhilosopher = window.philosophers[dailyIndex];
  
  let initialPhilosopher = null;
  if (paramId) {
    initialPhilosopher = window.philosophers.find(p => p.id === paramId);
  } else if (paramName) {
    const searchName = paramName.trim().normalize('NFC');
    console.log("Deep link match attempt for:", searchName);
    
    if (PHILOSOPHER_ALIASES[searchName]) {
      const targetId = PHILOSOPHER_ALIASES[searchName];
      initialPhilosopher = window.philosophers.find(p => p.id === targetId);
    }
    
    if (!initialPhilosopher) {
      initialPhilosopher = window.philosophers.find(p => {
        const normName = p.name.trim().normalize('NFC');
        return normName === searchName || normName.includes(searchName) || searchName.includes(normName);
      });
    }
  }
  
  if (initialPhilosopher) {
    console.log("Deep link match successful! Loaded:", initialPhilosopher.name);
    selectPhilosopher(initialPhilosopher, false);
    switchView('detail-view');
  } else {
    console.log("No deep link target matched. Loading default spotlight.");
    selectPhilosopher(dailyPhilosopher, true);
    switchView('dashboard-view');
  }

  // Set total philosophers count in the header
  const countEl = document.getElementById('total-philosophers-count');
  if (countEl) {
    countEl.textContent = totalPhilosophers;
  }

  // Render Tree Navigation at the top
  renderTreeNavigation();
  // Render Philosophical Movements table
  renderMovementsTable();
  // Load and render past reflections
  renderReflectionList();
  // Initialize Search Filter
  initSearchFilter();

  // Hook up title click to return to dashboard
  const appTitle = document.getElementById('app-title');
  if (appTitle) {
    appTitle.addEventListener('click', () => {
      switchView('dashboard-view');
    });
  }

  // Hook up back to dashboard button
  const backBtn = document.getElementById('btn-back-to-dashboard');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      switchView('dashboard-view');
    });
  }

  const backMoveBtn = document.getElementById('btn-back-movement-to-dashboard');
  if (backMoveBtn) {
    backMoveBtn.addEventListener('click', () => {
      switchView('dashboard-view');
    });
  }

  // --- Select Philosopher ---
  function selectPhilosopher(philosopher, isDaily = false) {
    activePhilosopher = philosopher;
    
    // Highlight spotlight card container reload animation
    const spotlightEl = document.querySelector('.spotlight-card');
    spotlightEl.classList.remove('animate-fade-in');
    void spotlightEl.offsetWidth; // Trigger reflow
    spotlightEl.classList.add('animate-fade-in');

    // Render components
    renderSpotlight(philosopher, isDaily);
    renderConcepts(philosopher);
    renderReflectionForm(philosopher);
    resetQuizState();
    renderQuiz(philosopher);
    updateTreeActiveState();
  }

  // --- Helper: Daily Index Hash ---
  function getDailyIndex(length) {
    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth() + 1;
    const d = today.getDate();
    // Deterministic daily hash
    const dateNum = (y * 10000) + (m * 100) + d;
    
    // Simple LCG or basic hash algorithm to distribute indexes better
    let hash = dateNum;
    hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
    hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
    hash = (hash >> 16) ^ hash;
    
    return Math.abs(hash) % length;
  }

  // --- Render spotlight info ---
  function renderSpotlight(ph, isDaily) {
    document.getElementById('badge-daily-label').textContent = isDaily ? "오늘의 철학자" : "철학자 돋보기";
    document.getElementById('ph-name').textContent = ph.name;
    document.getElementById('ph-eng-name').textContent = ph.englishName;
    document.getElementById('ph-period').textContent = ph.period;
    document.getElementById('ph-tagline').textContent = ph.tagline;
    document.getElementById('ph-quote').textContent = `"${ph.quote}"`;
    document.getElementById('ph-quote-english').textContent = ph.quoteEnglish;
    document.getElementById('ph-bio').textContent = ph.biography;

    // Render Portrait Image
    const portraitImg = document.getElementById('ph-portrait');
    if (portraitImg) {
      portraitImg.src = ph.image || 'assets/images/default-bust.jpg';
      portraitImg.alt = `${ph.name} 초상화`;
      portraitImg.onerror = () => {
        portraitImg.src = ph.region === 'east' ? 'assets/images/default-eastern-bust.jpg' : 'assets/images/default-bust.jpg';
        portraitImg.onerror = null;
      };
    }

    // Render Major Works Reference List
    const booksSection = document.getElementById('ph-books-section');
    if (ph.books && ph.books.length > 0) {
      const booksHTML = ph.books.map(book => `
        <li class="book-item">
          <a href="${book.link}" target="_blank" class="book-link" title="위키백과 상세 정보 확인">
            <div class="book-link-header">
              <span class="book-name">${book.title}</span>
              <span class="book-year">${book.year}</span>
            </div>
            ${book.description ? `<p class="book-desc">${book.description}</p>` : ''}
          </a>
        </li>
      `).join('');

      booksSection.innerHTML = `
        <div class="books-title">📚 대표 저작 및 기록 연대</div>
        <ul class="books-list">
          ${booksHTML}
        </ul>
      `;
      booksSection.style.display = 'block';
    } else {
      booksSection.innerHTML = '';
      booksSection.style.display = 'none';
    }
  }

  // --- Render Concepts ---
  function renderConcepts(ph) {
    const container = document.getElementById('concept-list-container');
    container.innerHTML = '';

    ph.concepts.forEach((concept, index) => {
      const item = document.createElement('div');
      item.className = 'concept-item';
      
      // Auto-open first concept
      if (index === 0) {
        item.classList.add('open');
      }

      item.innerHTML = `
        <div class="concept-header">
          <span class="concept-title">${concept.title}</span>
          <span class="concept-toggle-icon">▼</span>
        </div>
        <div class="concept-body">
          <p class="concept-description">${concept.description}</p>
          <div class="concept-example">
            <div class="concept-example-label">일상적인 예시</div>
            <div class="concept-example-text">${concept.example}</div>
          </div>
        </div>
      `;

      // Accordion click handler
      item.querySelector('.concept-header').addEventListener('click', () => {
        // Toggle this one
        item.classList.toggle('open');
      });

      container.appendChild(item);
    });
  }

  // --- Render Reflection Form ---
  function renderReflectionForm(ph) {
    const promptText = document.getElementById('reflection-prompt-text');
    promptText.textContent = ph.reflectionPrompt;
    
    const textarea = document.getElementById('journal-input');
    textarea.value = '';
    
    const saveBtn = document.getElementById('save-journal-btn');
    // Re-bind click event to ensure it saves for current philosopher
    saveBtn.onclick = () => {
      const content = textarea.value.trim();
      if (!content) {
        alert('성찰 내용을 입력해주세요.');
        return;
      }
      
      saveReflection(ph, content);
      textarea.value = '';
      renderReflectionList();
    };
  }

  // --- LocalStorage Journal Operations ---
  function saveReflection(ph, content) {
    const reflections = JSON.parse(localStorage.getItem('philosophy_reflections') || '[]');
    
    const newReflection = {
      id: 'ref_' + Date.now(),
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      philosopherId: ph.id,
      philosopherName: ph.name,
      content: content
    };

    reflections.unshift(newReflection); // Add to the top
    localStorage.setItem('philosophy_reflections', JSON.stringify(reflections));
  }

  function renderReflectionList() {
    const listContainer = document.getElementById('reflection-items');
    listContainer.innerHTML = '';
    
    const reflections = JSON.parse(localStorage.getItem('philosophy_reflections') || '[]');
    
    if (reflections.length === 0) {
      listContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 1rem 0;">기록된 성찰 일지가 없습니다. 첫 성찰을 작성해 보세요!</div>';
      return;
    }

    reflections.forEach(item => {
      const el = document.createElement('div');
      el.className = 'past-reflection-item';
      el.innerHTML = `
        <div class="past-reflection-header">
          <span class="past-reflection-philosopher">${item.philosopherName}</span>
          <span class="past-reflection-date">${item.date}</span>
        </div>
        <div class="past-reflection-content">${escapeHTML(item.content)}</div>
      `;
      listContainer.appendChild(el);
    });
  }

  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Quiz Functionality ---
  function resetQuizState() {
    quizState.currentIndex = 0;
    quizState.score = 0;
    quizState.hasAnswered = false;
    quizState.selectedOptionIndex = null;
  }

  function renderQuiz(ph) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    const questions = ph.quizzes;
    
    // Quiz completed screen
    if (quizState.currentIndex >= questions.length) {
      renderQuizResults(ph);
      return;
    }

    const currentQuiz = questions[quizState.currentIndex];

    // Progress bar
    let progressDots = '';
    for (let i = 0; i < questions.length; i++) {
      let statusClass = '';
      if (i === quizState.currentIndex) statusClass = 'active';
      else if (i < quizState.currentIndex) {
        // Just general history tracker
        statusClass = 'active';
      }
      progressDots += `<div class="quiz-progress-dot ${statusClass}"></div>`;
    }

    const optionsHTML = currentQuiz.options.map((option, idx) => {
      return `<button class="quiz-option-btn" data-index="${idx}">${idx + 1}. ${option}</button>`;
    }).join('');

    container.innerHTML = `
      <div class="quiz-widget">
        <div>
          <div class="quiz-progress-bar">
            ${progressDots}
          </div>
          <div class="quiz-question">${quizState.currentIndex + 1}. ${currentQuiz.question}</div>
          <div class="quiz-options">
            ${optionsHTML}
          </div>
        </div>
        <div id="quiz-feedback-area"></div>
        <div class="quiz-actions" style="display: none;" id="quiz-next-action">
          <button class="btn-primary" id="quiz-next-btn">다음 질문 →</button>
        </div>
      </div>
    `;

    // Hook up options click
    const optionBtns = container.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizState.hasAnswered) return;
        
        const selectedIdx = parseInt(btn.getAttribute('data-index'));
        quizState.selectedOptionIndex = selectedIdx;
        quizState.hasAnswered = true;

        const isCorrect = (selectedIdx === currentQuiz.answerIndex);
        if (isCorrect) quizState.score++;

        // Add visually styles
        optionBtns.forEach((b, idx) => {
          b.disabled = true;
          if (idx === currentQuiz.answerIndex) {
            b.classList.add('selected-correct');
          } else if (idx === selectedIdx) {
            b.classList.add('selected-wrong');
          }
        });

        // Show feedback explanation
        const feedbackArea = document.getElementById('quiz-feedback-area');
        feedbackArea.innerHTML = `
          <div class="quiz-feedback">
            <div class="quiz-feedback-status ${isCorrect ? 'correct' : 'wrong'}">
              ${isCorrect ? '정답입니다! 🎉' : '아쉽게도 틀렸습니다. 😢'}
            </div>
            <div class="quiz-feedback-explanation">${currentQuiz.explanation}</div>
          </div>
        `;

        // Show Next button
        document.getElementById('quiz-next-action').style.display = 'flex';
      });
    });

    // Hook up Next button
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        quizState.currentIndex++;
        quizState.hasAnswered = false;
        quizState.selectedOptionIndex = null;
        renderQuiz(ph);
      });
    }
  }

  function renderQuizResults(ph) {
    const container = document.getElementById('quiz-container');
    const totalQuestions = ph.quizzes.length;
    let scoreText = '';
    
    if (quizState.score === totalQuestions) {
      scoreText = '훌륭합니다! 오늘의 철학 개념을 완전히 마스터하셨네요! 💯';
    } else if (quizState.score > 0) {
      scoreText = '좋은 시도입니다! 오답 해설을 보며 개념을 한 번 더 복습해 보세요. 👍';
    } else {
      scoreText = '철학은 질문과 의심에서 시작됩니다! 다시 한 번 찬찬히 핵심 개념을 살펴볼까요? 🏛️';
    }

    container.innerHTML = `
      <div class="quiz-result-screen animate-fade-in">
        <div class="quiz-result-score">${quizState.score} / ${totalQuestions}</div>
        <div class="quiz-result-text">${scoreText}</div>
        <button class="btn-primary" id="quiz-retry-btn">다시 풀기 🔄</button>
      </div>
    `;

    document.getElementById('quiz-retry-btn').addEventListener('click', () => {
      resetQuizState();
      renderQuiz(ph);
    });
  }


  // --- Render Tree Navigation ---
  function renderTreeNavigation() {
    const containers = {
      'west-ancient': document.getElementById('tags-west-ancient'),
      'west-medieval': document.getElementById('tags-west-medieval'),
      'west-modern': document.getElementById('tags-west-modern'),
      'west-contemporary': document.getElementById('tags-west-contemporary'),
      'east-origin': document.getElementById('tags-east-origin'),
      'east-deepening': document.getElementById('tags-east-deepening'),
      'east-transformation': document.getElementById('tags-east-transformation')
    };

    // Clear containers
    Object.values(containers).forEach(c => {
      if (c) c.innerHTML = '';
    });

    // Helper: Parse birth year
    function getBirthYear(ph) {
      const overrides = {
        'laozi': -600,
        'gautama-buddha': -563,
        'leucippus': -500,
        'gong-ja-a': -483,
        'mozi': -470,
        'liezi': -450,
        'gaozi': -420,
        'shangyang': -390,
        'shenbuhai': -385,
        'zhuangzi': -369,
        'gongsunlong': -320,
        'xunzi': -310,
        'hanfeizi': -280,
        'nagarjuna': 150,
        'hyecho': 704
      };
      
      if (overrides[ph.id] !== undefined) {
        return overrides[ph.id];
      }

      const period = ph.period;
      const match = period.match(/\((?:BC\s*)?(\d+)/i);
      if (match) {
        let year = parseInt(match[1]);
        if (period.includes('BC') || period.includes('bc') || period.includes('B.C.')) {
          year = -year;
        }
        return year;
      }
      return 0;
    }

    // Sort a copy of philosophers chronologically by birth year
    const sortedPhilosophers = [...window.philosophers].sort((a, b) => {
      return getBirthYear(a) - getBirthYear(b);
    });

    sortedPhilosophers.forEach(ph => {
      const key = `${ph.region}-${ph.era}`;
      const container = containers[key];
      if (container) {
        const tag = document.createElement('span');
        tag.className = 'philosopher-tag';
        if (BACKBONE_IDS.has(ph.id)) {
          tag.classList.add('backbone');
        }
        tag.setAttribute('data-id', ph.id);
        tag.textContent = ph.name;
        
        tag.addEventListener('click', (e) => {
           e.stopPropagation();
           const isToday = (ph.id === dailyPhilosopher.id);
           selectPhilosopher(ph, isToday);
           switchView('detail-view');
        });
        
        container.appendChild(tag);
      }
    });

    // Dynamically hide empty era rows if they occur
    Object.keys(containers).forEach(key => {
      const container = containers[key];
      const row = container ? container.closest('tr') : null;
      if (row) {
        if (container.children.length === 0) {
          row.style.display = 'none';
        } else {
          row.style.display = 'table-row';
        }
      }
    });
  }

  function updateTreeActiveState() {
    if (!activePhilosopher) return;
    document.querySelectorAll('.philosopher-tag').forEach(tag => {
      if (tag.getAttribute('data-id') === activePhilosopher.id) {
        tag.classList.add('active');
      } else {
        tag.classList.remove('active');
      }
    });
  }

  // --- Initialize Search Filter ---
  function initSearchFilter() {
    const searchInput = document.getElementById('philosopher-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      
      // Match each tag
      document.querySelectorAll('.philosopher-tag').forEach(tag => {
        const phId = tag.getAttribute('data-id');
        const ph = window.philosophers.find(p => p.id === phId);
        if (ph) {
          const matches = ph.name.toLowerCase().includes(query) || 
                          ph.englishName.toLowerCase().includes(query);
          if (matches) {
            tag.style.display = '';
          } else {
            tag.style.display = 'none';
          }
        }
      });

      // Match movement tags
      document.querySelectorAll('.movement-tag').forEach(tag => {
        const mvId = tag.getAttribute('data-id');
        const mv = window.movements.find(m => m.id === mvId);
        if (mv) {
          const matches = mv.name.toLowerCase().includes(query) || 
                          mv.englishName.toLowerCase().includes(query) ||
                          mv.description.toLowerCase().includes(query);
          if (matches) {
            tag.style.display = '';
          } else {
            tag.style.display = 'none';
          }
        }
      });

      // Update row visibility based on visible tags
      const rowsToFilter = [
        'west-ancient', 'west-medieval', 'west-modern', 'west-contemporary',
        'east-origin', 'east-deepening', 'east-transformation',
        'move-epistemology', 'move-ontology', 'move-existential-life', 'move-contemporary-turns', 'move-postmodern-difference', 'move-others'
      ];
      
      rowsToFilter.forEach(key => {
        const container = document.getElementById(`tags-${key}`);
        const row = container ? container.closest('tr') : null;
        if (row && container) {
          // Check if there are any visible children
          const visibleChildren = Array.from(container.children).filter(child => child.style.display !== 'none');
          if (visibleChildren.length === 0) {
            row.style.display = 'none';
          } else {
            row.style.display = 'table-row';
          }
        }
      });
    });
  }

  // --- Render Philosophical Movements Table ---
  function renderMovementsTable() {
    const categories = {
      'epistemology': document.getElementById('tags-move-epistemology'),
      'ontology': document.getElementById('tags-move-ontology'),
      'existential-life': document.getElementById('tags-move-existential-life'),
      'contemporary-turns': document.getElementById('tags-move-contemporary-turns'),
      'postmodern-difference': document.getElementById('tags-move-postmodern-difference'),
      'others': document.getElementById('tags-move-others')
    };

    // Clear containers
    Object.keys(categories).forEach(key => {
      if (categories[key]) categories[key].innerHTML = '';
    });

    window.movements.forEach(mv => {
      const container = categories[mv.category];
      if (container) {
        const tag = document.createElement('span');
        tag.className = 'movement-tag';
        tag.setAttribute('data-id', mv.id);
        tag.textContent = mv.name;

        tag.addEventListener('click', (e) => {
          e.stopPropagation();
          renderMovementDetail(mv);
          switchView('movement-view');
        });

        container.appendChild(tag);
      }
    });
  }

  // --- Render Movement Detail View ---
  function renderMovementDetail(mv) {
    document.getElementById('move-category').textContent = mv.categoryName;
    document.getElementById('move-name').textContent = mv.name;
    document.getElementById('move-eng-name').textContent = mv.englishName;
    document.getElementById('move-desc').textContent = mv.description;

    // Relation box
    const relationBox = document.getElementById('move-relation-box');
    const relationText = document.getElementById('move-relation-text');
    if (mv.relationText) {
      relationText.textContent = mv.relationText;
      relationBox.style.display = 'flex';
    } else {
      relationBox.style.display = 'none';
    }

    // Concepts list
    const conceptsList = document.getElementById('move-concepts-list');
    conceptsList.innerHTML = '';
    mv.concepts.forEach(c => {
      const card = document.createElement('div');
      card.className = 'movement-concept-card';
      card.innerHTML = `
        <div class="concept-card-title">${c.title}</div>
        <div class="concept-card-sub">${c.conceptName}</div>
        <div class="concept-card-sum">${c.summary}</div>
        <p class="concept-card-desc">${c.description}</p>
      `;
      conceptsList.appendChild(card);
    });

    // Representative Philosophers Grid
    const philosophersGrid = document.getElementById('move-philosophers-grid');
    philosophersGrid.innerHTML = '';
    mv.philosophers.forEach(phId => {
      const ph = window.philosophers.find(p => p.id === phId);
      if (ph) {
        const card = document.createElement('div');
        card.className = 'philosopher-link-card';
        card.innerHTML = `
          <img src="${ph.image}" alt="${ph.name}" onerror="this.src='${ph.region === 'east' ? 'assets/images/default-eastern-bust.jpg' : 'assets/images/default-bust.jpg'}'">
          <div class="philosopher-link-info">
            <div class="philosopher-link-name">${ph.name} (${ph.englishName})</div>
            <div class="philosopher-link-era">${ph.period}</div>
          </div>
        `;
        card.addEventListener('click', () => {
          const dailyIndex = getDailyIndex(window.philosophers.length);
          const dailyPhilosopher = window.philosophers[dailyIndex];
          const isToday = (ph.id === dailyPhilosopher.id);
          selectPhilosopher(ph, isToday);
          switchView('detail-view');
        });
        philosophersGrid.appendChild(card);
      }
    });
  }

  // --- SPA View Navigation ---
  function switchView(viewId) {
    const dashboardView = document.getElementById('dashboard-view');
    const detailView = document.getElementById('detail-view');
    const movementView = document.getElementById('movement-view');
    if (!dashboardView || !detailView || !movementView) return;

    const views = [
      { el: dashboardView, id: 'dashboard-view' },
      { el: detailView, id: 'detail-view' },
      { el: movementView, id: 'movement-view' }
    ];

    // Hide all other views
    views.forEach(v => {
      if (v.id !== viewId) {
        v.el.classList.add('hidden-view');
      }
    });

    // Wait for transitions and switch visibility
    setTimeout(() => {
      views.forEach(v => {
        if (v.id === viewId) {
          v.el.style.display = 'block';
          v.el.offsetHeight; // trigger reflow
          v.el.classList.remove('hidden-view');
        } else {
          v.el.style.display = 'none';
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }
});
