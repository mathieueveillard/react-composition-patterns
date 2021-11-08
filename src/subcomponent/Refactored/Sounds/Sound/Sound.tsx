import React from "react";
import { AnimalSound } from "../../AnimalSound";

interface Props {
  sound: AnimalSound;
}

function Sound({ sound: { species, sound } }: Props): React.ReactElement {
  return <div>{`The ${species} goes "${sound}"!`}</div>;
}

export default Sound;
