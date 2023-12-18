import { useEffect } from "react";
import { useUser } from "../authentication/useUser";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, fetchStatus, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated && fetchStatus !== "fetching")
        navigate("/login");
    },
    [isLoading, isAuthenticated, fetchStatus, navigate],
  );

  if (isLoading) return <Loader />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
