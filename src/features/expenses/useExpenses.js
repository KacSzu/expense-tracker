import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExtenses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";

export function useExpenses() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("category");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "category", value: filterValue };
  const sortByRaw = searchParams.get("sortBy") || "createdDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    data: { data: expenses, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["expense", filter, page, sortBy],
    queryFn: () => getExpenses({ sortBy, page, filter }),
  });
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["expense", filter, sortBy, page + 1],
      queryFn: () => getExpenses({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["expense", filter, sortBy, page - 1],
      queryFn: () => getExpenses({ filter, sortBy, page: page - 1 }),
    });
  return { expenses, error, isLoading, count };
}
