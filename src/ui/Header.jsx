import AccountOptions from "../features/account/AccountOptions";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className=" flex items-center justify-between border-b-[0.5px] border-sky-700 px-12 text-sky-700 ">
      <Logo />
      <NavMenu />
      <AccountOptions />
    </header>
  );
}

export default Header;
