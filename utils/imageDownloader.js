const download = require("image-downloader");

function downloadImage(url, filepath) {
  console.log(url, filepath);
  return download.image({
    url,
    dest: filepath,
  });
}

const forLoop = async (_) => {
  console.log("Start");

  for (let index = 1; index <= 826; index++) {
    const image = await downloadImage(
      `https://rickandmortyapi.com/api/character/avatar/${index}.jpeg`,
      "../../public"
    );
    console.log(index, image);
  }

  console.log("End");
};

try {
  forLoop();
} catch (e) {
  console.log(e);
}
