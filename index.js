import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/App'
import {Router, Route, HasHistory} from 'react-router'
import About from './modules/About'
import Repos from './modules/Repos'

var router = (
  <Router history={HasHistory}>
    <Route path='/' component={App}>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'))
