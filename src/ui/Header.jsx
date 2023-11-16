import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className="top-0 z-[99] mx-auto  flex w-full   flex-wrap items-center justify-between  border-b-[0.5px] border-emerald-700   bg-stone-200 px-4 text-emerald-700 shadow-md lg:pb-2">
      <Logo />
      <NavMenu />
    </header>
  );
}

export default Header;
