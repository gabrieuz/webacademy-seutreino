import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postProfessionalReview = async (data) => {
  const { rating, clientId, professionalId, tags } = data;

  const tagIds = await getTagIds(tags);

  const newProfessionalReview = await prisma.professionalReview.create({
    data: {
      rating,
      clientId,
      professionalId,
      tags: {
        connect: tagIds.map((tagId) => ({ id: tagId })),
      },
    },
    include: {tags: true}
  });
  
  return newProfessionalReview;
};

const getTagIds = async (tagNames) => {
  const tagNamesArray = tagNames.map((tag) => tag.name);

  const tags = await prisma.tag.findMany({
    where: {
      name: {
        in: tagNamesArray,
      },
    },
  });

  const tagIds = tags.map((tag) => tag.id);

  return tagIds;
};
export { postProfessionalReview };
