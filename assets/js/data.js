/**
 * DATA CONFIGURATION
 * Contains all task board data - sprints, user stories, and historical snapshots
 * 
 * HOW TO UPDATE:
 * 1. Edit CONFIG below to update current board state
 * 2. Add new SNAPSHOTS entries to track historical states
 * 3. Commit & push → GitHub Pages auto-updates
 * 
 * FORMAT (one line per story):
 * { id: "US-001", title: "...", sprint: "Sprint 1", status: "Done", tasks: [...] }
 * - tasks is optional - omit it to show just "Sprint: X" in the board
 */

// Current active board state (May 8, 2026)
const CONFIG = {
  lastUpdated: "May 8, 2026",
  sprints: [
    { id: "sprint-0", name: "Sprint 0", title: "Initialization & Requirements", goal: "Establish repository, finalize SRS/TODO, configure CI baseline, deploy static task board.", status: "Done" },
    { id: "sprint-1", name: "Sprint 1", title: "Foundation & Upload Workflow", goal: "Flask structure, goal input, file validation, upload storage, baseline tests, and board publication.", status: "Done" },
    { id: "sprint-2", name: "Sprint 2", title: "RAG Pipeline & AI Processing", goal: "Implement LangChain chunking, ChromaDB vector storage, multi-upload (≤5), parsers, and summary service with mocked fallback.", status: "In Progress" },
    { id: "sprint-3", name: "Sprint 3", title: "Relevance, Study Path & UI Polish", goal: "Complete AI relevance checking, curriculum generation, guided workflow UI, and end-to-end integration tests.", status: "Ready" },
    { id: "sprint-4", name: "Sprint 4", title: "Deployment & Demo Prep", goal: "Deploy to free-tier host, finalize documentation, prepare demo script, record 15–20 min presentation.", status: "Backlog" }
  ],
  userStories: [
    { id: "US-001", title: "As a developer, I want a documented project setup so I can run the app locally.", sprint: "Sprint 1", status: "Done", tasks: [["Build Flask project structure", ["Flask", "Sprint 1"]], ["Add homepage route", ["Backend", "MVP"]], ["Add README setup instructions", ["Docs", "MVP"]]] },
    { id: "US-002", title: "As a developer, I want automated tests in CI so I can prove basic reliability.", sprint: "Sprint 1", status: "Done", tasks: [["Add first basic pytest test", ["Testing", "CI/CD"]], ["Add GitHub Actions workflow for tests", ["CI/CD", "Automation"]]] },
    { id: "US-003", title: "As a reviewer, I want a public task board so I can see project progress.", sprint: "Sprint 1", status: "Done", tasks: [["Publish static task board via GitHub Pages", ["DevOps", "Evidence"]], ["Add public task board link to README.md", ["Docs", "Evidence"]]] },
    { id: "US-004", title: "As a learner, I want to enter a learning goal so the app knows what I want to study.", sprint: "Sprint 1", status: "Done", tasks: [["Add learning goal input form", ["Frontend", "MVP"]], ["Validate non-empty goal submission", ["Backend", "Validation"]]] },
    { id: "US-005", title: "As a learner, I want to upload study materials so the app can analyze them.", sprint: "Sprint 1", status: "Done", tasks: [["Add document upload form", ["Frontend", "MVP"]], ["Add file type validation (.txt, .md, .pdf, .docx)", ["Backend", "Security"]], ["Add upload storage folder", ["Backend", "Persistence"]]] },
    { id: "US-006", title: "As a learner, I want to see upload status so I know whether my files were accepted.", sprint: "Sprint 1", status: "Done", tasks: [["Add success/error flash messages", ["UX", "MVP"]], ["List uploaded files with processing status", ["Frontend", "Feedback"]]] },
    { id: "US-007", title: "As a learner, I want uploaded documents converted into text so the app can analyze them.", sprint: "Sprint 2", status: "Done", tasks: [["Implement .txt parser", ["Parser", "MVP"]], ["Implement .md parser", ["Parser", "MVP"]], ["Implement .pdf parser", ["Parser", "MVP"]], ["Implement .docx parser", ["Parser", "MVP"]]] },
    { id: "US-008", title: "As a developer, I want parser errors handled clearly so failed documents do not crash the app.", sprint: "Sprint 2", status: "Done", tasks: [["Add graceful error handling for unsupported/empty files", ["Parser", "MVP"]], ["Add ValueError propagation to routes", ["Backend", "UX"]]] },
    { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", sprint: "Sprint 2", status: "Done", tasks: [["Create AI client wrapper for Ollama", ["AI", "Architecture"]], ["Create summary prompt template", ["Prompt Engineering", "AI"]], ["Generate summary from extracted text", ["AI", "MVP"]], ["Add fallback mocked AI client for tests", ["Testing", "CI/CD"]]] },
    { id: "US-010", title: "As a learner, I want to know whether my documents match my learning goal.", sprint: "Sprint 3", status: "In Progress", tasks: [["Create relevance-check prompt", ["AI", "Prompt Engineering"]], ["Return relevance label: strong/partial/weak", ["AI", "MVP"]], ["Return relevance explanation", ["UX", "MVP"]]] },
    { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", sprint: "Sprint 3", status: "Ready", tasks: [["Create curriculum-generation prompt", ["AI", "Prompt Engineering"]], ["Generate module list with sequence", ["AI", "MVP"]], ["Add estimated effort per module", ["UX", "MVP"]], ["Format study path clearly in UI", ["Frontend", "MVP"]]] },
    { id: "US-012", title: "As a learner, I want the app to feel simple and guided.", sprint: "Sprint 3", status: "Done", tasks: [["Implement form → upload → results flow", ["UX", "MVP"]], ["Add loading spinner during AI processing", ["Frontend", "Polish"]]] },
    { id: "US-013", title: "As a learner, I want the product to feel friendly and motivating.", sprint: "Sprint 4", status: "Ready", tasks: [["Apply retro theme to results page", ["Frontend", "Polish"]], ["Add motivational copy/placeholders", ["UX", "Should-Have"]]] },
    { id: "US-014", title: "As a reviewer, I want the demo to show the full workflow.", sprint: "Sprint 4", status: "Ready", tasks: [["Prepare demo script & sample documents", ["Demo", "MVP"]], ["Deploy to free-tier hosting", ["DevOps", "Deployment"]], ["Record 15-20 min final presentation", ["Evidence", "Submission"]]] },
    { id: "US-015", title: "As a learner, I want to upload up to 5 documents at once so I can analyze related materials together.", sprint: "Sprint 2", status: "In Progress", tasks: [["Integrate LangChain RecursiveCharacterTextSplitter", ["RAG", "MVP"]], ["Update upload route to accept request.files.getlist() (max 5)", ["Backend", "MVP"]], ["Add multi-file session handling & collection naming", ["Backend", "MVP"]]] },
    { id: "US-016", title: "As a learner, I want AI analysis based on retrieved document chunks so outputs stay grounded and accurate.", sprint: "Sprint 2", status: "In Progress", tasks: [["Set up persistent ChromaDB client service (./data/chroma_db)", ["RAG", "MVP"]], ["Implement chunk → embed → store pipeline per file", ["AI", "MVP"]], ["Implement similarity search & context builder for prompts", ["AI", "MVP"]], ["Add mocked retrieval tests for CI (CI=true env var)", ["Testing", "CI/CD"]]] }
  ],
  scopeLadder: [
    ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
    ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
    ["High Complexity", ["Vector embedding retrieval", "Advanced document chunking", "OCR for scanned PDFs", "Source-linked summaries", "Multi-document topic mapping"]],
    ["Deferred / Stretch Goals", ["External media integration", "Automated slide generation", "TTS narration pipeline", "Adaptive scheduling engine", "Multi-user authentication"]]
  ]
};

const SNAPSHOTS = [
  { date: "2026-05-08", isCurrent: true, data: null },
  
  { date: "2026-05-07", isCurrent: false, data: {
    sprints: [
      { name: "Sprint 0", status: "Done", title: "Initialization & Requirements", goal: "Establish repository, finalize SRS/TODO, configure CI baseline, deploy static task board." },
      { name: "Sprint 1", status: "Done", title: "Upload & Validation Pipeline", goal: "Implement Flask routing, goal input, file upload validation, storage handling, and baseline pytest suite." },
      { name: "Sprint 2", status: "Done", title: "AI Integration & Processing", goal: "Develop document parsers, integrate Ollama client wrapper, implement summarization, relevance checking, and study path generation." },
      { name: "Sprint 3", status: "In Progress", title: "Testing, Deployment & Demo Prep", goal: "Complete integration tests, optimize UI/UX, deploy to free-tier hosting, finalize design/testing documentation, and record demo." }
    ],
    userStories: [
      { id: "US-001", title: "As a developer, I want a documented project setup so I can run the app locally.", status: "Done", sprint: "Sprint 1" },
      { id: "US-002", title: "As a developer, I want automated tests in CI so I can prove basic reliability.", status: "Done", sprint: "Sprint 1" },
      { id: "US-003", title: "As a reviewer, I want a public task board so I can see project progress.", status: "Done", sprint: "Sprint 1" },
      { id: "US-004", title: "As a learner, I want to enter a learning goal so the app knows what I want to study.", status: "Done", sprint: "Sprint 1" },
      { id: "US-005", title: "As a learner, I want to upload study materials so the app can analyze them.", status: "Done", sprint: "Sprint 1" },
      { id: "US-006", title: "As a learner, I want to see upload status so I know whether my files were accepted.", status: "Done", sprint: "Sprint 1" },
      { id: "US-007", title: "As a learner, I want uploaded documents converted into text so the app can analyze them.", status: "In Progress", sprint: "Sprint 2" },
      { id: "US-008", title: "As a developer, I want parser errors handled clearly so failed documents do not crash the app.", status: "Backlog", sprint: "Sprint 2" },
      { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", status: "Ready", sprint: "Sprint 2" },
      { id: "US-010", title: "As a learner, I want to know whether my documents match my goal.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-012", title: "As a learner, I want the app to feel simple and guided.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-013", title: "As a learner, I want the product to feel friendly and motivating.", status: "Backlog", sprint: "Sprint 4" },
      { id: "US-014", title: "As a reviewer, I want the demo to show the full workflow.", status: "Backlog", sprint: "Sprint 4" }
    ]
  }},
  
  { date: "2025-05-06", isCurrent: false, data: {
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
      { id: "US-008", title: "As a developer, I want parser errors handled clearly so failed documents do not crash the app.", status: "Backlog", sprint: "Sprint 2" },
      { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", status: "Backlog", sprint: "Sprint 2" },
      { id: "US-010", title: "As a learner, I want to know whether my documents match my goal.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-012", title: "As a learner, I want the app to feel simple and guided.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-013", title: "As a learner, I want the product to feel friendly and motivating.", status: "Backlog", sprint: "Sprint 4" },
      { id: "US-014", title: "As a reviewer, I want the demo to show the full workflow.", status: "Backlog", sprint: "Sprint 4" }
    ]
  }},
  
  { date: "2025-05-04", isCurrent: false, data: {
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
      { id: "US-008", title: "As a developer, I want parser errors handled clearly so failed documents do not crash the app.", status: "Backlog", sprint: "Sprint 2" },
      { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", status: "Backlog", sprint: "Sprint 2" },
      { id: "US-010", title: "As a learner, I want to know whether my documents match my goal.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-012", title: "As a learner, I want the app to feel simple and guided.", status: "Backlog", sprint: "Sprint 3" },
      { id: "US-013", title: "As a learner, I want the product to feel friendly and motivating.", status: "Backlog", sprint: "Sprint 4" },
      { id: "US-014", title: "As a reviewer, I want the demo to show the full workflow.", status: "Backlog", sprint: "Sprint 4" }
    ]
  }}
];