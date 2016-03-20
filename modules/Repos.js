import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render: function() {
    return (<div>
      <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/rackt/react-router">React Router </NavLink></li>
          <li><NavLink to="/repos/facebook/react">React </NavLink></li>
        </ul>
        {this.props.children}
    </div>)
  }
})