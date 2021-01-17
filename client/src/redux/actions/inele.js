import {getProducts} from '../../utils/axios';

export function ineleFetchDataSuccess(inele) {
    return {
        type: "INELE_FETCH_DATA_SUCCESS",
        inele
    }
}

export function ineleFetchData() {
    return (dispatch) => {
        getProducts("inele").then(res=>dispatch(ineleFetchDataSuccess(res.data)))
    }
}