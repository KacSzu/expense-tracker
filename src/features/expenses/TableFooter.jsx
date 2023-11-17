import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Pagination from "../../ui/Pagination";
import AddBillForm from "../addingBills/AddBillForm";

function TableFooter({ count }) {
  return (
    <footer className="mx-4 mt-4 flex justify-between md:mt-5 ">
      <Modal>
        <Modal.Open opens="newBill">
          <Button variation="primary">Add new bill</Button>
        </Modal.Open>
        <Modal.Window name="newBill">
          <AddBillForm />
        </Modal.Window>
      </Modal>
      <Pagination count={count} />
    </footer>
  );
}

export default TableFooter;
