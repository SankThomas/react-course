import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Blogpost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        slug,
        title,
        categories[] -> {
          title
        },
        mainImage {
          asset -> {
            url
          }
        },
        publishedAt,
        body,
        "name": author -> name,
        "bio": author -> bio,
        "image": author -> image,
      }`
      )
      .then((data) => {
        setPost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <>
      <section className="container">
        <Link to="/blog" className="btn">
          &larr; Back
        </Link>
        {post && (
          <div>
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="main-image"
              />
            )}
            <p className="author-name">By {post.name}</p>

            <div className="portable-text">
              <PortableText value={post.body} />
              {/* Newsletter */}
            </div>
          </div>
        )}

        <article className="author-bio">
          {post.image && (
            <img
              src={urlFor(post.image).url()}
              alt={post.name}
              className="author-image"
            />
          )}
          <h4>{post.name}</h4>
          {post.bio && <p>{post.bio[0].children[0].text}</p>}
        </article>
      </section>
    </>
  );
}
