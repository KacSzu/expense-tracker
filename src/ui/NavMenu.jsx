import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import NavLinks from "./NavLinks";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" flex w-1/2 justify-end md:w-3/4 lg:w-1/2 ">
        <div className="  hidden w-full items-center justify-around md:flex">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen((o) => !o)}>
            {isOpen ? (
              <span className="focus:ring-emerlad-200 text-xl focus:outline-none focus:ring focus:ring-offset-2">
                <HiXMark />
              </span>
            ) : (
              <span className="text-xl focus:outline-none focus:ring focus:ring-emerald-200 focus:ring-offset-2">
                <HiBars3 />
              </span>
            )}
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
