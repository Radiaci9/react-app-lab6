import axios from "axios"
import { put, takeEvery, call } from 'redux-saga/effects'

import { fetchUser, fetchUserFollowers, fetchUserRepositories,
         fetchUserOrgs, fetchUserFailed, fetchUserRepositoriesByCriteria,
         fetchUserRepositoriesByCriteriaFailed } from "./actions/userAction"
import C from './constants'

const user = 'gaearon'

export function* watchFetchUser() {
  yield takeEvery(C.FETCHED_USER, fetchUserAsync)
}
export function* watchFetchUserFollowers() {
  yield takeEvery(C.FETCHED_USER_FOLLOWERS, fetchUserFollowersAsync)
}
export function* watchFetchUserRepositories() {
  yield takeEvery(C.FETCHED_USER_REPOSITORIES, fetchUserRepositoriesAsync)
}
export function* watchFetchUserOrgs() {
  yield takeEvery(C.FETCHED_USER_ORGS, fetchUserOrgsAsync)
}
export function* watchFetchUserRepositoriesByCriteria() {
  yield takeEvery(C.FETCHED_USER_REPOSITORIES_BY_CRITERIA, fetchUserRepositoriesByCriteriaAsync)
}
export function* watchFetchUserRepositoriesByCriteriaBest() {
  yield takeEvery(C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST, fetchUserRepositoriesByCriteriaBestAsync)
}
export function* watchFetchUserRepositoriesByCriteriaBestFastGrowing() {
  yield takeEvery(C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST_FAST_GROWING, fetchUserRepositoriesByCriteriaBestFastGrowingAsync)
}

function* fetchUserAsync() {
   try {
       const data = yield call(() => (
          axios.get(`https://api.github.com/users/${user}`)
               .then(response => response.data)
        )
       )
       yield put(fetchUser(data))
   } catch (error) {
      yield put(fetchUserFailed())
      console.log(error)
   }
}

function* fetchUserFollowersAsync() {
   try {
       const data = yield call(() => (
          axios.get(`https://api.github.com/users/${user}/followers`)
               .then(response => response.data)
        )
       )
       yield put(fetchUserFollowers(data))
   } catch (error) {
      yield put(fetchUserFailed())
      console.log(error)
   }
}

function* fetchUserRepositoriesAsync() {
   try {
       const data = yield call(() => (
          axios.get(`https://api.github.com/users/${user}/repos`)
               .then(response => response.data)
        )
       )
       yield put(fetchUserRepositories(data))
   } catch (error) {
      yield put(fetchUserFailed())
      console.log(error)
   }
}

function* fetchUserOrgsAsync() {
   try {
       const data = yield call(() => (
          axios.get(`https://api.github.com/users/${user}/orgs`)
               .then(response => response.data)
        )
       )
       yield put(fetchUserOrgs(data))
   } catch (error) {
      yield put(fetchUserFailed())
      console.log(error)
   }
}

function* fetchUserRepositoriesByCriteriaAsync(action) {
   try {
       const data = yield call(() => (
          axios.get(`https://api.github.com/search/repositories?q=${action.payload.type ? `user:${user}+` : ''}${action.payload.name}in:name`)
               .then(response => response.data.items.slice(0,100))
        )
       )
       yield put(fetchUserRepositoriesByCriteria(data))
   } catch (error) {
      yield put(fetchUserRepositoriesByCriteriaFailed())
      console.log(error)
   }
}

function* fetchUserRepositoriesByCriteriaBestAsync() {
   try {
       const data = yield call(() => (
          axios.get(`https://api.github.com/search/repositories?q=stars:>=20000`)
               .then(response => response.data.items.slice(0,5))
        )
       )
       yield put(fetchUserRepositoriesByCriteria(data))
   } catch (error) {
      yield put(fetchUserRepositoriesByCriteriaFailed())
      console.log(error)
   }
}


function* fetchUserRepositoriesByCriteriaBestFastGrowingAsync() {
   try {
       const data = yield call(() => (
          axios.get(`https://api.github.com/search/repositories?q=size:>=2000000`)
               .then(response => response.data.items.slice(0,5))
        )
       )
       yield put(fetchUserRepositoriesByCriteria(data))
   } catch (error) {
      yield put(fetchUserRepositoriesByCriteriaFailed())
      console.log(error)
   }
}
