import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <div>
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            Sankara
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
