import ExpensesOperations from "../features/expanses/ExpensesOperations";
import Table from "../features/expanses/Table";

function Expenses() {
  return (
    <div className="mx-auto text-xs sm:w-[85%]  md:w-[75%]  lg:w-[70%]    ">
      <ExpensesOperations />
      <div className="rounded-md border border-emerald-800    ">
        <Table />
      </div>
    </div>
  );
}

export default Expenses;
