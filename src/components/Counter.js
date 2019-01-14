import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    count             : PropTypes.number,
    addCount          : PropTypes.func,
    addCountFromServer: PropTypes.func,
    removeCount       : PropTypes.func
  }

  componentDidMount() {
    this.props.addListenerCountFromSocket()
  }

  componentWillUnmount() {
    this.props.removeListenerCountFromSocket()
  }

  render() {
    const { count, addCount, removeCount, addCountFromServer, addCountToSocket } = this.props

    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => addCount()}>Add</button>
        <button onClick={() => removeCount()}>remove</button>
        <button onClick={() => addCountFromServer()}>Add 5 From Server</button>
        <button onClick={() => addCountToSocket()}>Emit 10 to Socket</button>
      </div>
    )
  }
}

export default Counter
