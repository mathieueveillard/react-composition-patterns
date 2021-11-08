import React from "react";

export interface AnimalSound {
  species: string;
  sound: string;
}

interface Props {
  sounds: AnimalSound[];
}

function Sounds({ sounds }: Props): React.ReactElement {
  return (
    <ul>
      {sounds.map(({ species, sound }) => (
        <li key={species}>{`The ${species} goes "${sound}"!`}</li>
      ))}
    </ul>
  );
}

export default Sounds;
