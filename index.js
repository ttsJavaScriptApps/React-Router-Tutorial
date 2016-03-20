import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
