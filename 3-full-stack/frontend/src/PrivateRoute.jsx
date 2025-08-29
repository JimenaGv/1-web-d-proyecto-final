/* import { useState, useEffect } from "react";
import { api } from "./services/api"; */
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"

export const PrivateRoute = ({ children }) => {
  /* const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/profile");
        setAuth(true);
      } catch (error) {
        console.log(error);
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) {
    return null; // o un loader visual
  } */

    const { user, loading } = useAuth()

     if(loading) return <p>Cargando...</p>

  //return auth ? children : <Navigate to="/login" />;
   return user ? children : <Navigate to="/login"/>
};
