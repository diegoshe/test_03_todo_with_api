import axios from 'axios';


const API_URL = 'http://localhost:8000';

export default class TodosService{

    constructor(){}

    getTodos() {
        const url = `${API_URL}/api/todos/`;
        return axios.get(url).then(response => response.data);
    }
    getTodosByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getTodo(pk) {
        const url = `${API_URL}/api/todos/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteTodo(customer){
        const url = `${API_URL}/api/todos/${customer.pk}`;
        return axios.delete(url);
    }
    createTodo(customer){
        const url = `${API_URL}/api/todos/`;
        return axios.post(url,customer);
    }
    updateTodo(customer){
        const url = `${API_URL}/api/todos/${customer.pk}`;
        return axios.put(url,customer);
    }
}