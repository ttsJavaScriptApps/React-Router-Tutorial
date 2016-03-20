import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import NavLink from './modules/NavLink'
import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
			<IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
				<Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
