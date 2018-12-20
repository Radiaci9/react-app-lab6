import {applyMiddleware, createStore} from "redux"
import rootReducer from "./reducers/rootReducer"
import createSagaMiddleware from 'redux-saga'
import { watchFetchUser, watchFetchUserFollowers,
         watchFetchUserRepositories, watchFetchUserOrgs,
         watchFetchUserRepositoriesByCriteria,
         watchFetchUserRepositoriesByCriteriaBest,
         watchFetchUserRepositoriesByCriteriaBestFastGrowing
       } from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchFetchUser)
sagaMiddleware.run(watchFetchUserFollowers)
sagaMiddleware.run(watchFetchUserRepositories)
sagaMiddleware.run(watchFetchUserOrgs)
sagaMiddleware.run(watchFetchUserRepositoriesByCriteria)
sagaMiddleware.run(watchFetchUserRepositoriesByCriteriaBest)
sagaMiddleware.run(watchFetchUserRepositoriesByCriteriaBestFastGrowing)

export default store
