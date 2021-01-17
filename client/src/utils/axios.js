import axios from 'axios';

export function getProducts(table){
    return axios.get(`/api/produse/${table}`)
    
}