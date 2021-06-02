import React from "react";
import "./styles.css";
import { useState } from "react";

const animeDB = {
  Action: [
    {
      name: "Fullmetal Alchemist - Brotherhood",
      animeWiki:
        "https://en.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood"
    },
    { name: "Attack on Titan" },
    { name: "Kenichi- The Mightiest Disciple" },
    { name: "My Hero Academia" },
    { name: "the Fate Series" }
  ],
  Adventure: [
    { name: "Hunter x Hunter" },
    { name: "One Piece" },
    { name: "JoJo’s Bizarre Adventure" },
    { name: "Fairy Tail" },
    { name: "Naruto" }
  ],
  Comedy: [
    { name: "Great Teacher Onizuka" },
    { name: "Sakamoto Desu ga?" },
    { name: "Gintama" },
    { name: "One Punch Man" },
    { name: "Nichijou" }
  ],
  Romance: [
    { name: "Ao Haru Ride" },
    { name: "My Little Monster" },
    { name: "Toradora!" },
    { name: "Your Name" },
    { name: "Net-juu no Susume" },
    { name: "Kimi ni Todoke" }
  ],
  Sports: [
    { name: "Haikyuu!!" },
    { name: "Kuroko no Basket" },
    { name: "Diamond no Ace" },
    { name: "Yuri!!! on Ice" },
    { name: "Yowamushi Pedal" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🏯 Anime List</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite animes. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(animeDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                cursor: "pointer",
                listStyle: "none",
                padding: "0.5rem",
                border: "1px solid #28305ff5",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <a
                href={book.animeWiki}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div style={{ fontSize: "larger" }}> {book.name} </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
