import React, { useState } from "react";
import useFetch from "./useFetch";

export default function State() {
  const data = useFetch("https://restcountries.com/v3.1/all");

  // declare hooks
  // const [people, setPeople] = useState("Thomas Sankara");
  // const [text, setText] = useState("Default text");

  return (
    // <div>
    //   <input
    //     type="text"
    //     name="text"
    //     id="text"
    //     placeholder="Enter some text"
    //     required
    //     value={text}
    //     onChange={(e) => setText(e.target.value)}
    //   />

    //   <p>{text}</p>
    // </div>

    <div>
      <h1>useState</h1>
      {data.map((country) => (
        <article key={country.name.common}>
          <h2>{country.name.common}</h2>
        </article>
      ))}
    </div>
  );
}
