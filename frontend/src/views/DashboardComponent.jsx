import { useEffect, useState } from "react";
import { askProtectedRoute } from "../services/services";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [info, setInfo] = useState("");

    useEffect(() => {
        askProtectedRoute().then((data) => {
            console.log(data);
            setInfo(data.message);
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
    }, []);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Dashboard protected 🤨</h1>
            <p className="text-xl text-gray-700 mb-8">{info}</p>
        </div>
    );
};

export default Dashboard;