import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { PAGE_SIZE } from "../utils/constant";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  if (pageCount <= 1) return null;
  return (
    <div className="flex gap-3  ">
      <ButtonIcon onClick={prevPage} type="small">
        <HiArrowLeft />
      </ButtonIcon>
      <span className="flex items-center rounded-full border border-stone-800 px-3 py-1 text-sm font-semibold sm:py-1 md:px-4  md:text-base lg:px-5 lg:text-xl ">
        {currentPage}
      </span>
      <ButtonIcon onClick={nextPage} type="small">
        <HiArrowRight />
      </ButtonIcon>
    </div>
  );
}

export default Pagination;
