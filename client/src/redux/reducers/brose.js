
export function brose (state = [], action) {
    switch (action.type) {
        case "BROSE_FETCH_DATA_SUCCESS":
            return action.brose;
        default:
            return state;
    }
}

