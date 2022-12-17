import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";
import { GetStaticProps, NextPage } from "next";
import { Character, GetCharacterResults } from "../../types";
import imageLoader from "../../utils/imageLoader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = ({ characters }: any) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {characters.map((character: Character) => {
          return (
            <div key={character.id}>
              <Link href={`/characters/${character.id}`}>
                <h3>{character.name}</h3>

                <Image
                  loader={imageLoader}
                  unoptimized
                  src={`/jpeg-characters/${character.id}.jpeg`}
                  alt={character.name}
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <main className={styles.main}></main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  let characters = [];
  for (let i = 1; i <= 42; i++) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    const { results } = await res.json();
    characters.push(...results);
  }

  return {
    props: {
      characters,
    },
  };
};
