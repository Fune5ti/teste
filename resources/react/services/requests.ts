import api from './api';
import { toast } from 'react-toastify';
import {ICreateUser} from "../types/User";
import {AxiosError} from "axios";

export const getErrorMessage = (error: unknown) => {
    if (error instanceof AxiosError) return error.response.data.message;
    return String(error)
}
export const getUsers = async () => {
    try {
        const response = await api.get('/users/all');
        return response.data;
    } catch (error) {
        toast.error(getErrorMessage(error));
        return [];
    }
}
export const createUser = async (data:ICreateUser) => {
    try {
        const response = await api.post('/users', data);
        toast.success('User created successfully');
        return response.data;
    } catch (error) {
        const message = getErrorMessage(error);
        toast.error(message || 'Failed to create user');
        return null;
    }
};
export const getUser = async (id: number) => {
    if (!id) {
        toast.error("User ID is required!");
        return;
    }
    try {
        const response = await api.get('/users/' + id);
        return response.data;
    } catch (error) {
        toast.error(getErrorMessage(error));
        return null;
    }
}

// @ts-ignore
export const deleteUser = async(id: number) => {
    if (!id) {
        toast.error("User ID is required!");
        return;
    }
    try {
        await api.delete('/users/' + id);
        toast.success('User deleted successfully');
    } catch (error) {
        toast.error(getErrorMessage(error));
    }
}
export const updateUser = async (id: number, data: ICreateUser) => {
    if (!id) {
        toast.error("User ID is required!");
        return;
    }
    try {
        const response = await api.put('/users/' + id, data);
        toast.success('User updated successfully');
        return response.data;
    } catch (error) {
        toast.error(getErrorMessage(error));
        return null;
    }
}
