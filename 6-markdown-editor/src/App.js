import React, { useState } from "react";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";
import { Remarkable } from "remarkable";

const md = new Remarkable();

export default function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="container">
      <Markdown markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} md={md} />
    </div>
  );
}
