const sprints = [
  {
    name: "Sprint 0",
    title: "Initialization & Requirements",
    goal: "Establish repository structure, finalize SRS/TODO, configure CI baseline, and deploy static task board.",
    status: "Planning"
  },
  {
    name: "Sprint 1",
    title: "Upload & Validation Pipeline",
    goal: "Implement Flask routing, goal input, file upload validation, storage handling, and baseline pytest suite.",
    status: "Next"
  },
  {
    name: "Sprint 2",
    title: "AI Integration & Processing",
    goal: "Develop document parsers, integrate Ollama client wrapper, implement summarization, relevance checking, and study path generation.",
    status: "Backlog"
  },
  {
    name: "Sprint 3",
    title: "Testing, Deployment & Demo Prep",
    goal: "Complete integration tests, optimize UI/UX, deploy to free-tier hosting, finalize design/testing documentation, and record demo.",
    status: "Backlog"
  }
];

const board = {
  "Backlog": [
    ["Finalize MVP acceptance criteria", "Define strict pass/fail conditions for each core user story.", ["SRS", "MVP"]],
    ["Evaluate vector storage architecture", "Determine necessity of pgvector/ChromaDB vs. file-based metadata for initial release.", ["Architecture"]],
    ["Prioritize stretch goals", "Maintain deferred feature visibility while protecting MVP timeline.", ["Planning"]]
  ],
  "Ready": [
    ["Initialize Flask project structure", "Configure app factory, routing, template engine, and environment variables.", ["Flask", "Sprint 0"]],
    ["Implement file upload endpoint", "Accept supported formats (.txt, .md, .pdf, .docx) with strict type validation.", ["Backend", "MVP"]],
    ["Configure pytest framework", "Establish unit and integration test directories with baseline CI workflow.", ["CI/CD", "Testing"]]
  ],
  "In Progress": [
    ["Deploy static task board", "Host board publicly via GitHub Pages for handbook-compliant evidence.", ["DevOps", "Evidence"]],
    ["Update requirements specification", "Align SRS.md with current sprint scope and architectural decisions.", ["Spec-Driven"]]
  ],
  "Review": [
    ["Validate handbook compliance", "Cross-check all deliverables against Capstone Project & Presentation Rubrics.", ["Quantic"]]
  ],
  "Done": [
    ["Project charter defined", "Core learning objective, constraints, and technical stack finalized.", ["Concept"]],
    ["UI theme established", "Retro-professional visual identity implemented via Bootstrap & custom CSS.", ["Frontend"]]
  ]
};

const scopeLadder = [
  ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
  ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
  ["High Complexity", ["Vector embedding retrieval", "Advanced document chunking", "OCR for scanned documents", "Source-linked summaries", "Multi-document topic mapping"]],
  ["Deferred / Stretch Goals", ["External media integration", "Automated slide generation", "TTS narration pipeline", "Adaptive scheduling engine", "Multi-user authentication"]]
];

function renderSprints() {
  const root = document.getElementById("sprintCards");
  root.innerHTML = sprints.map(s => `
    <div class="col-md-6 col-xl-3">
      <article class="sprint-card">
        <div class="sprint-kicker">${s.name} // ${s.status}</div>
        <h3 class="h5 sprint-title mt-2">${s.title}</h3>
        <p class="sprint-goal mb-0">${s.goal}</p>
      </article>
    </div>
  `).join("");
}

function renderBoard() {
  const root = document.getElementById("kanbanBoard");
  root.innerHTML = Object.entries(board).map(([column, tasks]) => `
    <div class="col-md-6 col-xl">
      <section class="kanban-column">
        <div class="kanban-header">
          <h3 class="h6 kanban-title">${column}</h3>
          <span class="task-count">${tasks.length}</span>
        </div>
        ${tasks.map(task => renderTask(column, task)).join("")}
      </section>
    </div>
  `).join("");
}

function renderTask(column, task) {
  const [title, desc, tags] = task;
  const stateClass = column === "Done" ? "done" : column === "In Progress" ? "in-progress" : "";
  return `
    <article class="task-card ${stateClass}">
      <div class="task-title">${title}</div>
      <p class="task-desc">${desc}</p>
      <div class="task-tags">${tags.map(tag => `<span class="task-tag">${tag}</span>`).join("")}</div>
    </article>
  `;
}

function renderScopeLadder() {
  const root = document.getElementById("scopeLadder");
  root.innerHTML = scopeLadder.map(([level, items]) => `
    <div class="col-md-6 col-xl-3">
      <article class="scope-card">
        <div class="scope-level">${level}</div>
        <ul class="mt-2 ps-3">
          ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </div>
  `).join("");
}

document.getElementById("lastUpdated").textContent = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "short",
  day: "numeric"
});

renderSprints();
renderBoard();
renderScopeLadder();