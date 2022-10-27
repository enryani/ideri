import { Router } from "express";
import { Album } from "../models/Album";
const albumRouter = Router();

albumRouter.post("/", async (request, response) => {
  const { title, artisteName, cover, genreId } = request.body;

  const payload = {
    title,
    artisteName,
    cover,
    genreId,
  };

  const album = await Album.save({
    ...payload,
  });

  const result = await Album.findOne({
    where: { id: album.id },
  });

  return response.json(result);
});

export default albumRouter;
