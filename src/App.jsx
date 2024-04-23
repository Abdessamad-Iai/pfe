import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import { DashboardLayout } from "./layouts";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="" element={<DashboardLayout />}>
            <Route path="home" element={<h1>Home</h1>}/>
          </Route>
          <Route path="login" element={<h1>Login</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
