import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../services/apiExtenses";

export function useExpenses() {
  const { data, isLoading } = useQuery({
    queryFn: getExpenses,
    queryKey: ["expense"],
  });
  return { data, error, isLoading };
}
