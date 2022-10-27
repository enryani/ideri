import { Router } from "express";

const uploadsRouter = Router();

uploadsRouter.post("/", async (request, response) => {
  // const { file } = request.files;
  // const fileUpload = await file.mv(`./uploads/${file.name}`);
  // return response.json(fileUpload);
});
