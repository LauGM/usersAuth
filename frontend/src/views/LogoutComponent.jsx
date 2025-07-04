import { useEffect } from "react";
import { logoutUser } from "../services/services";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        logoutUser().then(() => {
            // muy importante borrar el token de la sesion
            sessionStorage.removeItem("token");
            toast.success("Logout successful", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                gravity: "top",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            });
            setTimeout(() => {
                navigate("/");
            }, 3000);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <div>
                <h1>Logout</h1>
            </div>
        </>
    );
};

export default Logout;