import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRouteProtect = (props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
    if (isLoggedIn && userRole !== "Administrator") {
      navigate("/reporter", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return props.children;
};

export default AdminRouteProtect;
