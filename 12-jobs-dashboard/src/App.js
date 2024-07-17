import React, { useState } from "react";
import { jobs } from "./data";
import defaultImage from "./default.png";
import JobDetails from "./components/JobDetails";

export default function App() {
  const [cards, setCards] = useState(jobs);
  const [value, setValue] = useState(0);

  const {
    image,
    title,
    company,
    salary,
    location,
    type,
    applicants,
    about,
    responsibilities,
    featured,
    qualifications,
  } = cards[value];

  const content = {
    image,
    title,
    company,
    salary,
    location,
    type,
    applicants,
    about,
    responsibilities,
    featured,
    qualifications,
  };

  return (
    <section>
      <div className="container">
        {cards.map((card, index) => (
          <article
            key={card.id}
            className={`article ${index === value && "showing"}`}
            onClick={() => setValue(index)}
          >
            <h2 className="heading-2">
              <img
                src={`${card.image ? card.image : defaultImage}`}
                alt={card.company}
                className="company-img"
              />{" "}
              {card.title}
            </h2>
            <span className="salary">
              {card.salary} &middot; {card.location} &middot; {card.type}{" "}
              &middot; {card.applicants} applicants
            </span>
            <p className="about">{`${card.about.substring(0, 200)}...`}</p>
          </article>
        ))}
      </div>

      <JobDetails content={content} />
    </section>
  );
}
