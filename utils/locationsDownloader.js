// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();


// let locations = [];
// const getLocations = async () => {
//   for (let i = 1; i <= 7; i++) {
//     const res = await fetch(
//       `https://rickandmortyapi.com/api/location?page=${i}`
//     );
//     const { results } = await res.json();
//     locations.push(...results);
//   }
// };

// try {
//   getLocations().then(async () => {
//     for (let i = 0; i < 126; i++) {
//       let location = await prisma.location.create({
//         data: {
//           ...locations[i],
//         },
//       });

//     }
//   });
// } catch (e) {
//   console.log(e);
// }
