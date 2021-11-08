import React from "react";
import { AnimalSound } from "../AnimalSound";
import Sound from "./Sound";

interface Props {
  sounds: AnimalSound[];
}

function Sounds({ sounds }: Props): React.ReactElement {
  return (
    <ul>
      {sounds.map((sound) => (
        <li key={sound.species}>
          <Sound sound={sound} />
        </li>
      ))}
    </ul>
  );
}

export default Sounds;
