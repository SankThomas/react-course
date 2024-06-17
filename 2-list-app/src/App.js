import React, { useState } from "react";
import { cards } from "./data";

export default function App() {
  const [people, setPeople] = useState(cards);

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  // function handleDelete(id) {};

  return (
    <div className="container">
      <h1>List App {people.length} people</h1>

      <div className="cards">
        {/* {people.map(({ name, bio, id }) => (
          <article key={bio}>
            <h2>{name}</h2>
            <p>{bio}</p>
            <button className="danger" onClick={() => handleDelete(id)}>
              Remove
            </button>
          </article>
        ))} */}

        {people.map((card, index) => {
          return (
            <article key={index}>
              <h2>{card.name}</h2>
              <p>{card.bio}</p>
              <button className="danger" onClick={() => handleDelete(card.id)}>
                Remove
              </button>
            </article>
          );
        })}

        {/* {cards.map((card, index) => (
          <article key={index}>
            <h2>{card.name}</h2>
            <p>{card.bio}</p>
          </article>
        ))} */}

        {/* {cards.map((card, index) => {
          const { name, bio } = card;

          return (
            <article key={index}>
              <h2>{name}</h2>
              <p>{bio}</p>
            </article>
          );
        })} */}
      </div>
    </div>
  );
}
