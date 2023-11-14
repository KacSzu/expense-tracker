import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      className="rounded-full focus:outline-none focus:ring focus:ring-sky-100 focus:ring-offset-2"
      to="/"
    >
      <img
        alt="logo"
        src="transparent-logo.png"
        className="h-24 w-24 lg:h-28 lg:w-28"
      />
    </Link>
  );
}

export default Logo;
