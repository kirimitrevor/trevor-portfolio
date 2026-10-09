// Live GitHub repositories (Assignment 3 - Fetch API)
const GITHUB_USERNAME = "kirimitrevor";
const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;

const statusEl = document.getElementById("repo-status");
const listEl = document.getElementById("repo-list");

// Build one repo card using safe DOM methods (textContent, never innerHTML)
function createRepoCard(repo) {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h2");
    title.textContent = repo.name;

    const description = document.createElement("p");
    description.textContent = repo.description || "No description provided.";

    const language = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = "Language: ";
    language.appendChild(label);
    language.appendChild(
        document.createTextNode(repo.language || "Not specified")
    );

    const link = document.createElement("a");
    link.className = "button";
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View on GitHub";

    card.append(title, description, language, link);
    return card;
}

async function loadRepos() {
    // Loading state
    statusEl.textContent = "Loading repositories...";
    listEl.replaceChildren();

    try {
        const response = await fetch(REPOS_URL);

        if (!response.ok) {
            throw new Error(`GitHub responded with status ${response.status}`);
        }

        const repos = await response.json();

        if (repos.length === 0) {
            statusEl.textContent = "No public repositories found yet.";
            return;
        }

        repos.forEach((repo) => listEl.appendChild(createRepoCard(repo)));
        statusEl.textContent = "";
    } catch (error) {
        // Friendly error state instead of a broken page
        console.error("Failed to load repositories:", error);
        statusEl.textContent =
            "Sorry, I couldn't load my GitHub repositories right now. Please try again later.";
    }
}

loadRepos();