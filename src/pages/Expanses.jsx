import ModalAddBillForm from "../features/addingBills/modalAddBillForm";
import Table from "../features/expanses/Table";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Expanses() {
  return (
    <div className="mx-auto mb-5 sm:w-[85%] md:w-[75%] lg:w-[55%]">
      <div className=" w-[100%] rounded-md border border-sky-800 text-lg text-stone-800    ">
        <Table />
      </div>
      <div className="mx-4 mt-4 flex justify-between md:mt-5 ">
        <span>How many for page</span>

        <Modal>
          <Modal.Open opens="newBill">
            <Button variation="primary">Add new bill</Button>
          </Modal.Open>
          <Modal.Window name="newBill">
            <ModalAddBillForm />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Expanses;
