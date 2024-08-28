import React, { useMemo, useState } from "react";

export default function Memo() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("Sankara");

  const multiply = () => {
    return Math.random() * 99999;
  };

  const newValue = useMemo(() => multiply(), []);

  return (
    <div>
      <h1>useMemo</h1>
      <ul>
        <li>
          <button onClick={() => setCount(count + 1)}>Add</button>
        </li>
        <li>Count: {count}</li>
        <li>
          <button onClick={() => setCount(count - 1)}>Subtract</button>
        </li>
      </ul>

      <div>New Value: {newValue}</div>
    </div>
  );
}
