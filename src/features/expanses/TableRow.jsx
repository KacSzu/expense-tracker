import { HiOutlineEye, HiOutlineTrash } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import Loader from "../../ui/Loader";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { useDeleteBill } from "./useDeleteBill";

function TableRow({ expense }) {
  const { id, date, category, price } = expense;

  const { deleteBill, isDeleting } = useDeleteBill();

  if (isDeleting) return <Loader />;
  return (
    <div className=" grid grid-cols-[0.25fr,0.25fr,0.25fr,0.25fr] content-center items-center divide-x-2 divide-emerald-800  px-2 py-3 sm:grid-cols-[0.2fr,0.4fr,0.2fr,0.2fr] sm:text-sm md:grid-cols-[0.2fr,0.4fr,0.2fr,0.2fr] lg:text-base">
      <div>
        <span>{formatDate(date)}</span>
      </div>
      <div>
        <span
          className={`ml-2  rounded-full px-2 py-2    md:px-3  ${
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
      </div>
      <div>
        <span className=" pl-3 ">{formatCurrency(price)}</span>
      </div>
      <div className="flex justify-around">
        <ButtonIcon onClick={() => deleteBill(id)} type="small">
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
