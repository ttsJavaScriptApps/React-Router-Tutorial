import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import About from './About'
import Repos from './Repos'


export default React.createClass({
  render() {
    return(
      <div id="linkComponent">
        <h1>ReactRouter Tutorial</h1>
          <ul id="nav">
            <li><Link  to="/about">About</Link></li>
            <li><Link  to="/repos">Repos</Link></li>
          </ul>
      </div>
    )
  }
})
