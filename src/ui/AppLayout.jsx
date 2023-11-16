import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-8  px-2  ">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
