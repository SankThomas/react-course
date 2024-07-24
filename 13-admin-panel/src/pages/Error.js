import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="section">
        <h1>Sorry, we could not find the page you were looking for</h1>
        <br />
        <Link to="/" className="btn btn-active">
          &larr; Back to Homepage
        </Link>
      </section>
    </>
  );
}
