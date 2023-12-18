import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardOperations from "../components/dashboard/DashboardOperations";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <DashboardOperations />
      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
