import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😑": "Annoyance",
  "🐕": "Dog",
  "🐈": "Cat",
  "🐪": "Camel",
  "🦄": "Unicorn",
  "🐖": "Pig",
  "🦏": "Rhinocerous",
  "🐍": "Snake",
  "🕷️": "Spider",
  "🐧": "Penguin"
};

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandller(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiHandler} />
      <div style={{ margin: "1rem" }}>
        {" "}
        <h2>{meaning}</h2>{" "}
      </div>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandller(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
