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
    {
      name: "Attack on Titan",
      animeWiki: "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)"
    },
    {
      name: "Kenichi- The Mightiest Disciple",
      animeWiki: "https://en.wikipedia.org/wiki/Kenichi:_The_Mightiest_Disciple"
    },
    {
      name: "My Hero Academia",
      animeWiki: "https://en.wikipedia.org/wiki/My_Hero_Academia"
    },
    {
      name: "the Fate Series",
      animeWiki: "https://typemoon.fandom.com/wiki/Fate_series"
    }
  ],
  Adventure: [
    {
      name: "Hunter x Hunter",
      animeWiki: "https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter"
    },
    { name: "One Piece", animeWiki: "https://en.wikipedia.org/wiki/One_Piece" },
    {
      name: "JoJo’s Bizarre Adventure",
      animeWiki: "https://en.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure"
    },
    {
      name: "Fairy Tail",
      animeWiki: "https://en.wikipedia.org/wiki/Fairy_Tail"
    },
    { name: "Naruto", animeWiki: "https://en.wikipedia.org/wiki/Naruto" }
  ],
  Comedy: [
    {
      name: "Great Teacher Onizuka",
      animeWiki: "https://en.wikipedia.org/wiki/Great_Teacher_Onizuka"
    },
    {
      name: "Sakamoto Desu ga?",
      animeWiki:
        "https://en.wikipedia.org/wiki/Haven%27t_You_Heard%3F_I%27m_Sakamoto"
    },
    { name: "Gintama", animeWiki: "https://en.wikipedia.org/wiki/Gin_Tama" },
    {
      name: "One Punch Man",
      animeWiki: "https://en.wikipedia.org/wiki/One-Punch_Man"
    },
    { name: "Nichijou", animeWiki: "https://en.wikipedia.org/wiki/Nichijou" }
  ],
  Romance: [
    {
      name: "Ao Haru Ride",
      animeWiki: "https://en.wikipedia.org/wiki/Ao_Haru_Ride"
    },
    {
      name: "My Little Monster",
      animeWiki: "https://en.wikipedia.org/wiki/My_Little_Monster"
    },
    { name: "Your Name", animeWiki: "https://en.wikipedia.org/wiki/Your_Name" },
    {
      name: "Net-juu no Susume",
      animeWiki: "https://en.wikipedia.org/wiki/Recovery_of_an_MMO_Junkie"
    },
    {
      name: "Kimi ni Todoke",
      animeWiki: "https://en.wikipedia.org/wiki/Kimi_ni_Todoke"
    }
  ],
  Sports: [
    { name: "Haikyuu!!", animeWiki: "https://en.wikipedia.org/wiki/Haikyu!!" },
    {
      name: "Kuroko no Basket",
      animeWiki: "https://en.wikipedia.org/wiki/Kuroko%27s_Basketball"
    },
    {
      name: "Diamond no Ace",
      animeWiki: "https://en.wikipedia.org/wiki/Ace_of_Diamond"
    },
    {
      name: "Yuri!!! on Ice",
      animeWiki: "https://en.wikipedia.org/wiki/Yuri_on_Ice"
    },
    {
      name: "Yowamushi Pedal",
      animeWiki: "https://en.wikipedia.org/wiki/Yowamushi_Pedal"
    }
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
        Checkout my favorite animes. Select a genre and choose to know about
        them{" "}
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
              margin: "0.3rem 0.3rem"
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
                width: "90%",
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
