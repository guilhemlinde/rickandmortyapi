const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fs = require("fs");

let characters = [];
const getCharacters = async () => {
  for (let i = 1; i <= 42; i++) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    const { results } = await res.json();

    characters.push(...results);
  }

  console.log(characters[825].id, characters[825].name, characters[825].image);

  //   const file = fs.writeFile(
  //     "characters.json",
  //     JSON.stringify(characters, null, 1),
  //     (err) => {
  //       if (err) console.log(err);
  //       else {
  //         console.log("File written successfully\n");
  //         console.log("The written has the following contents:");
  //         console.log(fs.readFileSync("characters.json", "utf8"));
  //       }
  //     }
  //   );
};

try {
  getCharacters().then(async () => {
    for (let i = 0; i <= 825; i++) {
      let character = await prisma.character.create({
        data: {
          id: characters[i].id,
          name: characters[i].name,
          image: characters[i].image,
        },
      });
      console.log(character);
    }
  });
} catch (e) {
  console.log(e);
}
