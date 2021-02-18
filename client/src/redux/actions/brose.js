import {getProducts} from '../../utils/axios';

export function broseFetchDataSuccess(brose) {
    return {
        type: "BROSE_FETCH_DATA_SUCCESS",
        brose
    }
}

export function broseFetchData() {
    return (dispatch) => {
        getProducts("brose").then(res=>dispatch(broseFetchDataSuccess(res.data)))
    }
}