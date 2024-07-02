import React from "react";

export default function Preview({ markdown, md }) {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    ></div>
  );
}
