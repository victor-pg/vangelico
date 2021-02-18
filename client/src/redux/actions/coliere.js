import {getProducts} from '../../utils/axios';

export function coliereFetchDataSuccess(coliere) {
    return {
        type: "COLIERE_FETCH_DATA_SUCCESS",
        coliere
    }
}

export function coliereFetchData() {
    return (dispatch) => {
        getProducts("coliere").then(res=>dispatch(coliereFetchDataSuccess(res.data)))
    }
}