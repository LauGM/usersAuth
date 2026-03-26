import { Navigate, Outlet } from 'react-router-dom';
import { isTokenValid } from '../services/tokenValidation';

const ProtectedRoute = () => {
    const isAuthenticated = isTokenValid();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

/* Outlet: Renderiza el contenido de la ruta protegida */