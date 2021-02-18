import {getFromCart} from '../../utils/axios';

export function cartFetchDataSuccess(cart) {
    return {
        type: "CART_FETCH_DATA_SUCCESS",
        cart
    }
}

export function cartFetchData() {
    return (dispatch) => {
        getFromCart().then(res=>dispatch(cartFetchDataSuccess(res.data)))
    }
}