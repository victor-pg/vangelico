
export function cercei (state = [], action) {
    switch (action.type) {
        case "CERCEI_FETCH_DATA_SUCCESS":
            return action.cercei;
        default:
            return state;
    }
}

