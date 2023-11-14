import Error from "./Error";

function modalFormRow({ label, children, error }) {
  return (
    <div className="my-3 flex flex-col text-center ">
      <label className="mb-2 font-semibold md:text-base lg:text-lg">
        {label}
      </label>
      <div>{children}</div>
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default modalFormRow;
