// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelrate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(p => ({count: p.count + 10}))
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(p => ({count: p.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" onClick={this.accelrate}>
            Accelerate
          </button>
          <button type="button" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
