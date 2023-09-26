import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReporterRouteProtect = (props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
    if (isLoggedIn && userRole !== "Reporter") {
      navigate("/admin", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return props.children;
};

export default ReporterRouteProtect;
