import api from './api';

export const getUsers = async () => api.get('/users');

export const getShifts = async () => api.get('/shifts');
