import { HiOutlineEye, HiOutlineTrash } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { formatCurrency, formatDate } from "../../utils/helpers";

function TableRow({ expense }) {
  const { created_at: date, category, price } = expense;

  return (
    <div className=" grid grid-cols-[0.25fr,0.25fr,0.25fr,0.25fr] content-center items-center divide-x-2 divide-sky-800  px-2 py-3 sm:grid-cols-[0.2fr,0.4fr,0.2fr,0.2fr] md:grid-cols-[0.2fr,0.4fr,0.2fr,0.2fr]">
      <div>
        <span>{formatDate(date)}</span>
      </div>
      <div>
        <span
          className={`ml-2  rounded-full px-3 py-2  ${
            category === "Car"
              ? "bg-red-200"
              : category === "Food"
              ? "bg-green-200"
              : category === "Medical"
              ? "bg-yellow-200"
              : category === "Housing"
              ? "bg-violet-200"
              : ""
          }`}
        >
          {category}
        </span>
      </div>
      <div>
        <span className=" pl-3 ">{formatCurrency(price)}</span>
      </div>
      <div className="flex justify-around">
        <ButtonIcon type="small">
          <HiOutlineTrash />
        </ButtonIcon>
        <ButtonIcon type="small">
          <HiOutlineEye />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default TableRow;
