import { useSearchParams } from "react-router-dom";
import Button from "./Button";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <>
      {options.map(({ value, label }) => (
        <Button
          variation="filter"
          active={currentFilter === value}
          disabled={currentFilter === value}
          onClick={() => {
            handleClick(value);
          }}
          key={value}
        >
          {label}
        </Button>
      ))}
    </>
  );
}

export default Filter;
