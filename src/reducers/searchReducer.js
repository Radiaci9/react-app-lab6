import C from "../constants"

let initialState = {
    repositories: [],
    error: false
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case C.FETCH_USER_REPOSITORIES_BY_CRITERIA:
            return { ...state, repositories: action.payload, error: false }
        case C.FETCH_USER_REPOSITORIES_BY_CRITERIA_FAILED:
            return { ...state, error: true }
        default:
            return state
    }
}
