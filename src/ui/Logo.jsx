import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      className="rounded-full focus:outline-none focus:ring focus:ring-sky-100"
      to="/"
    >
      <img src="transparent-logo.png" className="h-24 w-24 " />
    </Link>
  );
}

export default Logo;
