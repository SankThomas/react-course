import React, { useState, useEffect } from "react";

export default function Effect() {
  // const [countries, setCountries] = useState([]);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds < 0) {
      setSeconds(60);
    }

    const timeout = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(timeout);
    // I forgot to mention this in the video:
    // Add seconds as a dependency array so that, after adding your cleanup function
    // You won't have an infinite chain of updates
  }, [seconds]);

  // useEffect(() => {
  //   async function getCountries() {
  //     const res = await fetch("https://restcountries.com/v3.1/all");
  //     const data = await res.json();
  //     setCountries(data);
  //     console.log(data);
  //   }

  //   getCountries();
  // }, []);

  return (
    <div>
      <h1>useEffect</h1>
      {/* {countries.map((country) => (
        <article key={country.name.common}>
          <h2>{country.name.common}</h2>
        </article>
      ))} */}

      {seconds}
    </div>
  );
}
