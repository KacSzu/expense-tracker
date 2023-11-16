import Filter from "../../ui/Filter";

function DashboardOperations() {
  return (
    <div className="space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5">
      <Filter
        filterField="last"
        options={[
          {
            value: "7",
            label: "Last 7 days",
          },
          {
            value: "30",
            label: "Last 30 days",
          },
          {
            value: "90",
            label: "Last 90 days",
          },
        ]}
      />
    </div>
  );
}

export default DashboardOperations;
