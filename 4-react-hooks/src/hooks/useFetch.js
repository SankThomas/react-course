import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setCards(data);
    }

    getData();
    // I forgot to mention this in the video
    // Add url as a dependency array to ensure that the useEffect
    // will rerun when the url changes
  }, [url]);

  return cards;
}
