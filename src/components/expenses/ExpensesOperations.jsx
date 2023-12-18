import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";

function ExpensesOperations() {
  return (
    <div className="mb-3 flex flex-wrap justify-between gap-3 ">
      <div className="space-x-1 lg:space-x-2">
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
      </div>

      <SortBy
        options={[
          { value: "createdDate-desc", label: "Sort by newest" },
          { value: "createdDate-asc", label: "Sort by oldest" },
          { value: "price-desc", label: "Sort by highest price" },
          { value: "price-asc", label: "Sort by lowest price" },
        ]}
      />
    </div>
  );
}

export default ExpensesOperations;
