import {getProducts} from '../../utils/axios';

export function pandantiveFetchDataSuccess(pandantive) {
    return {
        type: "PANDANTIVE_FETCH_DATA_SUCCESS",
        pandantive
    }
}

export function pandantiveFetchData() {
    return (dispatch) => {
        getProducts("pandantive").then(res=>dispatch(pandantiveFetchDataSuccess(res.data)))
    }
}