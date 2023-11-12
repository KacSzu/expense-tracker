import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center px-24 py-12">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
