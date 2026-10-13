/**
 * Master Application Controller: Cambridge O Level Physics 5054
 */

function loadBatchesDirectly() {
  const batches = [
    typeof QUESTIONS_BATCH_1 !== 'undefined' ? QUESTIONS_BATCH_1 : [],
    typeof QUESTIONS_BATCH_2 !== 'undefined' ? QUESTIONS_BATCH_2 : [],
    typeof QUESTIONS_BATCH_3 !== 'undefined' ? QUESTIONS_BATCH_3 : [],
    typeof QUESTIONS_BATCH_4 !== 'undefined' ? QUESTIONS_BATCH_4 : [],
    typeof QUESTIONS_BATCH_5 !== 'undefined' ? QUESTIONS_BATCH_5 : [],
    typeof QUESTIONS_BATCH_6 !== 'undefined' ? QUESTIONS_BATCH_6 : [],
    typeof QUESTIONS_BATCH_7 !== 'undefined' ? QUESTIONS_BATCH_7 : [],
    typeof QUESTIONS_BATCH_8 !== 'undefined' ? QUESTIONS_BATCH_8 : [],
    typeof QUESTIONS_BATCH_9 !== 'undefined' ? QUESTIONS_BATCH_9 : [],
    typeof QUESTIONS_BATCH_10 !== 'undefined' ? QUESTIONS_BATCH_10 : [],
    typeof QUESTIONS_BATCH_11 !== 'undefined' ? QUESTIONS_BATCH_11 : [],
    typeof QUESTIONS_BATCH_12 !== 'undefined' ? QUESTIONS_BATCH_12 : [],
    typeof QUESTIONS_BATCH_13 !== 'undefined' ? QUESTIONS_BATCH_13 : [],
    typeof QUESTIONS_BATCH_14 !== 'undefined' ? QUESTIONS_BATCH_14 : [],
    typeof QUESTIONS_BATCH_15 !== 'undefined' ? QUESTIONS_BATCH_15 : [],
    typeof QUESTIONS_BATCH_16 !== 'undefined' ? QUESTIONS_BATCH_16 : [],
    typeof QUESTIONS_BATCH_17 !== 'undefined' ? QUESTIONS_BATCH_17 : [],
    typeof QUESTIONS_BATCH_18 !== 'undefined' ? QUESTIONS_BATCH_18 : [],
    typeof QUESTIONS_BATCH_19 !== 'undefined' ? QUESTIONS_BATCH_19 : [],
    typeof QUESTIONS_BATCH_20 !== 'undefined' ? QUESTIONS_BATCH_20 : [],
    typeof QUESTIONS_BATCH_21 !== 'undefined' ? QUESTIONS_BATCH_21 : [],
    typeof QUESTIONS_BATCH_22 !== 'undefined' ? QUESTIONS_BATCH_22 : [],
    typeof QUESTIONS_BATCH_23 !== 'undefined' ? QUESTIONS_BATCH_23 : [],
    typeof QUESTIONS_BATCH_24 !== 'undefined' ? QUESTIONS_BATCH_24 : [],
    typeof QUESTIONS_BATCH_25 !== 'undefined' ? QUESTIONS_BATCH_25 : [],
    typeof QUESTIONS_BATCH_26 !== 'undefined' ? QUESTIONS_BATCH_26 : []
  ];

  const combined = [];
  batches.forEach(b => combined.push(...b));
  return combined;
}

const AppState = {
  allQuestions: [],
  filteredQuestions: [],
  currentIndex: 0,
  activeFilters: { query: "", paperType: "all", topic: "all", subtopic: "all" }
};

// Automatic Simulation Fallback: প্রতিটি প্রশ্নে মেট্রিক্স কার্ড ও লাইভ মডেল যোগ করবে
function resolveSimulation(q) {
  if (q.simulation) return q.simulation;

  const text = (q.questionText || "").toLowerCase();

  if (text.includes("brownian") || text.includes("smoke")) {
    return {
      type: "brownian_motion",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Motion Profile", expr: () => "Random Zig-Zag" },
        { label: "Cause", expr: () => "Air Molecule Impacts" }
      ]
    };
  } else if (text.includes("pressure") || text.includes("cylinder") || text.includes("boyle") || text.includes("gas syringe")) {
    return {
      type: "gas_laws_chamber",
      defaultParams: { volumeCm3: 50 },
      controls: [{ id: "volumeCm3", name: "Volume", min: 20, max: 80, step: 5, default: 50, unit: "cm³" }],
      readouts: [
        { label: "Piston Volume", expr: (p) => `${p.volumeCm3} cm³` },
        { label: "Calculated Pressure", expr: (p) => `${(7200 / p.volumeCm3).toFixed(1)} kPa` }
      ]
    };
  } else if (text.includes("evaporat") || text.includes("puddle") || text.includes("cooling rate")) {
    return {
      type: "evaporation",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Escaping Phase", expr: () => "High E_k Molecules" },
        { label: "Liquid Temp", expr: () => "Falling (Cooled)" }
      ]
    };
  } else if (text.includes("expand") || text.includes("bimetallic") || text.includes("brass")) {
    return {
      type: "thermal_expansion_rod",
      defaultParams: { tempC: 80 },
      controls: [{ id: "tempC", name: "Strip Temp", min: 20, max: 120, step: 20, default: 80, unit: "°C" }],
      readouts: [
        { label: "Outer Metal", expr: () => "Brass (Expands More)" },
        { label: "Curvature", expr: (p) => p.tempC > 20 ? "Bent Outward" : "Straight" }
      ]
    };
  } else if (text.includes("thermometer") || text.includes("bulb") || text.includes("bore")) {
    return {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Sensitivity", expr: () => "Optimal (Narrow Bore)" },
        { label: "Scale Profile", expr: () => "Linear" }
      ]
    };
  } else {
    // Default: Kinetic State Particle View
    const isSolid = text.includes("solid");
    const isLiquid = text.includes("liquid");
    return {
      type: "kinetic_state",
      defaultParams: { state: isSolid ? "solid" : (isLiquid ? "liquid" : "gas") },
      controls: [],
      readouts: [
        { label: "Molecular State", expr: () => isSolid ? "Solid Lattice" : (isLiquid ? "Liquid Flow" : "High Speed Gas") },
        { label: "Spacing Status", expr: () => isSolid ? "Very Close" : (isLiquid ? "Touching" : "Far Apart") }
      ]
    };
  }
}

function formatQuestionText(rawText) {
  if (!rawText) return "";
  const lines = rawText.split("\n");
  let inTable = false;
  let html = [];
  let tableLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("|") && line.endsWith("|")) {
      inTable = true;
      tableLines.push(line);
    } else {
      if (inTable) {
        html.push(buildHtmlTable(tableLines));
        tableLines = [];
        inTable = false;
      }
      if (line) {
        html.push(`<p class="q-para">${line}</p>`);
      }
    }
  }
  if (inTable) {
    html.push(buildHtmlTable(tableLines));
  }
  return html.join("\n");
}

function buildHtmlTable(lines) {
  const cleanRows = lines.filter(l => !l.match(/^\|(\s*:?-+:?\s*\|)+$/));
  if (cleanRows.length === 0) return "";

  let tableHtml = '<div class="table-responsive"><table class="exam-table">';
  const headers = cleanRows[0].split("|").slice(1, -1).map(c => c.trim() || 'Option');
  tableHtml += '<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';

  for (let r = 1; r < cleanRows.length; r++) {
    const cells = cleanRows[r].split("|").slice(1, -1).map(c => c.trim());
    tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
  }
  tableHtml += '</tbody></table></div>';
  return tableHtml;
}

function applyFilters() {
  const q = AppState.activeFilters.query.trim().toLowerCase();
  const type = AppState.activeFilters.paperType;
  const topic = AppState.activeFilters.topic;
  const subtopic = AppState.activeFilters.subtopic;

  AppState.filteredQuestions = AppState.allQuestions.filter((item) => {
    if (type !== "all" && item.paperType !== type) return false;
    if (topic !== "all" && (!item.topic || !item.topic.startsWith(topic))) return false;
    if (subtopic !== "all" && item.subtopic !== subtopic) return false;

    if (q) {
      const matchId = (item.globalId || "").toLowerCase().includes(q);
      const matchExam = (item.examId || "").toLowerCase().includes(q);
      const matchRef = (item.paperRef || "").toLowerCase().includes(q);
      const matchText = (item.questionText || "").toLowerCase().includes(q);
      const matchSub = (item.subtopic || "").toLowerCase().includes(q);
      const matchConcepts = (item.physicsConcepts || "").toLowerCase().includes(q);
      const matchSolution = Array.isArray(item.stepByStepSolution)
        ? item.stepByStepSolution.some(s => (s.body || "").toLowerCase().includes(q))
        : false;

      if (!matchId && !matchExam && !matchRef && !matchText && !matchSub && !matchConcepts && !matchSolution) {
        return false;
      }
    }
    return true;
  });

  AppState.currentIndex = 0;
  renderView();
}

function populateSubtopics() {
  const subtopicSelect = document.getElementById("subtopicFilter");
  if (!subtopicSelect) return;

  const topicPrefix = AppState.activeFilters.topic;
  const relevantQuestions = AppState.allQuestions.filter(q => {
    if (topicPrefix === "all") return true;
    return q.topic && q.topic.startsWith(topicPrefix);
  });

  const uniqueSubtopics = Array.from(new Set(relevantQuestions.map(q => q.subtopic).filter(Boolean))).sort();

  subtopicSelect.innerHTML = `<option value="all">All Subtopics (${uniqueSubtopics.length})</option>`;
  uniqueSubtopics.forEach(st => {
    const opt = document.createElement("option");
    opt.value = st;
    opt.textContent = st;
    subtopicSelect.appendChild(opt);
  });
}

function renderView() {
  const container = document.getElementById("questionCardContainer");
  const countBadge = document.getElementById("resultsCount");
  const jumpInput = document.getElementById("jumpInput");
  const jumpTotal = document.getElementById("jumpTotal");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const total = AppState.allQuestions.length;
  const filteredCount = AppState.filteredQuestions.length;

  countBadge.innerHTML = `Showing <strong>${filteredCount}</strong> of ${total}`;
  jumpTotal.textContent = `of ${filteredCount || 1}`;

  if (filteredCount === 0) {
    container.innerHTML = `
      <div class="empty-state-card">
        <h3>No Questions Match Your Filter</h3>
        <p>Try clearing your search query or selecting "All" under Paper Types.</p>
      </div>
    `;
    jumpInput.value = 0;
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    if (window.SimulationEngine) window.SimulationEngine.stop();
    return;
  }

  const q = AppState.filteredQuestions[AppState.currentIndex];
  jumpInput.value = AppState.currentIndex + 1;
  prevBtn.disabled = AppState.currentIndex === 0;
  nextBtn.disabled = AppState.currentIndex === filteredCount - 1;

  // Render Options
  let optionsMarkup = "";
  if (q.options && q.options.length > 0) {
    const hasTableInQuestion = q.questionText && q.questionText.includes("|");

    if (hasTableInQuestion) {
      optionsMarkup = `
        <div class="mcq-compact-wrapper">
          <span class="mcq-compact-label">Select Option</span>
          <div class="mcq-options-compact" id="mcqContainer">
            ${q.options.map(opt => `
              <button type="button" class="mcq-option-btn" data-key="${opt.key}">
                ${opt.key}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      optionsMarkup = `
        <div class="mcq-options-container" id="mcqContainer">
          ${q.options.map(opt => `
            <button type="button" class="mcq-option-btn" data-key="${opt.key}">
              <span class="opt-key">${opt.key}.</span>
              <span class="opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      `;
    }
  }

  let solutionStepsHtml = "";
  if (Array.isArray(q.stepByStepSolution) && q.stepByStepSolution.length > 0) {
    solutionStepsHtml = q.stepByStepSolution.map(s => `
      <div class="step-card">
        <div class="step-title">Step ${s.step}: ${s.title}</div>
        <div class="step-body">${s.body}</div>
      </div>
    `).join("");
  }

  const activeSimulation = resolveSimulation(q);

  container.innerHTML = `
    <article class="question-card">
      <header class="q-meta-header">
        <div class="q-tags">
          <span class="tag-id">${q.globalId}</span>
          <span class="tag-paper">${q.paperRef}</span>
          <span class="tag-type type-${q.paperType}">${q.paperType.toUpperCase()} (${q.marks} Mark${q.marks > 1 ? 's' : ''})</span>
        </div>
        <div class="q-subtopic-title">${q.subtopic || ''}</div>
      </header>

      <div class="q-body-text">${formatQuestionText(q.questionText)}</div>

      ${optionsMarkup}

      <div class="solution-toggle-wrapper">
        <button type="button" class="toggle-solution-btn" id="toggleSolBtn">
          <span>&#128161;</span> Show Detailed Solution &amp; Mark Scheme
        </button>
      </div>

      <div class="solution-panel" id="solutionPanel" style="display: none;">
        <div class="sol-section-title">Step-by-Step Explanation</div>
        ${solutionStepsHtml}

        ${q.finalAnswer ? `<div class="final-answer-banner">Final Answer: ${q.finalAnswer}</div>` : ''}

        ${q.takeaway ? `
          <div class="pedagogy-box box-takeaway">
            <strong>Key Takeaway:</strong> ${q.takeaway}
          </div>
        ` : ''}
      </div>

      <!-- Live Glowing Physics Simulation Viewport -->
      <div class="simulation-card-section">
        <div class="sim-header">
          <span class="sim-title">&#9881; Live Physics Interactive Simulation</span>
        </div>
        <div id="simMountPoint"></div>
      </div>
    </article>
  `;

  if (q.options && q.options.length > 0) {
    const optButtons = container.querySelectorAll(".mcq-option-btn");
    optButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedKey = btn.dataset.key;
        optButtons.forEach(b => {
          b.classList.add("locked");
          if (b.dataset.key === q.correctOption) {
            b.classList.add("selected-correct");
          } else if (b.dataset.key === selectedKey) {
            b.classList.add("selected-wrong");
          }
        });
        const solPanel = document.getElementById("solutionPanel");
        if (solPanel) solPanel.style.display = "block";
      });
    });
  }

  const toggleSolBtn = document.getElementById("toggleSolBtn");
  const solPanel = document.getElementById("solutionPanel");
  if (toggleSolBtn && solPanel) {
    toggleSolBtn.addEventListener("click", () => {
      const isVisible = solPanel.style.display === "block";
      solPanel.style.display = isVisible ? "none" : "block";
      toggleSolBtn.innerHTML = isVisible
        ? `<span>&#128161;</span> Show Detailed Solution &amp; Mark Scheme`
        : `<span>&#128065;</span> Hide Solution`;
    });
  }

  // Mount Simulation Engine
  if (window.SimulationEngine) {
    window.SimulationEngine.mount("simMountPoint", activeSimulation);
  }

  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([container]).catch(err => console.error("MathJax Error: ", err));
  }
}

function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const pillGroup = document.getElementById("paperTypePills");
  const topicFilter = document.getElementById("topicFilter");
  const subtopicFilter = document.getElementById("subtopicFilter");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const randomBtn = document.getElementById("randomBtn");
  const jumpInput = document.getElementById("jumpInput");

  let searchDebounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      AppState.activeFilters.query = e.target.value;
      clearBtn.hidden = e.target.value.length === 0;
      applyFilters();
    }, 150);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    AppState.activeFilters.query = "";
    clearBtn.hidden = true;
    searchInput.focus();
    applyFilters();
  });

  pillGroup.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    pillGroup.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    AppState.activeFilters.paperType = pill.dataset.type;
    applyFilters();
  });

  topicFilter.addEventListener("change", (e) => {
    AppState.activeFilters.topic = e.target.value;
    AppState.activeFilters.subtopic = "all";
    populateSubtopics();
    applyFilters();
  });

  subtopicFilter.addEventListener("change", (e) => {
    AppState.activeFilters.subtopic = e.target.value;
    applyFilters();
  });

  prevBtn.addEventListener("click", () => {
    if (AppState.currentIndex > 0) {
      AppState.currentIndex--;
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  nextBtn.addEventListener("click", () => {
    if (AppState.currentIndex < AppState.filteredQuestions.length - 1) {
      AppState.currentIndex++;
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  randomBtn.addEventListener("click", () => {
    if (AppState.filteredQuestions.length > 0) {
      AppState.currentIndex = Math.floor(Math.random() * AppState.filteredQuestions.length);
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  jumpInput.addEventListener("change", (e) => {
    let val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= AppState.filteredQuestions.length) {
      AppState.currentIndex = val - 1;
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      jumpInput.value = AppState.currentIndex + 1;
    }
  });

  window.addEventListener("keydown", (e) => {
    if (["input", "textarea"].includes(document.activeElement.tagName.toLowerCase())) return;
    if (e.key === "ArrowLeft") {
      prevBtn.click();
    } else if (e.key === "ArrowRight") {
      nextBtn.click();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  AppState.allQuestions = loadBatchesDirectly();
  AppState.filteredQuestions = [...AppState.allQuestions];

  const totalEl = document.getElementById("totalDatabaseCount");
  if (totalEl) totalEl.textContent = `Total: ${AppState.allQuestions.length} Questions`;

  populateSubtopics();
  setupEventListeners();
  applyFilters();
});