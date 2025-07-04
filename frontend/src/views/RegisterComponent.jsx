import { useState } from "react";
import { registerUser } from "../services/services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user_name") {
      setUser_name(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user_name,
      password,
    };
    console.log(newUser);
    registerUser(newUser).then((data) => {
      toast.success(data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        gravity: "top",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      });
      setUser_name("");
      setPassword("");
      navigate("/login");
    }).catch((error) => {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        gravity: "top",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User name
            </label>
            <input
              type="text"
              className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your user name"
              name="user_name"
              value={user_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Password
            </label>
            <input
              type="password"
              className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Create a password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
