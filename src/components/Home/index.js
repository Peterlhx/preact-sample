import { h, Component } from 'preact'
import { route } from 'preact-router'
import './index.scss'

export default class App extends Component {

  goToAbout = () => {
    route('/about')
  }

  render() {
    return (
      <div class="home">
        <h1>Hello Preact</h1>
        <h3>This is Home Page</h3>
        <a href="/about">go to about</a>
        <input type="button" value="goToAbout" onClick={this.goToAbout}/>
      </div>
    )
  }
}