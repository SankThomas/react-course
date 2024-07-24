import React, { useState } from "react";
import { questions, plans } from "../data/data";

export default function Upgrades() {
  const [quests] = useState(questions);
  const [cards] = useState(plans);
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="section">
        <h1>Upgrade your plan to enjoy more features</h1>
        <p>See and compare the features vailable on each plan.</p>

        <br />

        <ul className="buttons">
          <li>
            <button
              className={`btn btn-gray ${!yearly && "btn-active"}`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
          </li>
          <li>
            <button
              className={`btn btn-gray ${yearly && "btn-active"}`}
              onClick={() => setYearly(true)}
            >
              Yearly
            </button>
          </li>
        </ul>

        <section className="price-cards">
          {cards.map((card) => (
            <article
              key={card.id}
              style={{
                backgroundColor: `${card.borderColor}40`,
              }}
            >
              <h3>{card.title}</h3>
              {!yearly ? (
                <h4>
                  <span>$</span> {card.monthly} <span>per month</span>
                </h4>
              ) : (
                <h4>
                  <span>$</span> {card.yearly} <span>per month</span>
                </h4>
              )}

              <p className="about">
                <strong>{card.about}</strong>
              </p>
              <p className="desc">{card.desc}</p>

              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-blue">{card.button}</button>
            </article>
          ))}
        </section>

        <section>
          <h2>Frequently asked questions</h2>
          <div className="questions">
            {quests.map((quest) => (
              <article key={quest.id}>
                <h3>{quest.question}</h3>
                <p>{quest.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
