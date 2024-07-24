import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { items } from "./data";

export default function SingleProduct() {
  const [singleItem, setSingleItem] = useState(items);
  const [value, setValue] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const findProduct = () => {
      const newProduct = items.find((product) => product.id === id);
      setSingleItem(newProduct);
    };

    findProduct();
  }, [id]);

  return (
    <section className="single-product">
      <article>
        <Link to="/">&larr; Back</Link>

        {singleItem.images && (
          <>
            <img
              src={singleItem.images[value]}
              alt={singleItem.title}
              style={{
                height: 400,
                width: "100%",
                objectFit: "contain",
              }}
            />

            <ul className="images">
              {singleItem.images.map((image, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={`${index === value && "active"}`}
                  >
                    <img
                      src={image}
                      alt={singleItem.title}
                      style={{ objectFit: "contain" }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </article>

      {singleItem && (
        <article>
          <h1>{singleItem.title}</h1>
          <p>{singleItem.description}</p>
          <button>Add to cart</button>
        </article>
      )}
    </section>
  );
}
