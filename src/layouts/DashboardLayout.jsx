// import { useAuth, AuthProvider } from "../Auth"
// import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const DashboardLayout = () => {
  // const navigate = useNavigate();
  // const { token } = useAuth()

  // useEffect(()=>{
  //   // if (!token) {navigate("login")}
  // })
  
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
    )
}

export default DashboardLayout;