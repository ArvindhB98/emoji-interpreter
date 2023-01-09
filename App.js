import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning face",
  "😄": "Grinning face with smiling eyes, happy face, smiley face",
  "😆": "Grinning squinting face emoji",
  "😅": "Phew emoji, grinning face with sweat, relief emoji",
  "🤣": "Rolling on the floor laughing",
  "🙃": "Upside down face",
  "😉": "Winky face",
  "😍": "Heart eyes",
  "😜": "Stuck out tongue winking eye",
  "🤔": "Depicts going into a deep state of thinking",
  "🤑": "Dollar sign eyes, money face",
  "😴": "Sleepy, Zzz face"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setmeaning(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this in our Database.";
    }
  }
  function emojiClick(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={onChangeHandler} />
      <div className="meaning"> {meaning}</div>
      <h2> Emojis we know</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
