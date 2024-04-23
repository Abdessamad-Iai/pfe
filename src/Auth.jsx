import { createContext, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000/api/"

const Auth = createContext()

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [token,setToken] = useState(localStorage.getItem("token") || null)
  const headers = new Headers({ 
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  const validateToken = async () => {
    headers.append("Authorization",`Bearer ${token}`)
    const response = await fetch(API_URL+'ping', {
      method: "POST",
      headers
    });
    if (!response.ok) {
      localStorage.removeItem("user");
      setUser({})
      setToken(null)
      navigate("/");
    }
  }

  // useEffect(()=>{
  //   validateToken()
  // },[])

  const login = async (userCredentials )=>{
    const response = await fetch(API_URL+'login', {
        method: "POST",
        headers,
        body: JSON.stringify(userCredentials)
    });
    if (!response.ok) return "Invalid credentials"

    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    setUser( { ...data.user } );
    setToken(token);
  }
  
  const logout = async () =>{
    headers.append("Authorization",`Bearer ${token}`)
    const response = await fetch(API_URL+'logout', {
        method: "POST",
        headers
    });
    if (response.ok) {
        localStorage.removeItem("user");
        setUser({})
        setToken(null)
        navigate("login");
    }
  }

  return (
    <Auth.Provider value={{
      user,
      token,
      login,
      logout
    }}>
      {children}
    </Auth.Provider>
  );
}

export const useAuth = () => useContext(Auth);
export default useAuth;