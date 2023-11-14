import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "date-asc";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <select
      onChange={handleChange}
      value={sortBy}
      className="rounded-md border border-sky-800 py-2 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2 lg:px-3 lg:text-sm"
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
