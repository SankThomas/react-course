import React, { useState, useEffect } from "react";
import { FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("nature");

  const getImages = async () => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}`
    );
    const data = await res.json();
    setImages(data.results);
  };

  useEffect(() => {
    getImages();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // const getImages = async () => {
    //   const res = await fetch(
    //     `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}`
    //   );
    //   const data = await res.json();
    //   setImages(data.results);
    // };

    getImages();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a category of images</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a category of images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <section>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} />

            <div className="details">
              <article>
                <h2>
                  {image.user.first_name} {image.user.last_name}
                </h2>

                <ul>
                  {image.user.social.instagram_username ? (
                    <li>
                      <a
                        href={`https://instagram.com/${image.user.social.instagram_username}`}
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  ) : null}
                  {image.user.social.twitter_username ? (
                    <li>
                      <a
                        href={`https://x.com/${image.user.social.twitter_username}`}
                      >
                        <FaTwitter />
                      </a>
                    </li>
                  ) : null}
                  {image.user.social.portfolio_url ? (
                    <li>
                      <a href={image.user.social.portfolio_url}>
                        <FaGlobe />
                      </a>
                    </li>
                  ) : null}
                </ul>
              </article>

              {image.user.bio ? (
                <p>
                  <strong>Bio:</strong> {image.user.bio}
                </p>
              ) : null}

              {image.description ? (
                <>
                  <p
                    style={{
                      marginTop: 16,
                    }}
                  >
                    <strong>Photo description</strong>
                  </p>
                  {image.description ? <p>{image.description}</p> : null}
                </>
              ) : null}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
