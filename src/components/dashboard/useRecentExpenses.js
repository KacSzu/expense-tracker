import { useQuery } from "@tanstack/react-query";
import { getExpensesByDate } from "../../services/apiExtenses";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export function useRecentExpenses() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();
  const { data: expenses, isLoading } = useQuery({
    queryFn: () => getExpensesByDate(queryDate),
    queryKey: ["expense", `last-${numDays}`],
  });
  return { expenses, isLoading, numDays };
}
