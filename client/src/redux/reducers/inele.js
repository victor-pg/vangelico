
export function inele (state = [], action) {
    switch (action.type) {
        case "INELE_FETCH_DATA_SUCCESS":
            return action.inele;
        default:
            return state;
    }
}

