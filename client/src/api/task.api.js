import axios from "axios";

const urlApi = axios.create({
    baseURL:'http://localhost:8000/task/api/v1/task/'
})

export const getAllTasks = () => urlApi.get('/');

export const createTasks = (task) => urlApi.post('/', task)

export const updateTasks = (id, task) => urlApi.put(`/${id}/`,task)
