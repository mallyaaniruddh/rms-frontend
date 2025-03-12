import { Navigate } from "react-router-dom";
import React from "react";
import { jwtDecode } from "jwt-decode";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  try {
    const { exp }: { exp: number } = jwtDecode(token);

    // If expired, force logout
    if (exp * 1000 <= Date.now()) {
      localStorage.removeItem("token");
      return <Navigate to="/login" />;
    }

    return <>{children}</>;
  } catch (error) {
    console.error("Invalid Token:", error);
    localStorage.removeItem("token"); // Remove corrupted token
    return <Navigate to="/login" />;
  }
};

export default AuthGuard;
