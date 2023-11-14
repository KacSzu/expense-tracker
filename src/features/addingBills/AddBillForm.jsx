import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
import ModalFormRow from "../../ui/ModalFormRow";
import { useCreateBill } from "../expanses/useCreateBill";

function AddBillForm({ onCloseModal }) {
  const { handleSubmit, register, formState, reset } = useForm();
  const { createBill, isLoading: isCreating } = useCreateBill();
  const { errors } = formState;
  function onSubmit(data) {
    createBill(data, {
      onSuccess: () => {
        reset(), onCloseModal?.();
      },
    });
  }
  if (isCreating) return <Loader />;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-6 py-8 md:px-10 md:py-12 md:text-base lg:px-12 lg:py-16"
    >
      <ModalFormRow error={errors?.price?.message} label="Price">
        <input
          id="price"
          className="w-48 rounded-xl border border-stone-500 px-2 py-3 "
          type="number"
          defaultValue={0}
          {...register("price", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be minimum 1",
            },
          })}
        />
      </ModalFormRow>
      <ModalFormRow label="Category">
        <select
          id="category"
          type="text"
          className="w-48 rounded-xl border border-stone-500 px-2 py-3"
          {...register("category", { required: "This field is required" })}
        >
          <option>Housing </option>
          <option>Transport</option>
          <option>Food </option>
          <option>Medical</option>
          <option>Self-care</option>
        </select>
      </ModalFormRow>
      <ModalFormRow error={errors?.description?.message} label="Description">
        <textarea
          type="text"
          className="w-48 rounded-xl border border-stone-500 px-2 py-3"
          defaultValue=""
          id="description"
          {...register("description")}
        />
      </ModalFormRow>
      <ModalFormRow>
        <div className=" mt-3 flex  justify-center gap-6 md:mt-4 md:gap-8 lg:gap-10">
          <Button
            onClick={() => {
              onCloseModal?.();
              reset();
            }}
            disabled={isCreating}
            variation="danger"
            type="reset"
          >
            Cancel
          </Button>
          <Button variation="primary" type="primary">
            Add
          </Button>
        </div>
      </ModalFormRow>
    </form>
  );
}

export default AddBillForm;
