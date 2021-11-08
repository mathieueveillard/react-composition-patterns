# react-composition-patterns

## Sub component pattern

Assuming an `AnimalSound`:

```ts
interface AnimalSound {
  species: string;
  sound: string;
}
```

the following component…

```ts
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
```

can be refactored by introducing a new `Sound` component:

```ts
// Sounds
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

// Sound
interface Props {
  sound: AnimalSound;
}

function Sound({ sound: { species, sound } }: Props): React.ReactElement {
  return <div>{`The ${species} goes "${sound}"!`}</div>;
}
```

The important point here is that the `<li></li>` tag must NOT be part of the `Sound` item component, because it would introduce an unecessary coupling. The `Sound` component must NOT know anything of the context in which it is invoked. Here, it is an unordered list (`<ul></ul>`), but it could be a carrousel as well and this must NOT change anything to the `Sound` component.
