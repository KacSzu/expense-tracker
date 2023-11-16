import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
import FormRow from "../../ui/FormRow";
import { useCreateBill } from "../expanses/useCreateBill";
import { getToday } from "../../utils/helpers";

function AddBillForm({ onCloseModal }) {
  const { handleSubmit, register, formState, reset } = useForm();
  const { createBill, isCreating } = useCreateBill();
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
      className="px-6 py-8  md:px-10 md:py-12 md:text-base lg:px-12 lg:py-16"
    >
      <FormRow error={errors?.price?.message} label="Price">
        <input
          disabled={isCreating}
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
      </FormRow>
      <FormRow label="Category">
        <select
          disabled={isCreating}
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
      </FormRow>
      <FormRow error={errors?.description?.message} label="Description">
        <textarea
          disabled={isCreating}
          type="text"
          className="w-48 rounded-xl border border-stone-500 px-2 py-3"
          defaultValue=""
          id="description"
          {...register("description")}
        />
      </FormRow>
      <input
        disabled={isCreating}
        id="createdDate"
        className="hidden"
        defaultValue={getToday()}
        {...register("createdDate")}
      />
      <FormRow>
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
          <Button disabled={isCreating} variation="primary" type="primary">
            Add
          </Button>
        </div>
      </FormRow>
    </form>
  );
}

export default AddBillForm;
