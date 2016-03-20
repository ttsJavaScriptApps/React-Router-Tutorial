import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import About from './About'
import Repos from './Repos'

export default React.createClass({
  render() {
    return ( 
    	<div>
    		<h1>React Router Tutorial</h1>
    		<ul role="nav">
    			<li><Link to="next">Next</Link></li>
    			<li><Link to="/about">About</Link></li>
    			<li><Link to="/repos">Repos</Link></li>
    		</ul>
    	</div>
    )
  }
})
