import { Navigate } from "react-router";
import { useAuthContext } from "../context/Auth"



export const PublicRoute = ({ children }) => {

  const { logged } = useAuthContext();

  const lastPath = localStorage.getItem('lastPath') || '/marvel';

  return (!logged) ? children : <Navigate to={lastPath} />

}
