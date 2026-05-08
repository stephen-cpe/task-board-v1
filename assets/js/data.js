/**
 * DATA CONFIGURATION
 * Contains all task board data - sprints, user stories, and historical snapshots
 * 
 * HOW TO UPDATE:
 * 1. Edit CONFIG below to update current board state
 * 2. Add new SNAPSHOTS entries to track historical states
 * 3. Commit & push → GitHub Pages auto-updates
 */

// Current active board state
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
      status: "In Progress"
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
      status: "Done",
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
      status: "Done",
      tasks: [
        ["Add first basic pytest test", ["Testing", "CI/CD"]],
        ["Add GitHub Actions workflow for tests", ["CI/CD", "Automation"]]
      ]
    },
    {
      id: "US-003",
      title: "As a reviewer, I want a public task board so I can see project progress.",
      sprint: "Sprint 1",
      status: "Done",
      tasks: [
        ["Publish static task board via GitHub Pages", ["DevOps", "Evidence"]],
        ["Add public task board link to README.md", ["Docs", "Evidence"]]
      ]
    },
    {
      id: "US-004",
      title: "As a learner, I want to enter a learning goal so the app knows what I want to study.",
      sprint: "Sprint 1",
      status: "Done",
      tasks: [
        ["Add learning goal input form", ["Frontend", "MVP"]],
        ["Validate non-empty goal submission", ["Backend", "Validation"]]
      ]
    },
    {
      id: "US-005",
      title: "As a learner, I want to upload study materials so the app can analyze them.",
      sprint: "Sprint 1",
      status: "Done",
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
      status: "Done",
      tasks: [
        ["Add success/error flash messages", ["UX", "MVP"]],
        ["List uploaded files with processing status", ["Frontend", "Feedback"]]
      ]
    },
    {
      id: "US-007",
      title: "As a learner, I want uploaded documents converted into text so the app can analyze them.",
      sprint: "Sprint 2",
      status: "In Progress",
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
      status: "Ready",
      tasks: [
        ["Create AI client wrapper for Ollama", ["AI", "Architecture"]],
        ["Create summary prompt template", ["Prompt Engineering", "AI"]],
        ["Generate summary from extracted text", ["AI", "MVP"]],
        ["Add fallback mocked AI client for tests", ["Testing", "CI/CD"]]
      ]
    },
    {
      id: "US-010",
      title: "As a learner, I want to know whether my documents match my learning goal.",
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
      title: "As a learner, I want a structured study path so I knows what to study next.",
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

// Historical snapshots for viewing previous board states
const SNAPSHOTS = [
  {
    date: "2026-05-07",
    isCurrent: true,
    data: null
  },
  {
    date: "2025-05-06",
    isCurrent: false,
    data: {
      sprints: [
        { name: "Sprint 0", status: "Done", title: "Initialization & Requirements", goal: "Establish repository, finalize SRS/TODO, configure CI baseline, deploy static task board." },
        { name: "Sprint 1", status: "In Progress", title: "Upload & Validation Pipeline", goal: "Implement Flask routing, goal input, file upload validation, storage handling, and baseline pytest suite." },
        { name: "Sprint 2", status: "Backlog", title: "AI Integration & Processing", goal: "Develop document parsers, integrate Ollama client wrapper, implement summarization, relevance checking, and study path generation." },
        { name: "Sprint 3", status: "Backlog", title: "Testing, Deployment & Demo Prep", goal: "Complete integration tests, optimize UI/UX, deploy to free-tier hosting, finalize design/testing documentation, and record demo." }
      ],
      userStories: [
        { id: "US-001", title: "As a developer, I want a documented project setup so I can run the app locally.", status: "Done", sprint: "Sprint 1" },
        { id: "US-002", title: "As a developer, I want automated tests in CI so I can prove basic reliability.", status: "Done", sprint: "Sprint 1" },
        { id: "US-003", title: "As a reviewer, I want a public task board so I can see project progress.", status: "Done", sprint: "Sprint 1" },
        { id: "US-004", title: "As a learner, I want to enter a learning goal so the app knows what I want to study.", status: "In Progress", sprint: "Sprint 1" },
        { id: "US-005", title: "As a learner, I want to upload study materials so the app can analyze them.", status: "In Progress", sprint: "Sprint 1" },
        { id: "US-006", title: "As a learner, I want to see upload status so I know whether my files were accepted.", status: "In Progress", sprint: "Sprint 1" },
        { id: "US-007", title: "As a learner, I want uploaded documents converted into text so the app can analyze them.", status: "Backlog", sprint: "Sprint 2" },
        { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", status: "Backlog", sprint: "Sprint 2" },
        { id: "US-010", title: "As a learner, I want to know whether my documents match my learning goal.", status: "Backlog", sprint: "Sprint 3" },
        { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", status: "Backlog", sprint: "Sprint 3" }
      ]
    }
  },
  {
    date: "2025-05-04",
    isCurrent: false,
    data: {
      sprints: [
        { name: "Sprint 0", status: "Planning", title: "Initialization & Requirements", goal: "Establish repository, finalize SRS/TODO, configure CI baseline, deploy static task board." },
        { name: "Sprint 1", status: "Backlog", title: "Upload & Validation Pipeline", goal: "Implement Flask routing, goal input, file upload validation, storage handling, and baseline pytest suite." },
        { name: "Sprint 2", status: "Backlog", title: "AI Integration & Processing", goal: "Develop document parsers, integrate Ollama client wrapper, implement summarization, relevance checking, and study path generation." },
        { name: "Sprint 3", status: "Backlog", title: "Testing, Deployment & Demo Prep", goal: "Complete integration tests, optimize UI/UX, deploy to free-tier hosting, finalize design/testing documentation, and record demo." }
      ],
      userStories: [
        { id: "US-001", title: "As a developer, I want a documented project setup so I can run the app locally.", status: "Backlog", sprint: "Sprint 1" },
        { id: "US-002", title: "As a developer, I want automated tests in CI so I can prove basic reliability.", status: "Backlog", sprint: "Sprint 1" },
        { id: "US-003", title: "As a reviewer, I want a public task board so I can see project progress.", status: "Backlog", sprint: "Sprint 1" },
        { id: "US-004", title: "As a learner, I want to enter a learning goal so the app knows what I want to study.", status: "Backlog", sprint: "Sprint 1" },
        { id: "US-005", title: "As a learner, I want to upload study materials so the app can analyze them.", status: "Backlog", sprint: "Sprint 1" },
        { id: "US-006", title: "As a learner, I want to see upload status so I know whether my files were accepted.", status: "Backlog", sprint: "Sprint 1" },
        { id: "US-007", title: "As a learner, I want uploaded documents converted into text so the app can analyze them.", status: "Backlog", sprint: "Sprint 2" },
        { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", status: "Backlog", sprint: "Sprint 2" },
        { id: "US-010", title: "As a learner, I want to know whether my documents match my learning goal.", status: "Backlog", sprint: "Sprint 3" },
        { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", status: "Backlog", sprint: "Sprint 3" }
      ]
    }
  }
];