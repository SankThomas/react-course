import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="container">
        <h1>Error 404</h1>
        <Link to="/" className="btn">
          &larr; Back to Homepage
        </Link>
      </section>
    </>
  );
}
