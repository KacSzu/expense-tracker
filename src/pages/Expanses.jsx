import TableHeader from "../ui/TableHeader";

function Table() {
  return (
    <>
      <div className="  w-[50%] rounded-md border border-sky-800 bg-sky-50 text-lg  text-stone-800">
        <TableHeader />
        <div className="grid grid-cols-[0.2fr,0.7fr,0.1fr] px-2 py-3">
          <div>20.11.2019</div>
          <div> Groceries</div>
          <div>10,38zł</div>
        </div>
      </div>
    </>
  );
}

export default Table;
