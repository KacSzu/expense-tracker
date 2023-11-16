import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="rounded-full focus:outline-none " to="/">
      <img
        alt="logo"
        src="logo-emerald-fotor-bg-remover-20231115205318.png"
        className=" shaodow-lg h-24 w-24 lg:h-28 lg:w-28"
      />
    </Link>
  );
}

export default Logo;
