import React, { useState, useEffect, useCallback } from "react";

export default function Callback() {
  const [count, setCount] = useState(10);
  const [countries, setCountries] = useState([]);

  const getCountries = useCallback(async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1>useCallback</h1>
      <ul>
        <li>
          <button onClick={() => setCount(count + 1)}>Add</button>
        </li>
        <li>Count: {count}</li>
        <li>
          <button onClick={() => setCount(count - 1)}>Subtract</button>
        </li>
      </ul>

      <Component getCountries={getCountries} />
    </div>
  );
}

function Component({ getCountries }) {
  useEffect(() => {
    console.log("Fetching countries");
  }, [getCountries]);
}
