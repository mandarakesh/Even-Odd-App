import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {even: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      even: prevState.even + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {even} = this.state

    const countStage = even % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <h1> Count {`${even}`}</h1>
        <p className="para">Count is {countStage}</p>
        <button
          onClick={this.onIncrement}
          type="button"
          className="buttonstate"
        >
          Increment
        </button>
        <p className="paragraph">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
