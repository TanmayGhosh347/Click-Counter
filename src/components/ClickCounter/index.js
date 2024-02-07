// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreaseBtn = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="number">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button type="button" onClick={this.onIncreaseBtn} className="btn">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
