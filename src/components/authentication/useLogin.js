import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Successfully logged in");
      navigate("/dashboard", { replace: true });
      queryClient.setQueryData(["user", user]);
    },
    onError: () => toast.error("Email or password are incorrect"),
  });

  return { login, isLoading };
}
