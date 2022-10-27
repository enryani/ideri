import { EntityTarget } from "typeorm";
import { AppDataSource } from "../config/db.config";

export const resolveRelationships = async <T>(
  payload: string[],
  entity: EntityTarget<T>,
  key = "id"
): Promise<T[]> => {
  const data = [];
  for (const value of payload) {
    const where: any = {};
    where[key] = value;
    const item = await AppDataSource.getRepository<any>(entity as any).findOne({
      where: where,
    });
    if (item) {
      data.push(item);
    }
  }

  return data;
};
