import AddBillForm from "../features/addingBills/AddBillForm";
import ExpensesOperations from "../features/expanses/ExpensesOperations";
import Table from "../features/expanses/Table";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Expenses() {
  return (
    <div className="mx-auto  text-xs sm:w-[85%] md:w-[75%]  lg:w-[55%]   ">
      <ExpensesOperations />
      <div className="rounded-md border border-sky-800  text-stone-800   ">
        <Table />
      </div>
      <div className="mx-4 mt-4 flex justify-between md:mt-5 ">
        <span>How many for page</span>

        <Modal>
          <Modal.Open opens="newBill">
            <Button variation="primary">Add new bill</Button>
          </Modal.Open>
          <Modal.Window name="newBill">
            <AddBillForm />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Expenses;
