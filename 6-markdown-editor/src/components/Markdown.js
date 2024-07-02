import React from "react";

export default function Markdown({ markdown, setMarkdown }) {
  return (
    <>
      <div className="markdown">
        <textarea
          name="markdown"
          id="markdown"
          placeholder="Start typing something..."
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}
