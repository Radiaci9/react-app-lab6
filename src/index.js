import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

import NavBar from "./components/NavBar"
import RepositoriesPage from "./containers/RepositoriesPage"
import Home from "./containers/Home"
import AnotherPage from "./containers/AnotherPage"

import store from "./store"
import history from "./history"

import "./styles/bootstrap.min.css"
import "./styles/index.css"
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
              <NavBar/>
              <Switch>
                  <Route exact string path="/react-app-lab6/" component={Home}/>
                  <Route exact string path="/react-app-lab6/anotherPage" component={AnotherPage}/>
                  <Route exact string path="/react-app-lab6/repositoriesPage" component={RepositoriesPage}/>
              </Switch>
            </div>
        </Router>
    </Provider>,
  document.getElementById("root")
)
