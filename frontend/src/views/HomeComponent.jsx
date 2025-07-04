import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Home = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Bienvenidos a Auth App</h1>
      <p className="text-xl text-gray-700 mb-8">Sistema listo para usar !</p>
      <div className="flex gap-4">
        <Link 
          to="/login" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <FaSignInAlt /> Login
        </Link>
        <Link 
          to="/register" 
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
        >
          <FaUserPlus /> Register
        </Link>
      </div>
    </div>
  );

export default Home;