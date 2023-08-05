import api from './axiosConfig';

export const getBlogPosts = async (endpoint) => {
    return api.get(`/api/blog/posts?type=${endpoint}`);
}

export const getBlogPost = async (endpoint, id) => {
    return api.get(`/api/blog/posts/${id}?type=${endpoint}`);
}