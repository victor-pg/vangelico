
export function cart (state = [], action) {
    switch (action.type) {
        case "CART_FETCH_DATA_SUCCESS":
            return action.cart;
        default:
            return state;
    }
}

