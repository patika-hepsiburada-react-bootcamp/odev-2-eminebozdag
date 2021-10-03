import React, { useState } from "react";
const word = "HANGMAN";
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function Hangman(props) {
  const [correctGuesses, setCorrectGuesses] = useState([]);

  //check the letter
  const maskedWord = word
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");
  return (
    <div>
      <p>{maskedWord}</p>
      {alphabets.map((alphabet, index) => (
        <button
          key={index}
          onClick={() => {
            if (word.includes(alphabet)) {
              setCorrectGuesses([...correctGuesses, alphabet]);
            }
          }}
        >
          {alphabet}
        </button>
      ))}
      {!maskedWord.includes("_") && <p>You won!</p>}
    </div>
  );
}

export default Hangman;
