/**
 * BACKLOG PAGE - RENDERING LOGIC
 * Displays Sprint 8 completed items and Post-Capstone stretch goals.
 * The old "Implemented (Sprints 1-7)" column is removed — user-stories.html covers that.
 */

const BACKLOG_DATA = [
  {
    level: "Sprint 8 — Complete",
    items: [
      "Cloud VPS deployment (DigitalOcean) — 4 vCPU / 8 GB RAM / 160 GB disk — DONE",
      "Final documentation review (SRS, TODO, DESIGN, STATUS, AI_AGENT_PROTOCOL — doc lock-in complete) — DONE",
      "Proprietary demo document set created (kept privately outside repo) — DONE",
      "Cloud ChromaDB and cloud AI provider testing — DONE",
      "General QA pass and UX polish — DONE",
      "Demo recording (15–20 min) and capstone submission — DONE"
    ]
  },
  {
    level: "Post-Capstone / Stretch",
    items: [
      "Badge/trophy system for completed lessons (moved out of capstone timeline; nice-to-have)",
      "Extended HTML and ODT file type support",
      "YouTube and video transcript integration",
      "External learning resource search",
      "Learner profile adaptation",
      "Adaptive study planner",
      "Social features (friends, chat, share lessons)",
      "Full offline mode (C/C++ rewrite without Ollama)"
    ]
  }
];

function renderBacklog() {
  const root = document.getElementById("backlogGrid");
  if (!root) return;

  root.innerHTML = BACKLOG_DATA.map(group => `
    <div class="col-12 col-lg-6">
      <article class="scope-card backlog-card">
        <div class="scope-level">${group.level}</div>
        <ul class="mt-3 ps-3">
          ${group.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </div>
  `).join("");
}

renderBacklog();