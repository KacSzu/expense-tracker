import { HiOutlineCog6Tooth } from "react-icons/hi2";

function TableHeader() {
  return (
    <header className=" grid grid-cols-[0.25fr,0.25fr,0.25fr,0.25fr]   content-center divide-x-2   divide-sky-800  border-b border-sky-800 bg-sky-200 px-2 py-3 text-sm font-medium sm:grid-cols-[0.2fr,0.4fr,0.2fr,0.2fr] sm:text-base md:grid-cols-[0.2fr,0.4fr,0.2fr,0.2fr] lg:text-lg ">
      <div>Date</div>
      <div className="pl-3">Category</div>
      <div className="pl-3">Price</div>
      <div className="flex justify-center pl-3">
        <span className="flex items-center justify-center text-lg md:text-xl lg:text-2xl">
          <HiOutlineCog6Tooth />
        </span>
      </div>
    </header>
  );
}

export default TableHeader;
