import useFetch from "./hooks/useFetch";
import React from "react";

export default function App() {
  const issues = useFetch();

  return (
    <div>
      <h1>GitHub Issues Apps</h1>

      <div className="cards">
        {issues.map((issue) => (
          <article key={issue.id}>
            <h2>{issue.title}</h2>
            <>
              {issue.labels.map((label) => (
                <a
                  href={label.url}
                  style={{
                    backgroundColor: `#${label.color}30`,
                    color: `#${label.color}`,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginRight: 10,
                    fontSize: 14,
                    borderRadius: 16,
                    textDecoration: "none",
                  }}
                >
                  {label.name}
                </a>
              ))}
            </>

            <p style={{ marginTop: 24 }}>{issue.body}</p>

            <div>
              <img src={issue.user.avatar_url} alt={issue.user.login} />

              <ul>
                <li>{issue.user.login}</li>
                <li>
                  <a href={issue.user.html_url}>GitHub Profile</a>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
