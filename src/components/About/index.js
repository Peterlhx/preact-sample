import { h, Component } from 'preact'
import { route } from 'preact-router'
import './index.scss'

export default class App extends Component {

  goBack = () => {
    route('/')
  }

  render() {
    return (
      <div class="about">
        <h1>This is Aabout Page</h1>
        <a href="/">go back</a>
        <input type="button" value="goBack" onClick={this.goBack}/>
      </div>
    )
  }
}