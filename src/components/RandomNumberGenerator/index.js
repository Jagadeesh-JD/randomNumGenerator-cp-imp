import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  gettingRandomNumbers = () => {
    const getRandomNum = Math.ceil(Math.random() * 100)

    this.setState({randomNum: getRandomNum})
  }

  render() {
    const {randomNum} = this.state

    return (
      <div className="mega-container">
        <div className="sm-container">
          <h1 className="header">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.gettingRandomNumbers}
          >
            Generate
          </button>
          <p className="random-one">{randomNum}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
