/**
 * DATA CONFIGURATION
 * Contains all task board data - sprints, user stories, and historical snapshots
 */
const CONFIG = {
  lastUpdated: "May 12, 2026",
  sprints: [
    { id: "Sprint 1", title: "Foundation & Architecture", goal: "Flask setup, CI/CD, upload pipeline, baseline testing, static board.", status: "Done" },
    { id: "Sprint 2", title: "Core AI & RAG Pipeline", goal: "Document parsing, chunking, ChromaDB, Ollama integration, summary/relevance/study path.", status: "Done" },
    { id: "Sprint 3", title: "Interactive Learning Engine", goal: "Slide deck generator, mixed-type quizzes, checkpoints, gated progression, AJAX grading.", status: "Done" },
    { id: "Sprint 4", title: "UX Polish & QA Stabilization", goal: "Fix fill-in-the-blank, mascot positioning, loading feedback, prompt tuning, difficulty selector.", status: "In Progress" },
    { id: "Sprint 5", title: "User Accounts & Session Persistence", goal: "Flask-Login + PostgreSQL, sign-up/sign-in, learner dashboard, max 3 lessons gating, admin access control, Bob/Alice demo accounts.", status: "Planned" },
    { id: "Sprint 6", title: "Polish, Maintenance & Enhancement", goal: "Dashboard UI polish, mascot animations, TTS (opt-in), PDF export, session cleanup, bug fixes.", status: "Planned" },
    { id: "Sprint 7", title: "Advanced Features & OCR", goal: "OCR pipeline for scanned PDFs, lesson badges/trophies, source document linking, cloud deployment prep.", status: "Planned" },
    { id: "Sprint 8", title: "Final Deployment & Demo", goal: "Free-tier deployment, final documentation, demo script + 15-min recording, capstone submission.", status: "Planned" }
  ],
  userStories: [
    // ── Epic 1: Project Foundation (Sprint 1) ──
    { id: "US-001", title: "As a developer, I want a documented project setup so I can run the app locally.", sprint: "Sprint 1", status: "Done", tasks: [["Build Flask project structure", ["Flask", "Sprint 1"]], ["Add homepage route", ["Backend", "MVP"]], ["Add README setup instructions", ["Docs", "MVP"]]] },
    { id: "US-002", title: "As a developer, I want automated tests in CI so I can prove basic reliability.", sprint: "Sprint 1", status: "Done", tasks: [["Add first basic pytest test", ["Testing", "CI/CD"]], ["Add GitHub Actions workflow for tests", ["CI/CD", "Automation"]]] },
    { id: "US-003", title: "As a reviewer, I want a public task board so I can see project progress.", sprint: "Sprint 1", status: "Done", tasks: [["Publish static task board via GitHub Pages", ["DevOps", "Evidence"]], ["Add public task board link to README.md", ["Docs", "Evidence"]]] },

    // ── Epic 2: Learner Workflow (Sprint 1) ──
    { id: "US-004", title: "As a learner, I want to enter a learning goal so the app knows what I want to study.", sprint: "Sprint 1", status: "Done", tasks: [["Add learning goal input form", ["Frontend", "MVP"]], ["Validate non-empty goal submission", ["Backend", "Validation"]]] },
    { id: "US-005", title: "As a learner, I want to upload study materials so the app can analyze them.", sprint: "Sprint 1", status: "Done", tasks: [["Add document upload form", ["Frontend", "MVP"]], ["Add file type validation (.txt, .md, .pdf, .docx)", ["Backend", "Security"]], ["Add upload storage folder", ["Backend", "Persistence"]]] },
    { id: "US-006", title: "As a learner, I want to see upload status so I know whether my files were accepted.", sprint: "Sprint 1", status: "Done", tasks: [["Add success/error flash messages", ["UX", "MVP"]], ["List uploaded files with processing status", ["Frontend", "Feedback"]]] },

    // ── Epic 3: Document Processing (Sprint 2) ──
    { id: "US-007", title: "As a learner, I want uploaded documents converted into text so the app can analyze them.", sprint: "Sprint 2", status: "Done", tasks: [["Implement .txt parser", ["Parser", "MVP"]], ["Implement .md parser", ["Parser", "MVP"]], ["Implement .pdf parser", ["Parser", "MVP"]], ["Implement .docx parser", ["Parser", "MVP"]]] },
    { id: "US-008", title: "As a developer, I want parser errors handled clearly so failed documents do not crash the app.", sprint: "Sprint 2", status: "Done", tasks: [["Add graceful error handling for unsupported/empty files", ["Parser", "MVP"]], ["Add ValueError propagation to routes", ["Backend", "UX"]]] },

    // ── Epic 4: AI Analysis (Sprint 2) ──
    { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", sprint: "Sprint 2", status: "Done", tasks: [["Create AI client wrapper for Ollama", ["AI", "Architecture"]], ["Create summary prompt template", ["Prompt Engineering", "AI"]], ["Generate summary from RAG context", ["AI", "MVP"]], ["Add fallback mocked AI client for CI", ["Testing", "CI/CD"]]] },
    { id: "US-010", title: "As a learner, I want to know whether my documents match my learning goal.", sprint: "Sprint 2", status: "Done", tasks: [["Create relevance-check prompt", ["AI", "Prompt Engineering"]], ["Return relevance label: strong/partial/weak", ["AI", "MVP"]], ["Return relevance explanation + missing material", ["UX", "MVP"]]] },
    { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", sprint: "Sprint 2", status: "Done", tasks: [["Create curriculum-generation prompt", ["AI", "Prompt Engineering"]], ["Generate module list with sequence", ["AI", "MVP"]], ["Add estimated effort per module", ["UX", "MVP"]], ["Format study path as timeline in UI", ["Frontend", "MVP"]]] },

    // ── Epic 5: Interactive Lessons (Sprint 3) ──
    { id: "US-012", title: "As a learner, I want to generate interactive lessons from my study path.", sprint: "Sprint 3", status: "Done", tasks: [["Add 'Generate Interactive Lessons' button on results", ["Frontend", "MVP"]], ["Create lesson_generator.py service (slide types: title/content/example/summary)", ["Backend", "AI"]], ["Show loading indicator during generation", ["UX", "Polish"]]] },
    { id: "US-013", title: "As a learner, I want lessons presented as slides with retro fonts.", sprint: "Sprint 3", status: "Done", tasks: [["Build custom CSS/JS slide deck engine", ["Frontend", "Core"]], ["Render JSON slides with Retrograde Bold + BoldPixels fonts", ["Frontend", "Theme"]], ["Apply cyberpunk color scheme to deck", ["Frontend", "Theme"]]] },
    { id: "US-014", title: "As a learner, I want comprehension checkpoints during my lesson.", sprint: "Sprint 3", status: "Done", tasks: [["Create quiz_generator.py inline checkpoint logic", ["Backend", "AI"]], ["Insert checkpoint slides every N content slides", ["Backend", "Logic"]], ["Block slide advance until checkpoint answered", ["Frontend", "UX"]], ["Show correct/incorrect feedback on checkpoint", ["Frontend", "Feedback"]]] },
    { id: "US-015", title: "As a learner, I want a final quiz at each module end to test understanding.", sprint: "Sprint 3", status: "Done", tasks: [["Generate mixed-type quiz: mcq, true_false, multi_select, fill_blank", ["Backend", "AI"]], ["Render all 4 question types interactively in deck", ["Frontend", "Core"]], ["AJAX grade endpoint with per-question feedback", ["Backend", "Routes"]]] },
    { id: "US-016", title: "As a learner, I want to retake failed modules with fresh questions.", sprint: "Sprint 3", status: "Done", tasks: [["Add retake route: regenerates quiz + checkpoints", ["Backend", "Routes"]], ["Reset attempt state on retake", ["Backend", "Logic"]], ["Pass/fail verdict with score circle", ["Frontend", "Results"]]] },
    { id: "US-017", title: "As a learner, I want modules gated so I must master one before the next.", sprint: "Sprint 3", status: "Done", tasks: [["Implement 80% pass threshold for module completion", ["Backend", "Logic"]], ["Lock module N+1 until module N passed", ["Backend", "Routes"]], ["Show progress bar and lock badges on lesson listing", ["Frontend", "UX"]]] },

    // ── Epic 6: UX, Polish, and Retro Experience (Sprint 4) ──
    { id: "US-018", title: "As a learner, I want the app to feel simple, guided, and retro-themed.", sprint: "Sprint 4", status: "Done", tasks: [["Consolidate goal + upload into single unified form (POST /process)", ["Frontend", "MVP"]], ["Improve results page visual hierarchy (timeline, dots, grid)", ["Frontend", "Polish"]], ["Apply retro fonts consistently across all pages", ["Frontend", "Theme"]]] },
    { id: "US-019", title: "As a learner, I want a retro mascot that provides visual feedback.", sprint: "Sprint 4", status: "Done", tasks: [["Integrate mascot-robot.png into UI (bottom-right corner)", ["Frontend", "Mascot"]], ["Add click-to-talk with random messages", ["Frontend", "Mascot"]], ["Display mascot state changes during loading", ["Frontend", "UX"]]] },
    { id: "US-020", title: "As a learner, I want clear progress feedback during long AI operations.", sprint: "Sprint 4", status: "In Progress", tasks: [["Replace full-screen overlay with background progress bar", ["Frontend", "UX"]], ["Show stage-by-stage progress (e.g., 'Generating Module 2 of 5...')", ["Frontend", "Feedback"]], ["Use mascot to report generation stage/status", ["Frontend", "Mascot"]]] },
    { id: "US-021", title: "As a learner, I want quality lessons and quizzes appropriate for my level.", sprint: "Sprint 4", status: "In Progress", tasks: [["Test and tune lesson/quiz prompt templates for consistency", ["Prompt Engineering", "AI"]], ["Evaluate qwen3:0.6b quality vs speed tradeoff", ["Research", "AI"]], ["Improve lesson and quiz prompt templates for pedagogy", ["Prompt Engineering", "AI"]]] },
    { id: "US-022", title: "As a learner, I want a difficulty toggle so content matches my age and skill level.", sprint: "Sprint 4", status: "Ready", tasks: [["Add difficulty selector: Easy (10-11), Moderate (12-13), Hard (14-15)", ["Frontend", "Feature"]], ["Adjust lesson/quiz prompts based on selected difficulty", ["Backend", "Prompt Engineering"]], ["Write tests for difficulty-adjusted prompt construction", ["Testing", "Unit"]]] },
    { id: "US-025", title: "As a learner, I want fill-in-the-blank questions to accept exactly one word per blank.", sprint: "Sprint 4", status: "In Progress", tasks: [["Implement inline input field per blank (not single input at bottom)", ["Frontend", "Core"]], ["Validate each blank accepts exactly one word (reject spaces)", ["Backend", "Validation"]], ["Add per-blank grading with individual feedback", ["Backend", "Routes"]], ["Write tests for one-word fill-in-the-blank validation", ["Testing", "Unit"]]] },

    // ── Epic 3 continued: RAG & Multi-upload (Sprint 2) ──
    { id: "US-015b", title: "As a learner, I want to upload up to 5 documents at once.", sprint: "Sprint 2", status: "Done", tasks: [["Integrate LangChain RecursiveCharacterTextSplitter", ["RAG", "MVP"]], ["Update route to accept request.files.getlist() (max 5)", ["Backend", "MVP"]], ["Add multi-file session handling & collection naming", ["Backend", "MVP"]]] },
    { id: "US-016b", title: "As a learner, I want AI analysis based on retrieved chunks so outputs stay grounded.", sprint: "Sprint 2", status: "Done", tasks: [["Set up persistent ChromaDB (./data/chroma_db); ephemeral for CI", ["RAG", "MVP"]], ["Implement chunk to embed to store pipeline per file", ["AI", "MVP"]], ["Implement top-k similarity search for context builder", ["AI", "MVP"]], ["Add mocked retrieval tests for CI (CI=true)", ["Testing", "CI/CD"]]] },

    // ── Epic 7: User Accounts & Persistence (Sprint 5) ──
    { id: "US-027", title: "As a learner, I want to create an account, sign in, and sign out so my progress is saved.", sprint: "Sprint 5", status: "Planned", tasks: [["Integrate Flask-Login + PostgreSQL (SQLite for demo)", ["Backend", "Auth"]], ["Build sign-up, sign-in, logout routes and templates", ["Backend", "Auth"]], ["Store hashed passwords and session persistence", ["Backend", "Security"]]] },
    { id: "US-028", title: "As a learner, I want a dashboard to see my active lessons and progress.", sprint: "Sprint 5", status: "Planned", tasks: [["Build main dashboard with lesson list and completion status", ["Frontend", "Dashboard"]], ["Show mascot on dashboard as visual placeholder", ["Frontend", "Mascot"]], ["Track completed vs abandoned/cancelled lessons", ["Backend", "Logic"]]] },
    { id: "US-029", title: "As a learner, I can have max 3 active lessons at a time to encourage focus.", sprint: "Sprint 5", status: "Planned", tasks: [["Enforce max 3 active lessons per user", ["Backend", "Logic"]], ["Require abandon/cancel before creating a new lesson", ["Backend", "Logic"]], ["Show warning when limit reached", ["Frontend", "UX"]]] },
    { id: "US-030", title: "As an admin, I want to control which users can generate lessons.", sprint: "Sprint 5", status: "Planned", tasks: [["Create super admin role with per-user access toggle", ["Backend", "Auth"]], ["Deny lesson generation by default for new registrations", ["Backend", "Security"]], ["Landing page shows: 'You don't have access' for unauthorized users", ["Frontend", "UX"]]] },
    { id: "US-031", title: "As a reviewer, I want demo accounts (Bob, Alice) with access to generate lessons.", sprint: "Sprint 5", status: "Planned", tasks: [["Seed Bob and Alice accounts with lesson generation access", ["Backend", "Demo"]], ["Allow public registration but auto-deny lesson access", ["Backend", "Auth"]], ["Test the full sign-up to lesson workflow", ["Testing", "Integration"]]] },

    // ── Epic 8: Polish & Maintenance (Sprint 6) ──
    { id: "US-032", title: "As a learner, I want a polished dashboard with mascot feedback.", sprint: "Sprint 6", status: "Planned", tasks: [["Polish dashboard UI with mascot placeholder", ["Frontend", "Dashboard"]], ["Add mascot basic animation frames (idle/waiting/done)", ["Frontend", "Mascot"]], ["Display mascot state changes during loading operations", ["Frontend", "UX"]]] },
    { id: "US-033", title: "As a learner, I want text-to-speech so I can listen to lesson content.", sprint: "Sprint 6", status: "Planned", tasks: [["Integrate Web Speech API or TTS library", ["Frontend", "Feature"]], ["TTS disabled by default, can be enabled in settings", ["Frontend", "UX"]], ["Add TTS toggle button on slide deck", ["Frontend", "Feature"]]] },
    { id: "US-034", title: "As a learner, I want to export completed lessons to PDF.", sprint: "Sprint 6", status: "Planned", tasks: [["Generate PDF from lesson slides and quiz results", ["Backend", "Feature"]], ["Add export button on completed lesson page", ["Frontend", "UX"]], ["Test PDF output for correctness", ["Testing", "Unit"]]] },
    { id: "US-035", title: "As a developer, I want to clean up session bloat and fix accumulated bugs.", sprint: "Sprint 6", status: "Planned", tasks: [["Remove extracted_texts from session after lessons generated", ["Backend", "Performance"]], ["Fix bugs discovered during Sprint 5 testing", ["Backend", "Maintenance"]], ["Run full test suite and ensure 45+ tests pass", ["Testing", "CI/CD"]]] },

    // ── Epic 9: OCR & Advanced Features (Sprint 7) ──
    { id: "US-036", title: "As a learner, I want scanned PDFs to be understood via OCR.", sprint: "Sprint 7", status: "Planned", tasks: [["Integrate OCR engine (Tesseract or similar)", ["Backend", "OCR"]], ["Detect images in uploaded documents and run OCR analysis", ["Backend", "OCR"]], ["Feed OCR output into chunking pipeline after extraction", ["Backend", "RAG"]], ["Write tests for OCR integration", ["Testing", "Integration"]]] },
    { id: "US-037", title: "As a learner, I want badges and trophies for completed lessons.", sprint: "Sprint 7", status: "Planned", tasks: [["Design badge/trophy system for completed modules", ["Frontend", "Feature"]], ["Track abandoned lessons separately from completions", ["Backend", "Logic"]], ["Display achievement badges on dashboard", ["Frontend", "Dashboard"]]] },
    { id: "US-038", title: "As a learner, I want lessons to reference their source documents.", sprint: "Sprint 7", status: "Planned", tasks: [["Link generated lesson content back to source PDF/document", ["Backend", "Feature"]], ["Add citations or tooltips showing which document a slide references", ["Frontend", "UX"]], ["Test source linking accuracy", ["Testing", "Integration"]]] },

    // ── Epic 10: Final Deployment & Demo (Sprint 8) ──
    { id: "US-040", title: "As a developer, I want to deploy the app to a free-tier host.", sprint: "Sprint 8", status: "Planned", tasks: [["Deploy to Render or Railway free tier", ["DevOps", "Deployment"]], ["Configure environment variables for production", ["DevOps", "Security"]], ["Verify all routes and features work in production", ["Testing", "Integration"]]] },
    { id: "US-041", title: "As a reviewer, I want complete project documentation.", sprint: "Sprint 8", status: "Planned", tasks: [["Finalize README, SRS, DESIGN_AND_TESTING docs", ["Docs", "Evidence"]], ["Update task board to reflect final sprint status", ["Docs", "Evidence"]], ["Ensure AI_AGENT_PROTOCOL.md is current", ["Docs", "Evidence"]]] },
    { id: "US-042", title: "As a reviewer, I want a 15-minute demo video showing the full workflow.", sprint: "Sprint 8", status: "Planned", tasks: [["Write demo script covering all user stories", ["Docs", "Demo"]], ["Record 15-minute walkthrough of the app", ["Docs", "Demo"]], ["Add demo link to README", ["Docs", "Evidence"]]] },
    { id: "US-043", title: "As a developer, I want final bug fixes and capstone submission ready.", sprint: "Sprint 8", status: "Planned", tasks: [["Triage and fix any remaining production bugs", ["Backend", "Maintenance"]], ["Run full CI pipeline one final time", ["Testing", "CI/CD"]], ["Submit capstone project", ["Process", "Capstone"]]] }
  ],
  scopeLadder: [
    ["Core MVP (Completed)", ["RAG pipeline & chunking", "AI summary & relevance checks", "Interactive slide deck engine", "Mixed-type quizzes & grading", "Gated progression logic", "CI/CD & 45+ automated tests"]],
    ["Sprint 4 Focus", ["Fix fill-in-the-blank (one-word per blank)", "Loading progress via mascot", "Difficulty selector (Easy/Mod/Hard)", "Prompt engineering & tuning", "UX polish & bug stabilization"]],
    ["Sprint 5-6 Planned", ["User accounts (Flask-Login + PostgreSQL)", "Learner dashboard with progress", "Max 3 active lessons gating", "Text-to-speech (opt-in)", "PDF export for completed lessons"]],
    ["Sprint 7-8 Planned", ["OCR for scanned PDFs", "Badges & trophies for completion", "Source document referencing", "Free-tier deployment", "Demo video & capstone submission"]],
    ["Post-Capstone / Stretch", ["Social features (friends, chat, share)", "YouTube transcript integration", "Full offline mode (C/C++ rewrite)", "Multi-user accounts advanced", "Adaptive study planner"]]
  ]
};
const SNAPSHOTS = [
  { date: "2026-05-12", isCurrent: true, data: null },
  { date: "2026-05-10", isCurrent: false, data: {
  sprints: [
    { name: "Sprint 0", status: "Done", title: "Initialization & Requirements", goal: "Establish repository, finalize SRS/TODO, configure CI baseline, deploy static task board." },
    { name: "Sprint 1", status: "Done", title: "Foundation & Upload Workflow", goal: "Flask structure, goal input, file validation, upload storage, baseline tests, and board publication." },
    { name: "Sprint 2", status: "Done", title: "RAG Pipeline & AI Processing", goal: "Implement LangChain chunking, ChromaDB vector storage, multi-upload (<=5), parsers, and summary service with mocked fallback." },
    { name: "Sprint 3", status: "In Progress", title: "Relevance, Study Path & UI Polish", goal: "Complete AI relevance checking, curriculum generation, guided workflow UI, and end-to-end integration tests." },
    { name: "Sprint 4", status: "Ready", title: "Deployment & Demo Prep", goal: "Deploy to free-tier host, finalize documentation, prepare demo script, record 15-20 min presentation." }
  ],
  userStories: [
    { id: "US-001", title: "As a developer, I want a documented project setup so I can run the app locally.", status: "Done", sprint: "Sprint 1" },
    { id: "US-002", title: "As a developer, I want automated tests in CI so I can prove basic reliability.", status: "Done", sprint: "Sprint 1" },
    { id: "US-003", title: "As a reviewer, I want a public task board so I can see project progress.", status: "Done", sprint: "Sprint 1" },
    { id: "US-004", title: "As a learner, I want to enter a learning goal so the app knows what I want to study.", status: "Done", sprint: "Sprint 1" },
    { id: "US-005", title: "As a learner, I want to upload study materials so the app can analyze them.", status: "Done", sprint: "Sprint 1" },
    { id: "US-006", title: "As a learner, I want to see upload status so I know whether my files were accepted.", status: "Done", sprint: "Sprint 1" },
    { id: "US-007", title: "As a learner, I want uploaded documents converted into text so the app can analyze them.", status: "Done", sprint: "Sprint 2" },
    { id: "US-008", title: "As a developer, I want parser errors handled clearly so failed documents do not crash the app.", status: "Done", sprint: "Sprint 2" },
    { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", status: "Done", sprint: "Sprint 2" },
    { id: "US-010", title: "As a learner, I want to know whether my documents match my learning goal.", status: "In Progress", sprint: "Sprint 3" },
    { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", status: "Ready", sprint: "Sprint 3" },
    { id: "US-012", title: "As a learner, I want the app to feel simple and guided.", status: "Done", sprint: "Sprint 3" },
    { id: "US-013", title: "As a learner, I want the product to feel friendly and motivating.", status: "Ready", sprint: "Sprint 4" },
    { id: "US-014", title: "As a reviewer, I want the demo to show the full workflow.", status: "Ready", sprint: "Sprint 4" },
    { id: "US-015", title: "As a learner, I want to upload up to 5 documents at once so I can analyze related materials together.", status: "Done", sprint: "Sprint 2" },
    { id: "US-016", title: "As a learner, I want AI analysis based on retrieved document chunks so outputs stay grounded and accurate.", status: "Done", sprint: "Sprint 2" }
  ],
  scopeLadder: [
    ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
    ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
    ["High Complexity", ["OCR for scanned PDFs (multimodal)", "Source-linked summaries with chunk citation", "Multi-document topic mapping", "Cloud AI API fallback (OpenRouter/Groq)", "Adaptive chunking & reranking"]],
    ["Deferred / Stretch Goals", ["YouTube integration", "External learning resource search", "AI-generated slide decks", "AI-TTS narration", "Adaptive weekly planner", "Multi-user accounts and authentication"]]
  ]
  }},
  { date: "2026-05-08", isCurrent: false, data: {
  sprints: [
    { name: "Sprint 0", status: "Done", title: "Initialization & Requirements", goal: "Establish repository, finalize SRS/TODO, configure CI baseline, deploy static task board." },
    { name: "Sprint 1", status: "Done", title: "Foundation & Upload Workflow", goal: "Flask structure, goal input, file validation, upload storage, baseline tests, and board publication." },
    { name: "Sprint 2", status: "In Progress", title: "RAG Pipeline & AI Processing", goal: "Implement LangChain chunking, ChromaDB vector storage, multi-upload (<=5), parsers, and summary service with mocked fallback." },
    { name: "Sprint 3", status: "Ready", title: "Relevance, Study Path & UI Polish", goal: "Complete AI relevance checking, curriculum generation, guided workflow UI, and end-to-end integration tests." },
    { name: "Sprint 4", status: "Backlog", title: "Deployment & Demo Prep", goal: "Deploy to free-tier host, finalize documentation, prepare demo script, record 15-20 min presentation." }
  ],
  userStories: [
    { id: "US-001", title: "As a developer, I want a documented project setup so I can run the app locally.", status: "Done", sprint: "Sprint 1" },
    { id: "US-002", title: "As a developer, I want automated tests in CI so I can prove basic reliability.", status: "Done", sprint: "Sprint 1" },
    { id: "US-003", title: "As a reviewer, I want a public task board so I can see project progress.", status: "Done", sprint: "Sprint 1" },
    { id: "US-004", title: "As a learner, I want to enter a learning goal so the app knows what I want to study.", status: "Done", sprint: "Sprint 1" },
    { id: "US-005", title: "As a learner, I want to upload study materials so the app can analyze them.", status: "Done", sprint: "Sprint 1" },
    { id: "US-006", title: "As a learner, I want to see upload status so I know whether my files were accepted.", status: "Done", sprint: "Sprint 1" },
    { id: "US-007", title: "As a learner, I want uploaded documents converted into text so the app can analyze them.", status: "Done", sprint: "Sprint 2" },
    { id: "US-008", title: "As a developer, I want parser errors handled clearly so failed documents do not crash the app.", status: "Done", sprint: "Sprint 2" },
    { id: "US-009", title: "As a learner, I want a summary of my materials so I can understand what they contain.", status: "Done", sprint: "Sprint 2" },
    { id: "US-010", title: "As a learner, I want to know whether my documents match my goal.", status: "Backlog", sprint: "Sprint 3" },
    { id: "US-011", title: "As a learner, I want a structured study path so I know what to study next.", status: "Ready", sprint: "Sprint 3" },
    { id: "US-012", title: "As a learner, I want the app to feel simple and guided.", status: "Done", sprint: "Sprint 3" },
    { id: "US-013", title: "As a learner, I want the product to feel friendly and motivating.", status: "Ready", sprint: "Sprint 4" },
    { id: "US-014", title: "As a reviewer, I want the demo to show the full workflow.", status: "Ready", sprint: "Sprint 4" },
    { id: "US-015", title: "As a learner, I want to upload up to 5 documents at once so I can analyze related materials together.", status: "In Progress", sprint: "Sprint 2" },
    { id: "US-016", title: "As a learner, I want AI analysis based on retrieved document chunks so outputs stay grounded and accurate.", status: "In Progress", sprint: "Sprint 2" }
  ],
  scopeLadder: [
    ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
    ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
    ["High Complexity", ["OCR for scanned PDFs (multimodal)", "Source-linked summaries with chunk citation", "Multi-document topic mapping", "Cloud AI API fallback (OpenRouter/Groq)", "Adaptive chunking & reranking"]],
    ["Deferred / Stretch Goals", ["YouTube integration", "External learning resource search", "AI-generated slide decks", "AI-TTS narration", "Adaptive weekly planner", "Multi-user accounts and authentication"]]
  ]
  }},
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
  ],
  scopeLadder: [
    ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
    ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
    ["High Complexity", ["Vector embedding retrieval", "Advanced document chunking", "OCR for scanned PDFs", "Source-linked summaries", "Multi-document topic mapping"]],
    ["Deferred / Stretch Goals", ["External media integration", "Automated slide generation", "TTS narration pipeline", "Adaptive scheduling engine", "Multi-user authentication"]]
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
  ],
  scopeLadder: [
    ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
    ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
    ["High Complexity", ["Vector embedding retrieval", "Advanced document chunking", "OCR for scanned PDFs", "Source-linked summaries", "Multi-document topic mapping"]],
    ["Deferred / Stretch Goals", ["External media integration", "Automated slide generation", "TTS narration pipeline", "Adaptive scheduling engine", "Multi-user authentication"]]
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
  ],
  scopeLadder: [
    ["Low Effort / High Value", ["UI branding assets", "Enhanced error messaging", "Structured prompt templates", "Markdown export functionality", "Example goal presets"]],
    ["Medium Complexity", ["Editable AI-generated outputs", "Progress tracking module", "Assessment/quiz generation", "Difficulty selector", "Admin review interface"]],
    ["High Complexity", ["Vector embedding retrieval", "Advanced document chunking", "OCR for scanned PDFs", "Source-linked summaries", "Multi-document topic mapping"]],
    ["Deferred / Stretch Goals", ["External media integration", "Automated slide generation", "TTS narration pipeline", "Adaptive scheduling engine", "Multi-user authentication"]]
  ]
  }}
];
