import { useSearchParams } from "react-router-dom";
import { useExpenses } from "./useExpenses";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

function Table() {
  const { expenses = [], isLoading, count } = useExpenses();
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

  if (isLoading) return <Loader />;
  if (!expenses.length) return <Error>No expenses could be found</Error>;
  return (
    <div className="pb-4">
      <TableHeader className="font-semibold " />
      {filtredExpenses.map((expense) => (
        <TableRow key={expense.id} expense={expense} />
      ))}
      <TableFooter count={count} />
    </div>
  );
}

export default Table;
