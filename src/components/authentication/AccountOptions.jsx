import { HiArrowRightOnRectangle } from "react-icons/hi2";

import Loader from "../ui/Loader";
import ButtonIcon from "../ui/ButtonIcon";
import { useLogout } from "./useLogout";
function AccountOptions() {
  const { logout, isLoading } = useLogout();
  if (isLoading) return <Loader />;
  return (
    <div className="flex gap-5  ">
      <ButtonIcon onClick={() => logout()} type="normal">
        <HiArrowRightOnRectangle />
      </ButtonIcon>
    </div>
  );
}

export default AccountOptions;
