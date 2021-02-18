
export function pandantive (state = [], action) {
    switch (action.type) {
        case "PANDANTIVE_FETCH_DATA_SUCCESS":
            return action.pandantive;
        default:
            return state;
    }
}

