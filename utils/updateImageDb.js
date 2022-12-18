const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updateImageDb = async () => {
  for (let i = 1; i <= 826; i++) {
    const image = await prisma.character.update({
      where: {
        id: i,
      },
      data: {
        image: `/jpeg-characters/${i}.jpeg`,
      },
    });
  }
};

try {
  updateImageDb();
} catch (e) {
  console.log(e);
}
