// const fs = require("fs");

// const getCharacters = async () => {
//   let characters = [];
//   for (let i = 1; i <= 42; i++) {
//     const res = await fetch(
//       `https://rickandmortyapi.com/api/character?page=${i}`
//     );
//     const { results } = await res.json();
//     characters.push(...results);
//   }

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
// };

// try {
//   getCharacters();
// } catch (e) {
//   console.log(e);
// }
