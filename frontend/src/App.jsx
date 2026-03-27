import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Register from './views/RegisterComponent'; 
import Login from './views/LoginComponent';
import Home from './views/HomeComponent';
import Dashboard from './views/DashboardComponent';
import Logout from './views/LogoutComponent';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes - Route anidadas*/}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            
            <Route path="/logout" element={<Logout />} />
            
            {/* Redirige al Home si la ruta no existe */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
