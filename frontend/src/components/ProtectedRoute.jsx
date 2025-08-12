import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = sessionStorage.getItem('token') !== null;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

/* Outlet: Renderiza el contenido de la ruta protegida */