import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { items } from "./data";
import SingleProduct from "./SingleProduct";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Online Store With Tabs</h1>
                <div className="cards">
                  {items.map((item) => (
                    <Link key={item.id} to={`/${item.id}`}>
                      <article>
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          style={{ objectFit: "contain" }}
                        />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </article>
                    </Link>
                  ))}
                </div>
              </>
            }
          />
          <Route path="/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
