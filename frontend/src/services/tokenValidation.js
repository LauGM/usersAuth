export const isTokenValid = () => {
    const token = sessionStorage.getItem('token');
    const expiresAt = sessionStorage.getItem('token_expires_at');

    if (!token || !expiresAt) return false;

    return new Date(expiresAt) > new Date();
};