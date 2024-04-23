import { useAuth, AuthProvider } from "../Auth"
import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { token } = useAuth()

  useEffect(()=>{
    if (!token) {navigate("login")}
  })
  
  return (<Outlet />)
}

export default DashboardLayout;