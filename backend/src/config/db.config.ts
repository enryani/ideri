import { DataSource } from "typeorm";
import { Album } from "../models/Album";
import { Genre } from "../models/Genre";
import { dbUrl } from "./env.config";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: dbUrl,
  synchronize: true,
  logging: true,
  entities: [Genre, Album],
  subscribers: [],
  migrations: [],
});
