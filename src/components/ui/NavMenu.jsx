import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import NavLinks from "./NavLinks";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup the effect when the component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
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
        <div className=" z-50 flex h-screen basis-full flex-col items-center justify-start gap-5  pt-16  sm:gap-8">
          <NavLinks setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
}

export default NavMenu;
