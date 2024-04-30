import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import { DashboardLayout } from "./layouts";
import AddUser from './components/AddUser';
import History from "./components/History";
import ListeUsers from "./components/ListeUsers";
import Home from './components/Home'; 

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddUser />} />
            <Route path="history" element={<History />} />
            <Route path="listeusers" element={<ListeUsers />} />
          </Route>
          <Route path="login" element={<h1>Login</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
