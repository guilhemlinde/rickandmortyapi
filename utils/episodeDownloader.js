// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();


// let episodes = [];
// const getEpisode = async () => {
//   for (let i = 1; i <= 3; i++) {
//     const res = await fetch(
//       `https://rickandmortyapi.com/api/episode?page=${i}`
//     );
//     const { results } = await res.json();
//     episodes.push(...results);
//   }
// };

// try {
//   getEpisode().then(async () => {
//     for (let i = 0; i < 51; i++) {
//       let episode = await prisma.episode.create({
//         data: {
//           ...episodes[i],
//         },
//       });
//     }
//   });
// } catch (e) {
//   console.log(e);
// }