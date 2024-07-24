import React from "react";
import { links } from "../data/data";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="section">
        <h1>This is your homepage</h1>

        <br />

        <div className="cards">
          {links.map((link) => (
            <Link
              to={link.url}
              key={link.id}
              style={{ backgroundColor: `${link.color}` }}
            >
              <article>
                <h2>
                  <span>{link.icon}</span> {link.title}
                </h2>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
