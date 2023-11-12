import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <div className="flex gap-8 text-lg ">
      <NavLink className="hover:text-sky-800" to="/table">
        Expanses
      </NavLink>
      <NavLink to="/table">Add new bill</NavLink>
      <NavLink to="/table">Table with expanses</NavLink>

      {/* <span>Dashboard</span> */}
    </div>
  );
}

export default NavMenu;
