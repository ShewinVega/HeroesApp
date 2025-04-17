import React from 'react';
import { Navigate } from "react-router";
import { useAuthContext } from "../context/Auth/auth.context"
import { Outlet } from "react-router";
import { Navbar } from '../ui';
import { useLocation } from "react-router";


export const PrivateRoute = () => {
  const { logged } = useAuthContext();

  const { pathname, search } = useLocation();

  const lastPath = pathname + search;

  localStorage.setItem('lastPath', lastPath);

  return (logged)
    ? <>
      <Navbar />
      <Outlet />
    </>
    : <Navigate to="/login" />
}
