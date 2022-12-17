const download = require("image-downloader");

function downloadImage(url, filepath) {
  return download.image({
    url,
    dest: filepath,
  });
}

for (let i = 824; i < 830; i++) {
  setTimeout(() => {
    downloadImage(
      `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`,
      "../../public"
    );
  }, 1000);
}
