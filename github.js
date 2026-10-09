// ===============================================
// github.js - Shows my live GitHub repositories
// Assignment 3: Fetch API + JSON + error handling
// ===============================================

// My GitHub username. The API needs no key, so there is no secret here.
const GITHUB_USERNAME = "kirimitrevor";

// The web address that returns my repos as JSON (6 most recently updated)
const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;

// Find the two places on projects.html where results will be shown
const statusEl = document.getElementById("repo-status"); // for messages
const listEl = document.getElementById("repo-list");     // for the cards

// Builds ONE card for ONE repo.
// I use textContent (not innerHTML) so text from the internet
// is shown as plain text and can never run as code (security).
function createRepoCard(repo) {
    // The card box
    const card = document.createElement("div");
    card.className = "project-card";

    // The repo name as a heading
    const title = document.createElement("h2");
    title.textContent = repo.name;

    // The repo description (or a default if it has none)
    const description = document.createElement("p");
    description.textContent = repo.description || "No description provided.";

    // "Language: HTML" line
    const language = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = "Language: ";
    language.appendChild(label);
    language.appendChild(
        document.createTextNode(repo.language || "Not specified")
    );

    // A button that opens the repo on GitHub in a new tab
    const link = document.createElement("a");
    link.className = "button";
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer"; // safe way to open a new tab
    link.textContent = "View on GitHub";

    // Put all the pieces inside the card and give it back
    card.append(title, description, language, link);
    return card;
}

// Asks GitHub for the repos and shows them on the page.
// "async" lets me use "await" to wait for the internet reply.
async function loadRepos() {
    // 1. LOADING STATE: tell the visitor we are fetching
    statusEl.textContent = "Loading repositories...";
    listEl.replaceChildren(); // clear any old cards

    // "try" runs the code; if anything fails, "catch" runs instead
    try {
        // 2. FETCH: wait for GitHub to reply
        const response = await fetch(REPOS_URL);

        // If GitHub replied with an error (like 403 or 404), jump to catch
        if (!response.ok) {
            throw new Error(`GitHub responded with status ${response.status}`);
        }

        // 3. JSON: turn the reply into a JavaScript list of repos
        const repos = await response.json();

        // If the list is empty, say so
        if (repos.length === 0) {
            statusEl.textContent = "No public repositories found yet.";
            return;
        }

        // 4. RENDER: make a card for every repo and add it to the page
        repos.forEach((repo) => listEl.appendChild(createRepoCard(repo)));

        // Remove the loading message because we are done
        statusEl.textContent = "";
    } catch (error) {
        // 5. ERROR STATE: show a friendly message instead of a broken page
        console.error("Failed to load repositories:", error);
        statusEl.textContent =
            "Sorry, I couldn't load my GitHub repositories right now. Please try again later.";
    }
}

// Start everything when the page loads
loadRepos();