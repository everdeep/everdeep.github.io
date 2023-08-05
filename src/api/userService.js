import api from './axiosConfig';

export const postUpdateUserDetails = async (user_details) => {
    return api.post('/api/user/details', { ...user_details });
};

export const postUpdateUserPassword = async (password) => {
    return api.post('/api/user/password', { password: password });
};

// Get user role
export const getUserRole = async () => {
    return api.get('/api/user/role');
};

// Get user activity
export const getLoginActivity = async () => {
    return api.get('/api/user/activity?action=LOGIN');
}