/**
 * USER STORIES PAGE - RENDERING LOGIC
 * Displays all user stories as cards grouped by sprint in 8 rows.
 */

function getStatusLabel(status) {
  const map = {
    "Done": "Done",
    "In Progress": "In Progress",
    "Backlog": "Backlog",
    "Ready": "Ready",
    "Planning": "Planning"
  };
  return map[status] || status;
}

function getStatusClass(status) {
  const map = {
    "Done": "done",
    "In Progress": "in-progress",
    "Ready": "ready",
    "Backlog": "backlog",
    "Planning": "planning"
  };
  return map[status] || "backlog";
}

function getStatusIcon(status) {
  if (status === "Done") return "&#10003;";
  if (status === "In Progress") return "&#9679;";
  return "&#9711;";
}

function renderUserStories() {
  const root = document.getElementById("sprintRows");
  if (!root || typeof CONFIG === "undefined") return;

  // Group stories by sprint (exclude Post-Capstone)
  const sprintOrder = CONFIG.sprints.map(s => s.id);
  const storiesBySprint = {};

  sprintOrder.forEach(sprintId => { storiesBySprint[sprintId] = []; });

  CONFIG.userStories.forEach(story => {
    if (storiesBySprint[story.sprint]) {
      storiesBySprint[story.sprint].push(story);
    }
  });

  // Render each sprint as a row
  root.innerHTML = sprintOrder.map(sprintId => {
    const sprint = CONFIG.sprints.find(s => s.id === sprintId);
    const stories = storiesBySprint[sprintId];
    if (!stories || stories.length === 0) return "";

    const sprintStatusClass = getStatusClass(sprint.status);

    return `
      <div class="sprint-row mb-5">
        <div class="sprint-row-header mb-3">
          <div class="d-flex align-items-center gap-3 flex-wrap">
            <span class="sprint-row-badge ${sprintStatusClass}">${sprintId}</span>
            <h2 class="h4 section-title mb-0">${sprint.title}</h2>
            <span class="az-chip sprint-row-status ${sprintStatusClass}">${sprint.status}</span>
            <span class="board-meta">${stories.length} stor${stories.length === 1 ? 'y' : 'ies'}</span>
          </div>
          <p class="sprint-row-goal mb-0 mt-1">${sprint.goal}</p>
        </div>
        <div class="row g-3">
          ${stories.map(renderStoryCard).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function renderStoryCard(story) {
  const statusClass = getStatusClass(story.status);
  const statusLabel = getStatusLabel(story.status);
  const statusIcon = getStatusIcon(story.status);
  const isDone = story.status === "Done";

  return `
    <div class="col-12 col-md-6 col-xl-4">
      <article class="us-card ${statusClass}">
        <div class="us-card-header">
          <span class="story-id">${story.id}</span>
          <span class="us-status-badge ${statusClass}">
            <span class="status-icon">${statusIcon}</span> ${statusLabel}
          </span>
        </div>
        <h3 class="us-card-title">${story.title}</h3>
        <div class="us-card-tasks">
          ${story.tasks ? story.tasks.map(task => {
            const [desc, tags] = task;
            return `
              <div class="task-card ${isDone ? 'completed' : ''}">
                <span class="task-check">${isDone ? '&#10003;' : '&#9711;'}</span>
                <div class="task-content">
                  <div class="task-desc ${isDone ? 'strikethrough' : ''}">${desc}</div>
                  <div class="task-tags">${tags.map(tag => `<span class="task-tag">${tag}</span>`).join("")}</div>
                </div>
              </div>
            `;
          }).join("") : ""}
        </div>
      </article>
    </div>
  `;
}

// Initialize
document.getElementById("lastUpdated").textContent = CONFIG.lastUpdated;
renderUserStories();