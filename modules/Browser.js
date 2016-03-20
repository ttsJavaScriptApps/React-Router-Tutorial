import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'

export default React.createClass({

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  // ...

  handleSubmit(event) {
    // ...
    this.context.router.push(path)
  }
  // ..
})