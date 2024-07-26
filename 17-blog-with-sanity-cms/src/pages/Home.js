import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="container">
        <article
          style={{
            textAlign: "center",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          <h1>My Blog Page Built in ReactJs and Sanity CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            cumque repudiandae voluptatem cum doloremque optio saepe? Pariatur
            alias rem omnis?
          </p>

          <Link to="/blog" className="btn">
            Vist my blog
          </Link>
        </article>
      </section>
    </>
  );
}
