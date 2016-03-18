import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

ReactDOM.render((
  <Router >
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/repos" component={Repos}/>
  </Router>
), document.getElementById('app'))
