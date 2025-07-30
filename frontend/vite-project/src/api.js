import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE;

export const getUsers = () => axios.get(`${BASE_URL}/api/users`);
export const addUser = (name) => axios.post(`${BASE_URL}/api/users/${name}`);
export const claimPoints = (userId) => axios.post(`${BASE_URL}/api/claims/${userId}`);
export const getLeaderboard = () => axios.get(`${BASE_URL}/api/claims/leaderboard`);
