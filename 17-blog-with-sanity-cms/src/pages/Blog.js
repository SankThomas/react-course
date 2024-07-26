import React, { useState, useEffect } from "react";
import { client } from "../client";
import { Link } from "react-router-dom";
import { format } from "date-fns/format";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        slug,
        title,
        publishedAt,
        mainImage {
          asset -> {
            url
          }
        },
        body,
        "name": author -> name
      } | order(publishedAt asc)`
      )
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="container">
        <h1>{posts.length} posts</h1>

        <div>
          <article className="cards">
            {posts &&
              posts.map((post) => (
                <Link
                  key={post.slug.current}
                  to={`/blog/${post.slug.current}`}
                  className="cards-link"
                >
                  {post.mainImage && (
                    <img src={post.mainImage.asset.url} alt={post.title} />
                  )}
                  <p className="author-name">
                    On {format(new Date(post.publishedAt), "MMM dd yyy")}
                  </p>
                  <h4>{post.title}</h4>
                  <p>By {post.name}</p>
                  <p>{`${post.body[0].children[0].text.substring(
                    0,
                    200
                  )}...`}</p>
                </Link>
              ))}
          </article>
        </div>
      </section>
    </>
  );
}
