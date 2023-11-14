import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className=" mx-auto mb-8 w-full px-2 pt-8">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
