import React from "react";
import { AnimalSound } from "./AnimalSound";
import Sounds from "./Sounds";

// https://www.vocabulary.cl/Lists/Animal_Sounds.htm
const sounds: AnimalSound[] = [
  { species: "cow", sound: "moo" },
  { species: "duck", sound: "quack" },
  { species: "cat", sound: "meow" },
  { species: "dog", sound: "woof" },
  { species: "human", sound: "Oh Djadja, y'a pas moyen Djadja" },
];

function Refactored(): React.ReactElement {
  return <Sounds sounds={sounds} />;
}

export default Refactored;
