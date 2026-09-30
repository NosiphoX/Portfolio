
import { useState, useEffect } from "react";

const GITHUB_USERNAME = "NosiphoX";

function GitHubDashboard() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="github" className="section">
      <span className="section-tag">Latest Activity</span>
      <h2 className="section-title">On GitHub</h2>
      <p className="section-description">
        A live look at what I'm building and pushing right now.
      </p>

      {status === "loading" && (
        <div className="github-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="github-card github-card--skeleton" key={i} />
          ))}
        </div>
      )}

      {status === "error" && (
        <p className="github-error">
          Couldn't load live GitHub activity right now — check back shortly, or view the
          full profile directly on{" "}
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      )}

      {status === "success" && (
        <div className="github-grid">
          {repos.map((repo) => (
            
             <a key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-card"
               >
              <div className="github-card__top">
                <span className="github-card__name">{repo.name}</span>
                <span className="github-card__stars">★ {repo.stargazers_count}</span>
              </div>
              <p className="github-card__description">
                {repo.description || "No description provided."}
              </p>
              <div className="github-card__meta">
                {repo.language && <span className="github-card__language">{repo.language}</span>}
                <span className="github-card__updated">
                  Updated {new Date(repo.pushed_at).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default GitHubDashboard;