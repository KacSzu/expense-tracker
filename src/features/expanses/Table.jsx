import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useExpenses } from "./useExpenses";

function Table() {
  const { data: expenses, error, isLoading } = useExpenses();
  if (isLoading) return <Loader />;
  if (error) return <Error>No expenses could be found</Error>;
  return (
    <div className="text-sm md:text-base  lg:text-lg ">
      <TableHeader className="font-semibold " />
      <div>
        {expenses.map((expense) => (
          <TableRow key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
}

export default Table;
