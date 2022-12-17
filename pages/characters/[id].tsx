import Image from "next/image";
import React from "react";
import imageLoader from "../../utils/imageLoader";
import { Character, GetCharacterResults } from "../../types";

type Props = {};

const CharacterPage = ({ character }: { character: Character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized
        src={`/jpeg-characters/${character.id}.jpeg`}
        alt={character.name}
        width="200"
        height="200"
      />
    </div>
  );
};

export async function getStaticPaths() {
  let characters = [];
  for (let i = 1; i < 42; i++) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    const { results } = await res.json();
    characters.push(...results);
  }

  return {
    paths: characters.map((character) => {
      return { params: { id: String(character.id) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
}

export default CharacterPage;
