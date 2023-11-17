import { formatCurrency, formatDate } from "../../utils/helpers";
import { HiCalendarDays } from "react-icons/hi2";
function ExpenseDetails({ expense }) {
  const { category, date, description, id, price } = expense;
  return (
    <div className="flex flex-col items-center gap-5 px-6 py-8  md:px-10 md:py-12 lg:px-12 lg:py-16">
      <div className="flex gap-2 text-emerald-600 ">
        <h2 className="font-semibold md:text-lg">Bill #{id}</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-2xl text-emerald-600 lg:text-4xl">
          <HiCalendarDays />
        </span>
        <span className="text-center text-sm sm:text-base lg:text-lg">
          Created at {formatDate(date)}
        </span>
      </div>
      <span
        className={` rounded-full px-2 py-2 md:px-3    md:text-base  ${
          category === "Self-care"
            ? "bg-yellow-100"
            : category === "Food"
            ? "bg-yellow-300 "
            : category === "Medical"
            ? "bg-stone-300"
            : category === "Housing"
            ? "bg-orange-200"
            : category === "Transport"
            ? "bg-red-300"
            : ""
        }`}
      >
        {category}
      </span>
      <span className="text-base font-semibold">{formatCurrency(price)}</span>
      <div className="md:text-lg lg:text-xl">
        {description ? description : "There is no description"}
      </div>
    </div>
  );
}

export default ExpenseDetails;
