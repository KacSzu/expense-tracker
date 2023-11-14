import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBill as deleteBillApi } from "../../services/apiExtenses";
export function useDeleteBill() {
  const queryClient = useQueryClient();
  const { mutate: deleteBill, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBillApi,
    mutationKey: ["expense"],
    onSuccess: () => {
      toast.success("Bill successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["expense"] });
    },
    onError: () => {
      toast.error("Bill could not be deleted");
    },
  });
  return { deleteBill, isDeleting };
}
