import api from './axiosConfig';

// Check if user is logged in
export const checkLogin = async () => {
    return api.get('/api/user/login');
};

export const login = async (username, password) => {
    return api.post('/api/user/login', {
        username: username,
        password: password,
    });
};

export const loginGoogle = async (authCode) => {
    return api.post('/api/user/google-login', {
        code: authCode,
    });
};

export const logout = async () => {
    return api.get('/api/user/logout', { withCredentials: true });
};

export const register = async (username, password, email) => {
    return api.post('/api/user/register', {
        username: username,
        password: password,
        email: email,
    });
};
