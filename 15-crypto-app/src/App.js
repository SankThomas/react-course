import React, { useState, useEffect } from "react";
import Coin from "./Coin";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [initial, setInitial] = useState(20);

  async function fetchCoins() {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${initial}&page=1&sparkline=false&precision=2`
    );
    const data = await res.json();
    setCoins(data);
  }

  useEffect(() => {
    fetchCoins();
  }, [initial]);

  function getMoreCoins() {
    setInitial(initial + 20);
  }

  return (
    <div className="container">
      <p
        style={{
          textAlign: "center",
        }}
      >
        Showing {coins.length} coins
      </p>

      <article
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginTop: 24,
            marginBottom: 24,
          }}
        >
          Lastest info from the Crypto Space
        </h1>
        <p
          style={{
            marginBottom: 32,
          }}
        >
          Powered by the <a href="https://coingecko.com">Coingecko API</a>
        </p>
      </article>

      <article className="coins">
        {coins.map((coin) => (
          <Coin key={coin.id} {...coin} />
        ))}
      </article>

      <button onClick={getMoreCoins} className="btn">
        Get more coins
      </button>
    </div>
  );
}
