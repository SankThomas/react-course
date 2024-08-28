import React, { useState, useRef } from "react";

export default function Ref() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  console.log(inputRef.current.defaultValue);

  return (
    <div>
      <h1>useRef</h1>
      <input
        ref={inputRef}
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => inputRef.current.focus()}>Focus on Input</button>

      <p>{inputRef.current.defaultValue}</p>
    </div>
  );
}
