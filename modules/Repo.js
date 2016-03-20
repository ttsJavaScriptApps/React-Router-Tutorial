import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
  render() {
    return (
      <div>
      	<h2>{this.props.params.repoName}</h2>    	
      </div>
    );
  }
});

