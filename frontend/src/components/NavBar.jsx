import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

export default function NavBar() {
  return (
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
                  Register
                </Link>
                <Link to="/logout" className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
  )
}
