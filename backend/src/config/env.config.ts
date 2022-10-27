import dotenv from "dotenv";

import env from "env-var";

dotenv.config();

export const dbUrl = env.get("DB_URL").required().asString();
export const port = env.get("PORT").required().asPortNumber();
