/* import { useEffect, useState } from "react";
import { logoutRequest, profileRequest } from "../api/auth";
import { useNavigate } from "react-router-dom" */
import { useAuth } from "../context/AuthContext"

export const ProfilePage = () => {
  /* const [user, setUser] = useState(null);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const res = await profileRequest();
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    checkProfile();

  }, []);

  const navigate = useNavigate()

  const handleLogout = async () => {
    await logoutRequest()
    navigate("/login") }*/
  
  const { user, logout } = useAuth()

  return (
    <div>
      <div>Perfil</div>
      {user ? (
        <div>
          <p>Nombre: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* <button onClick={handleLogout}>Cerrar sesión</button> */}
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <p>Cargando perfil...</p>
        </div>
      )}
    </div>
    )
};
