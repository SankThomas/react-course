import React from "react";

export default function Coin({ symbol, name, image, current_price }) {
  return (
    <div>
      <article className="coin">
        <div>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{symbol}</p>
        </div>

        <div>
          <h2>$ {current_price}</h2>
        </div>
      </article>
    </div>
  );
}
