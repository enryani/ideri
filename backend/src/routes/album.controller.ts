import { Router } from "express";
import { FindOperator, Like } from "typeorm";
import { AppDataSource } from "../config/db.config";
import { Album } from "../models/Album";
import { Genre } from "../models/Genre";
import { PaginateItems } from "../utils/pagination";
import { resolveRelationships } from "../utils/resolveRelationships";
const albumRouter = Router();

albumRouter.post("/", async (request, response) => {
  const { title, artisteName, cover, genreIds } = request.body;

  const genres = await resolveRelationships(genreIds, Genre);

  const payload = {
    title,
    artisteName,
    cover,
  };

  const data = await Album.save({
    ...payload,
  });

  const album = await Album.findOne({
    where: { id: data.id },
  });

  if (!album) return response.send({ message: "Album not found" });

  album.genres = genres;

  await album.save();

  return response.json(album);
});

albumRouter.get("/", async (request, response) => {
  const { title, artisteName, page = 1, limit = 10 } = request.query;

  const where: {
    title?: FindOperator<string>;
    artisteName?: FindOperator<string>;
  } = {};

  if (title) {
    where.title = Like(`%${title}%`);
  }

  if (artisteName) {
    where.artisteName = Like(`%${artisteName}%`);
  }

  const albums = await PaginateItems(
    AppDataSource.getRepository(Album),
    {
      page: Number(page),
      limit: Number(limit),
    },
    { where }
  );

  return response.json(albums);
});

export default albumRouter;
