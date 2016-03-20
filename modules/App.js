import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import About from './About'
import Repos from './Repos'
import NavLink from './NavLink'


export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><NavLink to='/' onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
