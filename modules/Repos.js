import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    this.context.router.push(path)
    console.log(path)
  },

  render: function() {
    return (
      <div>
      	<h2>Repos</h2>
        <ul>
          <li><Link to="/repos/rackt/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
        </ul>     
        <ul>
					<li>
						<form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button>Submit</button>
            </form>
					</li>        
        </ul>   	
      </div>
    );
  }

});
