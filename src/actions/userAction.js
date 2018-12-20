import C from "../constants"

export const fetchUser = data => ({type: C.FETCH_USER, payload: data})
export const fetchUserFollowers = data => ({type: C.FETCH_USER_FOLLOWERS, payload: data})
export const fetchUserRepositories = data => ({type: C.FETCH_USER_REPOSITORIES, payload: data})
export const fetchUserOrgs = data => ({type: C.FETCH_USER_ORGS, payload: data})
export const fetchUserFailed = () => ({type: C.FETCH_USER_FAILED})
export const fetchUserRepositoriesByCriteria = data => ({type: C.FETCH_USER_REPOSITORIES_BY_CRITERIA, payload: data})
export const fetchUserRepositoriesByCriteriaFailed = () => ({type: C.FETCH_USER_REPOSITORIES_BY_CRITERIA_FAILED})
