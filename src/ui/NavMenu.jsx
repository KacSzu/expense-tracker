import { useState } from "react";
import { HiMegaphone, HiXMark } from "react-icons/hi2";
import NavLinks from "./NavLinks";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" flex w-1/2 justify-end md:w-3/4 lg:w-1/2 ">
        <div className="  hidden w-full items-center justify-between md:flex">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen((o) => !o)}>
            {isOpen ? <HiXMark /> : <HiMegaphone />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="mt-16 flex h-screen basis-full flex-col items-center gap-5  sm:gap-8">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default NavMenu;
