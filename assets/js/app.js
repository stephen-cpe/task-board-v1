/**
 * STUDY-AND-LEARN TASK BOARD CONFIG
 * 
 * HOW TO UPDATE (SOLO DEV):
 * 1. Edit the CONFIG object below to add/remove stories, tasks, or change status
 * 2. To mark a story/task complete: change its status to "Done" in CONFIG
 * 3. Commit & push to GitHub → GitHub Pages auto-updates in ~60 seconds
 * 
 * STORY FORMAT:
 * - id: Must match TODO.md (e.g., "US-001")
 * - title: User story phrasing
 * - sprint: "Sprint 1", etc.
 * - status: "Backlog" | "Ready" | "In Progress" | "Done"
 * - tasks: Array of [taskDescription, tagsArray]
 * 
 * VISUAL FEEDBACK:
 * - Stories with status "Done" show ✅ and strikethrough on all tasks
 * - Stories with status "In Progress" show 🟡 border
 * - Stories with status "Ready" show 🔵 border
 */

const CONFIG = {
  lastUpdated: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
  
  sprints: [
    {
      id: "sprint-0",
      name: "Sprint 0",
      title: "Initialization & Requirements",
      goal: "Establish repository, finalize SRS/TODO, configure CI baseline, deploy static task board.",
      status: "Done"
    },
    {
      id: "sprint-1",
      name: "Sprint 1",
      title: "Upload & Validation Pipeline",
      goal: "Implement Flask routing, goal input, file upload validation, storage handling, and baseline pytest suite.",
      status: "Next"
    },
    {
      id: "sprint-2",
      name: "Sprint 2", 
      title: "AI Integration & Processing",
      goal: "Develop document parsers, integrate Ollama client wrapper, implement summarization, relevance checking, and study path generation.",
      status: "Backlog"
    },
    {
      id: "sprint-3",
      name: "Sprint 3",
      title: "Testing, Deployment & Demo Prep",
      goal: "Complete integration tests, optimize UI/UX, deploy to free-tier hosting, finalize design/testing documentation, and record demo.",
      status: "Backlog"
    }
  ],

  userStories: [
    {
      id: "US-001",
      title: "As a developer, I want a documented project setup so I can run the app locally.",
      sprint: "Sprint 1",
      status: "In Progress",
      tasks: [
        ["Build Flask project structure", ["Flask", "Sprint 1"]],
        ["Add homepage route", ["Backend", "MVP"]],
        ["Add README setup instructions", ["Docs", "MVP"]]
      ]
    },
    {
      id: "US-002",
      title: "As a developer, I want automated tests in CI so I can prove basic reliability.",
      sprint: "Sprint 1",
      status: "In Progress",
      tasks: [
        ["Add first basic pytest test", ["Testing", "CI/CD"]],
        ["Add GitHub Actions workflow for tests", ["CI/CD", "Automation"]]
      ]
    },
    {
      id: "US-003",
      title: "As a reviewer, I want a public task board so I can see project progress.",
      sprint: "Sprint 1",
      status: "In Progress",
      tasks: [
        ["Publish static task board via GitHub Pages", ["DevOps", "Evidence"]],
        ["Add public task board link to README.md", ["Docs", "Evidence"]]
      ]
    },
    {
      id: "US-004",
      title: "As a learner, I want to enter a learning goal so the app knows what I want to study.",
      sprint: "Sprint 1",
      status: "Ready",
      tasks: [
        ["Add learning goal input form", ["Frontend", "MVP"]],
        ["Validate non-empty goal submission", ["Backend", "Validation"]]
      ]
    },
    {
      id: "US-005",
      title: "As a learner, I want to upload study materials so the app can analyze them.",
      sprint: "Sprint 1",
      status: "Ready",
      tasks: [
        ["Add document upload form", ["Frontend", "MVP"]],
        ["Add file type validation (.txt, .md, .pdf, .docx)", ["Backend", "Security"]],
        ["Add upload storage folder", ["Backend", "Persistence"]]
      ]
    },
    {
      id: "US-006",
      title: "As a learner, I want to see upload status so I know whether my files were accepted.",
      sprint: "Sprint 1",
      status: "Backlog",
      tasks: [
        ["Add success/error flash messages", ["UX", "MVP"]],
        ["List uploaded files with processing status", ["Frontend", "Feedback"]]
      ]
    },
    {
      id: "US-007",
      title: "As a learner, I want uploaded documents converted into text so the app can analyze them.",
      sprint: "Sprint 2",
      status: "Backlog",
      tasks: [
        ["Implement .txt parser", ["Parser", "MVP"]],
        ["Implement .md parser", ["Parser", "MVP"]],
        ["Implement .pdf parser", ["Parser", "Stretch"]],
        ["Implement .docx parser", ["Parser", "Stretch"]]
      ]
    },
    {
      id: "US-009",
      title: "As a learner, I want a summary of my materials so I can understand what they contain.",
      sprint: "Sprint 2",
      status: "Backlog",
      tasks: [
        ["Create AI client wrapper for Ollama", ["AI", "Architecture"]],
        ["Create summary prompt template", ["Prompt Engineering", "AI"]],
        ["Generate summary from extracted text", ["AI", "MVP"]],
        ["Add fallback mocked AI client for tests", ["Testing", "CI/CD"]]
      ]
    },
    {
      id: "US-010",
      title: "As a learner, I want to know whether my documents match my goal.",
      sprint: "Sprint 3",
      status: "Backlog",
      tasks: [
        ["Create relevance-check prompt", ["AI", "Prompt Engineering"]],
        ["Return relevance label: strong/partial/weak", ["AI", "MVP"]],
        ["Return relevance explanation", ["UX", "MVP"]]
      ]
    },
    {
      id: "US-011",
      title: "As a learner, I want a structured study path so I know what to study next.",
      sprint: "Sprint 3",
      status: "Backlog",
      tasks: [
        ["Create curriculum-generation prompt", ["AI", "Prompt Engineering"]],
        ["Generate module list with sequence", ["AI", "MVP"]],
        ["Add estimated effort per module", ["UX", "MVP"]],
        ["Format study path clearly in UI", ["Frontend", "MVP"]]
      ]
    }
  ],

  scopeLadder: [
    ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
    ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
    ["High Complexity", ["Vector embedding retrieval", "Advanced document chunking", "OCR for scanned documents", "Source-linked summaries", "Multi-document topic mapping"]],
    ["Deferred / Stretch Goals", ["External media integration", "Automated slide generation", "TTS narration pipeline", "Adaptive scheduling engine", "Multi-user authentication"]]
  ]
};

// ============== RENDERING LOGIC (READ-ONLY, NO INTERACTIVITY) ==============

function getStatusClass(status) {
  const map = {
    "Done": "done",
    "In Progress": "in-progress", 
    "Ready": "ready",
    "Backlog": "backlog",
    "Planning": "planning",
    "Next": "next"
  };
  return map[status] || "backlog";
}

function renderSprints() {
  const root = document.getElementById("sprintCards");
  root.innerHTML = CONFIG.sprints.map(sprint => `
    <div class="col-md-6 col-xl-3">
      <article class="sprint-card ${getStatusClass(sprint.status)}">
        <div class="sprint-kicker">${sprint.name} // ${sprint.status}</div>
        <h3 class="h5 sprint-title mt-2">${sprint.title}</h3>
        <p class="sprint-goal mb-0">${sprint.goal}</p>
      </article>
    </div>
  `).join("");
}

function renderBoard() {
  const root = document.getElementById("kanbanBoard");
  
  // Group stories by status for kanban columns
  const columns = {
    "Backlog": [],
    "Ready": [], 
    "In Progress": [],
    "Done": []
  };
  
  CONFIG.userStories.forEach(story => {
    if (columns[story.status]) {
      columns[story.status].push(story);
    }
  });
  
  root.innerHTML = Object.entries(columns).map(([column, stories]) => `
    <div class="col-md-6 col-xl">
      <section class="kanban-column">
        <div class="kanban-header">
          <h3 class="h6 kanban-title">${column}</h3>
          <span class="task-count">${stories.reduce((sum, s) => sum + s.tasks.length, 0)}</span>
        </div>
        ${stories.map(story => renderStory(story)).join("")}
      </section>
    </div>
  `).join("");
}

function renderStory(story) {
  const isDone = story.status === "Done";
  return `
    <article class="story-card ${getStatusClass(story.status)}">
      <div class="story-header">
        <span class="story-id">${story.id}</span>
        <h4 class="story-title">${story.title}</h4>
      </div>
      <div class="story-tasks">
        ${story.tasks.map((task) => {
          const [desc, tags] = task;
          return `
            <div class="task-card ${isDone ? 'completed' : ''}">
              <span class="task-check">${isDone ? '✅' : '⬜'}</span>
              <div class="task-content">
                <div class="task-desc ${isDone ? 'strikethrough' : ''}">${desc}</div>
                <div class="task-tags">${tags.map(tag => `<span class="task-tag">${tag}</span>`).join("")}</div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </article>
  `;
}


function renderScopeLadder() {
  const root = document.getElementById("scopeLadder");
  root.innerHTML = CONFIG.scopeLadder.map(([level, items]) => `
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

// Initialize all sections
document.getElementById("lastUpdated").textContent = CONFIG.lastUpdated;
renderSprints();
renderBoard();
renderScopeLadder();