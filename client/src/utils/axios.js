import axios from 'axios';

export async function getProducts(table){
    return await axios.get(`/api/produse/${table}`)
    
}
export async function getFromCart(){
    return await axios.get(`/api/cart`)
    
}
// export function addToCart(item){
//     return axios.post(`/api/add-to-cart/${item.tip}/${item.id}/${item.nume}/${item.imgurl}/${item.pret}`,{
//         type:item.tip,
//         id:item.id,
//         name:item.nume,
//         imgurl:item.imgurl,
//         price:item.pret
//     });
// }

export function addToCart(item){
    return axios.post(`/api/add-to-cart/`,{
        type:item.tip,
        id:item.id,
        name:item.nume,
        imgurl:item.imgurl,
        price:item.pret
    });
}