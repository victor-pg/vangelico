
export function coliere (state = [], action) {
    switch (action.type) {
        case "COLIERE_FETCH_DATA_SUCCESS":
            return action.coliere;
        default:
            return state;
    }
}

