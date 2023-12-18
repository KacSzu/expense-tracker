import Loader from "../ui/Loader";
import { useRecentExpenses } from "./useRecentExpenses";
import DashboardSummary from "./DashboardSummary";
import ChartLayout from "./ChartLayout";
function DashboardLayout() {
  const { expenses, isLoading, numDays } = useRecentExpenses();
  if (isLoading) return <Loader />;
  return (
    <div className="mb-4">
      <DashboardSummary numDays={numDays} expenses={expenses} />
      <ChartLayout expenses={expenses} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
