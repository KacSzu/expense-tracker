import { HiArrowRightOnRectangle, HiOutlineUser } from "react-icons/hi2";

import ButtonIcon from "../../ui/ButtonIcon";
import { useNavigate } from "react-router-dom";
function AccountOptions() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5  ">
      <ButtonIcon onClick={() => navigate("/user")} type="normal">
        <HiOutlineUser />
      </ButtonIcon>
      <ButtonIcon onClick={() => navigate("logout")} type="normal">
        <HiArrowRightOnRectangle />
      </ButtonIcon>
    </div>
  );
}

export default AccountOptions;
