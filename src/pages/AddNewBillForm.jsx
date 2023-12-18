import AddBillForm from "../components/addingBills/AddBillForm";

function AddNewBillForm() {
  return (
    <div className="flex h-[70%] items-center justify-center  ">
      <div className=" mt-6 rounded-md bg-white px-3 shadow-md sm:px-6 sm:py-3 md:px-10 ">
        <AddBillForm />
      </div>
    </div>
  );
}

export default AddNewBillForm;
