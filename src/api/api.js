import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

export const API = {
    getCategories(){
        return instance.get('/URL', data).then(response => {
            return response
        })
    }
}