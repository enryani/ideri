import { paginate, IPaginationOptions } from "nestjs-typeorm-paginate";
import { FindManyOptions, FindOneOptions } from "typeorm";

export async function PaginateItems<T>(
  repository: any,
  options: IPaginationOptions,
  searchOptions: FindOneOptions<T> | FindManyOptions<T> = {}
) {
  const response = await paginate(repository, options, searchOptions);

  const pagination = {
    page: Number(response.meta.currentPage),
    pageCount: Number(response.meta.totalPages),
    perPage: Number(response.meta.itemsPerPage),
    total: Number(response.meta.totalItems),
    skipped: Number(
      response.meta.itemsPerPage * (response.meta.currentPage - 1)
    ),
  };

  return {
    data: response.items,
    meta: pagination,
  };
}
