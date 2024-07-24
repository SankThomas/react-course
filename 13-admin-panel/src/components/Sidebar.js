import React, { useState } from "react";
import { links } from "../data/data";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [items] = useState(links);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className={`sidebar dark-blue ${isOpen && "open"}`}>
        <nav>
          <ul className="sidebar-links">
            {items.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>
                  {link.icon} {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <button onClick={() => setIsOpen(!isOpen)} className="btn">
        {isOpen ? "Close" : "Open"}
      </button>
    </>
  );
}
