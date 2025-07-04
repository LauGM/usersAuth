const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (newUser) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        const data = await response.json();

        if (!response.ok) {
            // Use server error message if available, fallback to status text
            const errorMessage = data.message || response.statusText;
            throw new Error(errorMessage);
        }

        return data;
    } catch (error) {
        // Re-throw the error to be handled by the calling component
        throw new Error(error.message || 'Registration failed. Please try again.');
    }
};

export const loginUser = async (user) => {
    try {
        const response = await fetch(`${API_URL}/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            // Use server error message if available, fallback to status text
            const errorMessage = data.message || response.statusText;
            throw new Error(errorMessage);
        }
        return data;
    } catch (error) {
        // Re-throw the error to be handled by the calling component
        throw new Error(error.message || 'Login failed. Please try again.');
    }
};

export const askProtectedRoute = async () => {
    try {
        const response = await fetch(`${API_URL}/protected`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            // Use server error message if available, fallback to status text
            const errorMessage = data.message || response.statusText;
            throw new Error(errorMessage);
        }
        return data;
    } catch (error) {
        // Re-throw the error to be handled by the calling component
        throw new Error(error.message || 'Protected route access failed. Please try again.');
    }
};
    
export const logoutUser = async () => {
    try {
        const response = await fetch(`${API_URL}/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            // Use server error message if available, fallback to status text
            const errorMessage = data.message || response.statusText;
            throw new Error(errorMessage);
        }
        return data;
    } catch (error) {
        // Re-throw the error to be handled by the calling component
        throw new Error(error.message || 'Logout failed. Please try again.');
    }
};  