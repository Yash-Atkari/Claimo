import axios from 'axios';

export const getUsers      = () => axios.get(`/api/users`);
export const addUser       = (name) => axios.post(`/api/users/${name}`);
export const claimPoints   = (userId) => axios.post(`/api/claims/${userId}`);
export const getLeaderboard = () => axios.get(`/api/claims/leaderboard`);
