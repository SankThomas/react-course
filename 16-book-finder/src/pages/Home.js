import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const res = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
    );
    const data = await res.json();
    setCategories(data.results);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="container">
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>NYT Book Finder</h1>
        <p>This app uses the New York Times API.</p>
      </div>

      <div className="cards">
        {categories
          ? categories.map((category) => (
              <Link
                key={category.list_name_encoded}
                to={`/${category.list_name_encoded}`}
                className="article"
              >
                <article>
                  <h2>{category.display_name}</h2>
                  <p>
                    <strong>First published:</strong>{" "}
                    {format(
                      new Date(category.oldest_published_date),
                      "do MMMM yyyy"
                    )}
                  </p>
                  <p>
                    <strong>Last published:</strong>{" "}
                    {format(
                      new Date(category.newest_published_date),
                      "do MMMM yyyy"
                    )}
                  </p>
                  <p>
                    <strong>Updated:</strong> {category.updated}
                  </p>
                </article>
              </Link>
            ))
          : null}
      </div>
    </section>
  );
}
