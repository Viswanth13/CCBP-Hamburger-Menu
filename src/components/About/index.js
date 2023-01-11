import {Component} from 'react'
import Header from '../Header'

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
            alt="about"
            className="home-image"
          />
        </div>
      </div>
    )
  }
}

export default About
