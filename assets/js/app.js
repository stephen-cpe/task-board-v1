/**
 * STUDY-AND-LEARN TASK BOARD - RENDERING LOGIC
 * 
 * This file handles rendering the task board UI.
 * Data (CONFIG, SNAPSHOTS) is defined in data.js - edit there to update the board.
 * 
 * VISUAL FEEDBACK:
 * - Stories with status "Done" show ✅ and strikethrough on all tasks
 * - Stories with status "In Progress" show 🟡 border
 * - Stories with status "Ready" show 🔵 border
 */

// ============== RENDERING LOGIC ==============

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
        <div class="sprint-kicker">${sprint.id} // ${sprint.status}</div>
        <h3 class="h5 sprint-title mt-2">${sprint.title}</h3>
        <p class="sprint-goal mb-0">${sprint.goal}</p>
      </article>
    </div>
  `).join("");
}

function renderBoard(filterSprint = "All") {
  const root = document.getElementById("kanbanBoard");
  const stories = CONFIG.userStories.filter(s => filterSprint === "All" || s.sprint === filterSprint);
  
  const columns = { "Backlog": [], "Ready": [], "In Progress": [], "Done": [], "Planned": [] };
  stories.forEach(story => { if (columns[story.status]) columns[story.status].push(story); });

  root.innerHTML = Object.entries(columns).map(([column, sList]) => `
    <div class="col-12 col-md-6 col-xl">
      <section class="kanban-column">
        <div class="kanban-header">
          <h3 class="h6 kanban-title">${column}</h3>
          <span class="task-count">${sList.length}</span>
        </div>
        <div class="column-scroll">${sList.map(renderStory).join("")}</div>
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
        ${story.tasks ? story.tasks.map((task) => {
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
        }).join("") : `<div class="task-card ${isDone ? 'completed' : ''}">
          <span class="task-check">${isDone ? '✅' : '⬜'}</span>
          <div class="task-content">
            <div class="task-desc ${isDone ? 'strikethrough' : ''}">Sprint: ${story.sprint}</div>
          </div>
        </div>`}
      </div>
    </article>
  `;
}


function renderScopeLadder(scopeLadderData) {
  const root = document.getElementById("scopeLadder");
  const data = scopeLadderData || CONFIG.scopeLadder;
  root.innerHTML = data.map(([level, items]) => `
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

function renderSprintFilter() {
  const sel = document.getElementById("sprintFilter");
  if (!sel) return;
  sel.innerHTML = '<option value="All">All Sprints</option>' +
    CONFIG.sprints.map(s => `<option value="${s.id}">${s.id}</option>`).join("");
}

// Initialize all sections
document.getElementById("lastUpdated").textContent = CONFIG.lastUpdated;
renderSprints();
renderBoard();
renderScopeLadder();
renderSprintFilter();

// Sprint filter change handler
document.getElementById("sprintFilter")?.addEventListener("change", (e) => renderBoard(e.target.value));

// Snapshot system - switches board to historical state
function switchToSnapshot(snapshot) {
  const sprintFilter = document.getElementById("sprintFilter");
  if (snapshot.isCurrent || !snapshot.data) {
    document.getElementById("lastUpdated").textContent = CONFIG.lastUpdated;
    if (sprintFilter) sprintFilter.disabled = false;
    renderSprints();
    renderBoard();
    renderScopeLadder();
    return;
  }

  const data = snapshot.data;
  document.getElementById("lastUpdated").textContent = `Snapshot: ${snapshot.date}`;
  if (sprintFilter) {
    sprintFilter.value = "All";
    sprintFilter.disabled = true;
  }

  const rootSprints = document.getElementById("sprintCards");
  rootSprints.innerHTML = data.sprints.map(sprint => `
    <div class="col-md-6 col-xl-3">
      <article class="sprint-card ${getStatusClass(sprint.status)}">
        <div class="sprint-kicker">${sprint.name} // ${sprint.status}</div>
        <h3 class="h5 sprint-title mt-2">${sprint.title}</h3>
        <p class="sprint-goal mb-0">${sprint.goal}</p>
      </article>
    </div>
  `).join("");

  const columns = { "Backlog": [], "Ready": [], "In Progress": [], "Done": [], "Planned": [] };
  data.userStories.forEach(story => {
    if (columns[story.status]) columns[story.status].push(story);
  });

  const rootBoard = document.getElementById("kanbanBoard");
  rootBoard.innerHTML = Object.entries(columns).map(([column, sList]) => `
    <div class="col-12 col-md-6 col-xl">
      <section class="kanban-column">
        <div class="kanban-header">
          <h3 class="h6 kanban-title">${column}</h3>
          <span class="task-count">${sList.length}</span>
        </div>
        <div class="column-scroll">${sList.map(renderStory).join("")}</div>
      </section>
    </div>
  `).join("");

  if (data.scopeLadder) {
    renderScopeLadder(data.scopeLadder);
  }
}

// Initialize dropdown
const selector = document.getElementById("snapshotSelector");
selector.innerHTML = "";
SNAPSHOTS.forEach((snap, index) => {
  const opt = document.createElement("option");
  opt.value = index;
  opt.textContent = snap.isCurrent ? "Current (Live)" : snap.date;
  if (snap.isCurrent) opt.selected = true;
  selector.appendChild(opt);
});
selector.addEventListener("change", (e) => switchToSnapshot(SNAPSHOTS[e.target.value]));

// Collapsible story cards
document.addEventListener("click", (e) => {
  const header = e.target.closest(".story-header");
  if (header) {
    const card = header.closest(".story-card");
    card?.classList.toggle("expanded");
  }
});