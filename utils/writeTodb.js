const prisma = require("prisma");
let characters = [];

const getCharacters = async () => {
  for (let i = 1; i <= 42; i++) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    const { results } = await res.json();
    characters.push(...results);
  }
};

const writeToDb = async () => {
  const characters = await getCharacters();
  for (let i = 0; i <= 826; i++) {
    const character = await user.prisma.create({
      data: {
        name: characters[i].name,
        image: characters[i].image,
      },
    });
    console.log(character);
  }
};

try {
  writeToDb();
} catch (e) {
  console.log(e);
}
