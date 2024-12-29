import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteAdmin = () => {
  const token = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token && user?.email === "admin@gmail.com") {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRouteAdmin;
