import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className=" top-0 z-[99] mx-auto flex   w-full flex-wrap items-center  justify-between   border-b-[0.5px] border-sky-700 px-4 text-sky-800 shadow-md">
      <Logo />
      <NavMenu />
    </header>
  );
}

export default Header;
