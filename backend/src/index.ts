import express from "express";
import { AppDataSource } from "./config/db.config";
import { port } from "./config/env.config";
import albumRouter from "./routes/album.controller";
import genreRouter from "./routes/genre.controller";

(async () => {
  const app = express();

  app.use(express.json());

  app.use("/genre", genreRouter);
  app.use("/albums", albumRouter);

  await AppDataSource.initialize().catch((error) => console.log(error));

  app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}!`);
  });
})();
