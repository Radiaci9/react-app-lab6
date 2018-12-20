import C from "../constants"

let initialState = {
    avatar: null,
    login: '',
    name: '',
    bio: '',
    company: '',
    location: '',
    email: '',
    blog: '',
    orgs: [],
    followers: null,
    repositories: null,
    error: false
}
export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case C.FETCH_USER:
            const {avatar_url, login, name, bio, company, location, email, blog} = action.payload
            return {...state, avatar: avatar_url, login, name, bio, company, location, email, blog, error: false }
        case C.FETCH_USER_FOLLOWERS:
            return { ...state, followers: action.payload, error: false }
        case C.FETCH_USER_REPOSITORIES:
            return { ...state, repositories: action.payload, error: false }
        case C.FETCH_USER_ORGS:
            return { ...state, orgs: action.payload, error: false }
        case C.FETCH_USER_FAILED:
            return { ...state, error: true }
        default:
            return state
    }
}
