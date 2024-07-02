import React, { useEffect } from "react";
import phone from "./phone.png";
import { FaDribbble, FaPinterest, FaTumblr } from "react-icons/fa";

export default function App() {
  useEffect(() => {
    document.title = "Desginer and Web Developer Portfolio";
  }, []);

  return (
    <>
      <main>
        <div>
          <h1>Thomas Sankara</h1>
          <p>is a Front-end web developer based in Nairobi, Kenya</p>

          <ul>
            <li>
              <button>
                <FaDribbble />
              </button>
            </li>
            <li>
              <button>
                <FaTumblr />
              </button>
            </li>
            <li>
              <button>
                <FaPinterest />
              </button>
            </li>
          </ul>

          <img src={phone} alt="iPhone" />
        </div>
      </main>
    </>
  );
}
