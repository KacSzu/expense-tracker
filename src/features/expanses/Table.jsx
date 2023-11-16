import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useExpenses } from "./useExpenses";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";
import AddBillForm from "../addingBills/AddBillForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
function Table() {
  const { data: expenses = [], isLoading } = useExpenses();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("category") ?? "all";
  let filtredExpenses;
  if (filterValue === "all") filtredExpenses = expenses;
  if (filterValue === "food")
    filtredExpenses = expenses.filter((expense) => expense.category === "Food");
  if (filterValue === "housing")
    filtredExpenses = expenses.filter(
      (expense) => expense.category === "Housing",
    );
  if (filterValue === "medical")
    filtredExpenses = expenses.filter(
      (expense) => expense.category === "Medical",
    );
  if (filterValue === "transport")
    filtredExpenses = expenses.filter(
      (expense) => expense.category === "Transport",
    );
  if (filterValue === "self-care")
    filtredExpenses = expenses.filter(
      (expense) => expense.category === "Self-care",
    );
  const sortBy = searchParams.get("sortBy") || "date-asc";
  const [field, direction] = sortBy.split("-");
  let sortedExpenses;
  const modifier = direction === "asc" ? 1 : -1;
  if (field === "date")
    sortedExpenses = filtredExpenses.sort((a, b) => {
      const dateA = new Date(a[field]);
      const dateB = new Date(b[field]);
      return (dateA - dateB) * modifier;
    });

  sortedExpenses = filtredExpenses.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );
  if (isLoading) return <Loader />;
  if (!expenses.length) return <Error>No expenses could be found</Error>;
  return (
    <div>
      <TableHeader className="font-semibold " />
      <div>
        {sortedExpenses.map((expense) => (
          <TableRow key={expense.id} expense={expense} />
        ))}
      </div>
      <footer className="mx-4 mt-4 flex justify-between md:mt-5 ">
        <Pagination />
        <Modal>
          <Modal.Open opens="newBill">
            <Button variation="primary">Add new bill</Button>
          </Modal.Open>
          <Modal.Window name="newBill">
            <AddBillForm />
          </Modal.Window>
        </Modal>
      </footer>
    </div>
  );
}

export default Table;
