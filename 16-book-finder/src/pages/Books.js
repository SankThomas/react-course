import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState();
  const slug = useParams();

  async function getBooks() {
    const res = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/${slug.list_name_encoded}.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
    );
    const data = await res.json();
    setBooks(data.results);
  }

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, [slug.list_name_encoded]);

  return (
    <>
      {books ? (
        <section className="container">
          <h1>{books.display_name}</h1>

          <div className="cards books">
            {books.books.map((book) => (
              <article key={book.primary_isbn10}>
                <img
                  src={book.book_image}
                  alt={book.title}
                  className="book-image"
                />
                <h2>{book.title}</h2>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  {book.author}
                </p>
                <p>{book.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
