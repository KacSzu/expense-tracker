import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const {
    data: user,
    isLoading,
    fetchStatus,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return {
    user,
    fetchStatus,
    isLoading,
    isAuthenticated: user?.user?.role === "authenticated",
  };
}
