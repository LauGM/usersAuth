import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHome } from 'react-icons/fa';
import './App.css';
import Register from './views/RegisterComponent'; 
import Login from './views/LoginComponent';
import Home from './views/HomeComponent';
import Dashboard from './views/DashboardComponent';
import Logout from './views/LogoutComponent';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
        <nav className="bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center text-xl font-bold text-blue-600">
                  <FaHome className="mr-2" /> App para autenticación
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Sign up
                </Link>
                <Link to="/logout" className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>

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
