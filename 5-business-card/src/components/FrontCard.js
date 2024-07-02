import React from "react";

export default function FrontCard({ setIsShowing }) {
  return (
    <>
      <div className="container">
        <h1 onClick={() => setIsShowing(true)}>Thomas Sankara</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti
          officiis distinctio dolorum laborum iure delectus fuga suscipit
          placeat aliquid.
        </p>

        <ul>
          <li>
            <button>Facebook</button>
          </li>
          <li>
            <button>X</button>
          </li>
          <li>
            <button>Instagram</button>
          </li>
        </ul>
      </div>
    </>
  );
}
