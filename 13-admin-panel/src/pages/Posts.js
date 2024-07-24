import React from "react";
import { posts } from "../data/data";

const allCategories = [
  "All Categories",
  ...new Set(posts.map((post) => post.category)),
];

export default function Posts() {
  const [items, setItems] = React.useState(posts);
  const [categories, setCategories] = React.useState(allCategories);

  function handleFilter(category) {
    if (category === "All Categories") {
      setItems(posts);
      return;
    }

    setItems(posts.filter((item) => item.category === category));
  }

  return (
    <>
      <section className="section">
        <h1>Posts</h1>
        <p>Create, edit and manage the posts on your website</p>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <Categories categories={categories} handleFilter={handleFilter} />
        </ul>

        <div>
          {items.map((post) => (
            <h3 key={post.id}>{post.title}</h3>
          ))}
        </div>
      </section>
    </>
  );
}

function Categories({ categories, handleFilter }) {
  return (
    <>
      {categories.map((category, index) => (
        <li key={index}>
          <button
            className="btn btn-gray"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </>
  );
}
