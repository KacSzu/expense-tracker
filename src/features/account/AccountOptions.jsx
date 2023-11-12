import { HiArrowRightOnRectangle, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
function AccountOptions() {
  return (
    <div className="flex gap-6 text-2xl ">
      <Link className="rounded-full bg-sky-100 p-4">
        <HiOutlineUser />
      </Link>
      <Link className="rounded-full bg-sky-100 p-4">
        <HiArrowRightOnRectangle />
      </Link>
    </div>
  );
}

export default AccountOptions;
