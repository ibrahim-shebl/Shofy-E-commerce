import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouteUser = () => {
  // التحقق من وجود accessToken في localStorage
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouteUser;
