import { Router } from "express";
import { Genre } from "../models/Genre";

const genreRouter = Router();

genreRouter.post("/", async (request, response) => {
  const { name, description } = request.body;

  const payload = {
    name,
    description,
    created_at: new Date(),
  };

  const genre = await Genre.save(payload);

  return response.json(genre);
});

genreRouter.get("/", async (_, response) => {
  const genres = await Genre.find();

  return response.json(genres);
});

export default genreRouter;
