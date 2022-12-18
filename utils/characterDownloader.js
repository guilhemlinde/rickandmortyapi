// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// let characters = [];

// const getCharacters = async () => {
//   for (let i = 1; i <= 42; i++) {
//     const res = await fetch(
//       `https://rickandmortyapi.com/api/character?page=${i}`
//     );

//     const { results } = await res.json();

//     characters.push(...results);
//   }
// };

// try {
//   getCharacters().then(async () => {
//     for (let i = 0; i < 826; i++) {
//       let character = await prisma.character.create({
//         data: {
//           ...characters[i],
//         },
//       });
//     }
//   });
// } catch (e) {
//   console.log(e);
// }
