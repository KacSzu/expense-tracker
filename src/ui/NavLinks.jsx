import { NavLink } from "react-router-dom";
import AccountOptions from "../features/account/AccountOptions";

function NavLinks() {
  const options = [
    { label: "Dashboard", to: "dashboard" },
    { label: "Add new bill", to: "newBill" },
    { label: "Expanses", to: "expanses" },
  ];

  return (
    <>
      {options.map(({ label, to }) => (
        <NavLink
          className=" rounded-md px-1 py-1 hover:text-emerald-950 focus:outline-none focus:ring focus:ring-emerald-300 lg:text-lg"
          key={label}
          to={`/${to}`}
        >
          {label}
        </NavLink>
      ))}

      <AccountOptions />
    </>
  );
}

export default NavLinks;
