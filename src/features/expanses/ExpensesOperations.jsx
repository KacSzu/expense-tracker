import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ExpensesOperations() {
  return (
    <div className=" mb-2 ">
      <div className="flex flex-wrap justify-between   ">
        <Filter
          filterField="category"
          options={[
            { value: "all", label: "All" },
            { value: "food", label: "Food" },
            { value: "housing", label: "Housing" },
            { value: "medical", label: "Medical" },
            { value: "transport", label: "Transport" },
            { value: "self-care", label: "Self-care" },
          ]}
        />

        <SortBy
          options={[
            { value: "date-asc", label: "Sort by newest " },
            { value: "date-desc", label: "Sort by oldest" },
            { value: "price-asc", label: "Sort by lowest price" },
            { value: "price-desc", label: "Sort by highest price" },
          ]}
        />
      </div>
    </div>
  );
}

export default ExpensesOperations;
