import {getProducts} from '../../utils/axios';

export function cerceiFetchDataSuccess(cercei) {
    return {
        type: "CERCEI_FETCH_DATA_SUCCESS",
        cercei
    }
}

export function cerceiFetchData() {
    return (dispatch) => {
        getProducts("cercei").then(res=>dispatch(cerceiFetchDataSuccess(res.data)))
    }
}