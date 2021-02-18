import {getProducts} from '../../utils/axios';

export function bratariFetchDataSuccess(bratari) {
    return {
        type: "BRATARI_FETCH_DATA_SUCCESS",
        bratari
    }
}

export function bratariFetchData() {
    return (dispatch) => {
        getProducts("bratari").then(res=>dispatch(bratariFetchDataSuccess(res.data)))
    }
}