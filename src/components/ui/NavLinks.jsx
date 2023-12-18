import { NavLink } from "react-router-dom";
import AccountOptions from "../authentication/AccountOptions";

function NavLinks({ setIsOpen }) {
  const options = [
    { label: "Dashboard", to: "dashboard" },
    { label: "Add new bill", to: "newBill" },
    { label: "Expenses", to: "expenses" },
  ];

  return (
    <>
      {options.map(({ label, to }) => (
        <NavLink
          onClick={() => setIsOpen?.((open) => !open)}
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
