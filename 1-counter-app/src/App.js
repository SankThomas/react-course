import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  // function addNumber() {}

  // function subtractNumber() {}

  // const addNumber = () => {
  //   setNumber(number + 1000);
  // };

  // const subtractNumber = () => {
  //   setNumber(number - 1000);
  // };

  return (
    <div className="container">
      <ul>
        <li>
          <button onClick={() => setNumber(number + 50)}>Add</button>
        </li>
        <li>{number}</li>
        <li>
          <button onClick={() => setNumber(number - 100)}>Subtract</button>
        </li>
      </ul>
    </div>
  );
}
