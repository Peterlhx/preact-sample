import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Home from './Home'
import About from './About'

export default class App extends Component {

  render() {
    return (
      <div id="app">
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </div>
    )
  }
}
