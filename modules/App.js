import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'



export default React.createClass({
  render() {
    return <div>
              <h1>React rounter Tut</h1>
              <ul className="nav">
                <li><NavLink to='/about'  >About</NavLink></li>
                <li><NavLink to='/repos' > Repos</NavLink></li>

              </ul>
              {this.props.children}
            </div>
  }
})
