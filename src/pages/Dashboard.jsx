import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardOperations from "../features/dashboard/DashboardOperations";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <DashboardOperations />
      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
