import { useExpenses } from "./useExpenses";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

function Table() {
  const { expenses = [], isLoading, count } = useExpenses();

  if (isLoading) return <Loader />;
  if (!expenses.length) return <Error>No expenses could be found</Error>;
  return (
    <div className="pb-4">
      <TableHeader className="font-semibold " />
      {expenses.map((expense) => (
        <TableRow key={expense.id} expense={expense} />
      ))}
      <TableFooter count={count} />
    </div>
  );
}

export default Table;
