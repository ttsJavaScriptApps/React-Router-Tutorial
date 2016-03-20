import React from 'react'


export default React.createClass({
  render(){
    return(
      <h2>{this.props.params.repoName} <br />
      {this.props.params.userName}
      </h2>
    )
  }

})
