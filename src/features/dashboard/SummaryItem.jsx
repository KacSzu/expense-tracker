import { formatCurrency } from "../../utils/helpers";

function SummaryItem({ label, totalSpent = 0, totalBills }) {
  return (
    <div className="lg flex flex-col items-center gap-4 rounded-md bg-white px-2 py-6 shadow-lg md:px-4 md:py-8">
      <span className=" text-sm font-semibold text-emerald-700 md:text-lg lg:text-xl">
        {label}
      </span>
      <span className="text-sm md:text-base lg:text-lg">
        {" "}
        {totalSpent ? formatCurrency(totalSpent) : totalBills}
      </span>
    </div>
  );
}

export default SummaryItem;
