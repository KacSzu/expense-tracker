import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBill as createBillApi } from "../../services/apiExtenses";
import toast from "react-hot-toast";

export function useCreateBill() {
  const queryClient = useQueryClient();
  const { mutate: createBill, isLoading: isCreating } = useMutation({
    mutationFn: createBillApi,
    mutationKey: ["expense"],
    onSuccess: () => {
      toast.success("New bill successfully created");
      queryClient.invalidateQueries({ queryKey: ["expense"] });
    },
    onError: () => {
      toast.error("New bill could not be created");
    },
  });
  return { createBill, isCreating };
}
