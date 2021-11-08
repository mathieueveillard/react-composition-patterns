import React from "react";
import Sounds, { AnimalSound } from "./Sounds";

const sounds: AnimalSound[] = [
  { species: "cow", sound: "moo" },
  { species: "duck", sound: "quack" },
  { species: "cat", sound: "meow" },
  { species: "dog", sound: "woof" },
  { species: "human", sound: "Oh Djadja, y'a pas moyen Djadja" },
];

function Legacy(): React.ReactElement {
  return <Sounds sounds={sounds} />;
}

export default Legacy;
