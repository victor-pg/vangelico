
export function bratari (state = [], action) {
    switch (action.type) {
        case "BRATARI_FETCH_DATA_SUCCESS":
            return action.bratari;
        default:
            return state;
    }
}

