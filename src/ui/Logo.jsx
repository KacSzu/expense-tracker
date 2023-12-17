import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="rounded-full focus:outline-none " to="/">
      <img
        alt="logo"
        src="logo-transparent.png"
        className=" h-24 w-24  lg:h-28 lg:w-28"
      />
    </Link>
  );
}

export default Logo;
